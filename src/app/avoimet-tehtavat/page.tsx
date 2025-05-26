import React from "react";
import { parseStringPromise } from "xml2js";

export default async function AvoimetTehtavatPage() {
  const feedUrl = "https://ats.talentadore.com/positions/2qMT6SN/rss?v=2&language=fi&tags=&notTags=&businessUnits=&notBusinessUnits=&display_description=job_ad&categories=tags_and_extras";
  let jobs: { title: string; link: string; description: string; pubDate: string }[] = [];
  let error: string | null = null;
  try {
    const res = await fetch(feedUrl, { cache: 'no-store' });
    const xml = await res.text();
    const parsed = await parseStringPromise(xml, { explicitArray: false });
    // Debug: log the parsed structure
    console.log('Parsed RSS:', JSON.stringify(parsed, null, 2));
    let items = parsed?.rss?.channel?.item;
    if (!items) {
      error = 'RSS feed does not contain any items.';
    } else {
      if (!Array.isArray(items)) items = [items];
      jobs = items.map((item: any) => ({
        title: item.title || "",
        link: item.link || "",
        description: item.description || "",
        pubDate: item.pubDate || "",
      }));
    }
  } catch (e) {
    error = 'Virhe RSS-syötteen haussa tai käsittelyssä.';
  }

  return (
    <main className="flex flex-col items-center px-2 sm:px-0 mt-8 mb-12 min-h-[70vh]">
      <div className="w-full max-w-3xl flex flex-col gap-8">
        <section className="bg-white/90 rounded-2xl shadow-lg p-6 sm:p-10 flex flex-col items-center gap-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-900 mb-2">Avoimet Tehtävät</h1>
          <p className="text-gray-800 leading-relaxed text-center mb-4">Tältä sivulta löydät ajankohtaiset avoimet työpaikat.</p>
          {error ? (
            <p className="text-red-500">{error}</p>
          ) : jobs.length === 0 ? (
            <p className="text-gray-500">Ei avoimia tehtäviä juuri nyt.</p>
          ) : (
            <ul className="w-full flex flex-col gap-6">
              {jobs.map((job, i) => (
                <li key={i} className="bg-white rounded-xl shadow p-4 flex flex-col gap-2">
                  <a href={job.link} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-800 hover:underline">
                    {job.title}
                  </a>
                  <div className="text-gray-700 text-sm" dangerouslySetInnerHTML={{ __html: job.description }} />
                  {job.pubDate && <div className="text-xs text-gray-400">Julkaistu: {new Date(job.pubDate).toLocaleDateString('fi-FI')}</div>}
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
} 
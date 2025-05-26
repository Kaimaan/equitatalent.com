export default function Tiimi() {
  return (
    <main className="flex flex-col items-center px-2 sm:px-0 mt-8 mb-12 min-h-[70vh]">
      <div className="w-full max-w-3xl flex flex-col gap-8">
        <section className="bg-white/90 rounded-2xl shadow-lg p-6 sm:p-10 flex flex-col items-center gap-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-900 mb-2">Tiimi</h1>
          <h2 className="text-lg sm:text-xl font-semibold text-blue-800 mb-2">Kokeneita johtajia. Uudistajia. Ihmisiä ihmisille.</h2>
          <p className="text-gray-800 leading-relaxed text-center">
            Tiimimme koostuu kokeneista liiketoimintajohtajista, HR-ammattilaisista ja asiantuntijoista, jotka ovat olleet vastuussa lukuisista organisaatioiden murroskohdista – strategiasta ja kasvusta kulttuurimuutoksiin.
          </p>
        </section>
        <section className="bg-white/80 rounded-xl shadow p-6 flex flex-col gap-3 items-center">
          <p className="text-gray-800 leading-relaxed text-center">
            Meitä yhdistää näkemys: suorahaku voi ja sen pitää kehittyä.<br />
            Jokainen tiimin jäsen on valittu osaamisensa lisäksi myös arvojensa vuoksi: hänellä on kyky kuunnella, kohdata ja rakentaa kestäviä suhteita. Tärkeintä ei kuitenkaan ole se, mitä olemme tehneet – vaan miten teemme nyt.
          </p>
        </section>
      </div>
    </main>
  );
} 
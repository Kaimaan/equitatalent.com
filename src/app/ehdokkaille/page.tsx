import React from "react";

export default function Ehdokkaille() {
  return (
    <main className="flex flex-col items-center px-2 sm:px-0 mt-8 mb-12 min-h-[70vh]">
      <div className="w-full max-w-3xl flex flex-col gap-8">
        <section className="bg-white/90 rounded-2xl shadow-lg p-6 sm:p-10 flex flex-col items-center gap-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-900 mb-2">Ehdokkaille</h1>
          <h2 className="text-lg sm:text-xl font-semibold text-blue-800 mb-2 uppercase">Sinä olet enemmän kuin ansioluettelosi.</h2>
          <p className="text-gray-800 leading-relaxed text-center">
            Me kohtelemme sinua sen mukaisesti. Jokainen yhteydenotto ja keskustelu on luottamuksellinen, kunnioittava ja suunnattu siihen, että voimme yhdessä löytää oikean paikan oikealle ihmiselle – silloin kun aika on oikea.
          </p>
        </section>

        <section className="bg-white/80 rounded-xl shadow p-6 flex flex-col gap-3">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">Mitä voit odottaa meiltä?</h3>
          <ul className="list-disc list-inside ml-4 text-gray-700">
            <li><span className="font-semibold">Avoimuutta:</span> Kerromme, missä mennään – myös silloin, kun valinta ei kohdistu sinuun.</li>
            <li><span className="font-semibold">Arvostusta:</span> Saat meiltä palautetta, jos sitä haluat.</li>
            <li><span className="font-semibold">Ymmärrystä:</span> Keskustelemme myös urasi suunnasta, emme vain nykyisestä roolistasi.</li>
          </ul>
        </section>

        <section className="bg-white/80 rounded-xl shadow p-6 flex flex-col gap-3">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">Usein kysyttyä:</h3>
          <div className="flex flex-col gap-2">
            <div>
              <span className="font-semibold">“Voinko olla yhteydessä, vaikka en hae mitään tiettyä tehtävää?”</span> Kyllä. Voit olla meihin yhteydessä matalalla kynnyksellä – sparraamme mielellämme.
            </div>
            <div>
              <span className="font-semibold">“Mitä jos en tule valituksi?”</span> Silloin saat silti asiallisen, arvostavan ja rehellisen palautteen. Usein jatkamme keskustelua tulevia mahdollisuuksia ajatellen.
            </div>
            <div>
              <span className="font-semibold">“Miten tietojani käsitellään?”</span> Luottamuksellisesti. Emme koskaan jaa tietojasi ilman lupaasi. Lähetä meille viesti tai liitä CV – tutustutaan.
            </div>
          </div>
        </section>

        <section className="bg-white/80 rounded-xl shadow p-6 flex flex-col gap-3 items-center">
          <p className="text-gray-800 leading-relaxed text-center">
            Voit lähettää meille avoimen yhteydenoton. Me olemme sinuun yhteydessä, kun sopiva mahdollisuus avautuu.
          </p>
        </section>
      </div>
    </main>
  );
} 
export default function Palvelut() {
  return (
    <main className="flex flex-col items-center px-2 sm:px-0 mt-8 mb-12 min-h-[70vh]">
      <div className="w-full max-w-3xl flex flex-col gap-8">
        <section className="bg-white/90 rounded-2xl shadow-lg p-6 sm:p-10 flex flex-col items-center gap-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-900 mb-2">Palvelut</h1>
          <h2 className="text-lg sm:text-xl font-semibold text-blue-800 mb-2">Headhunter, joka välittää.</h2>
          <p className="text-gray-800 leading-relaxed text-center">
            Rakennamme parempaa työelämää onnistunut kohtaaminen kerrallaan. Olemme suorahakutoimija, joka yhdistää liiketoimintaymmärryksen, kulttuurisen näkemyksen ja vahvan inhimillisyyden. Meidän kanssamme saat muutakin kuin osaamista: saat ihmisen, joka sopii juuri teille.
          </p>
        </section>

        <section className="bg-white/80 rounded-xl shadow p-6 flex flex-col gap-3">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">Ydinpalvelumme nyt:</h3>
          <ul className="list-disc list-inside ml-4 text-gray-700">
            <li>
              <span className="font-semibold">Suorahaku</span> – Avainhenkilöiden haku C-, johtaja- ja päällikkötasolla. Yhdistämme liiketoimintaosaamisen, kulttuuriymmärryksen ja tehokkaan prosessin.
            </li>
            <li>
              <span className="font-semibold">Interim-palvelut</span> – Kun tarvitaan nopeaa reagointia tai väliaikainen ratkaisu, autamme löytämään osaavan ja sopivan ammattilaisen.
            </li>
          </ul>
        </section>

        <section className="bg-white/80 rounded-xl shadow p-6 flex flex-col gap-3">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">Miten erotumme muista?</h3>
          <ul className="list-disc list-inside ml-4 text-gray-700">
            <li>Kokemus liiketoiminnan ytimestä</li>
            <li>Prosessi, jossa korostuu ihmislähtöisyys ja laatu</li>
            <li>Työkalut ja teknologia, jotka varmistavat tehokkuuden ja hyvän ehdokaskokemuksen</li>
          </ul>
          <p className="text-gray-800 leading-relaxed mt-2">
            Tavoitteemme ei ole vain täyttää paikkaa. Tavoitteemme on ratkaista ongelmakohdat pitkäkestoisesti ja laadukkaasti.
          </p>
        </section>
      </div>
    </main>
  );
} 
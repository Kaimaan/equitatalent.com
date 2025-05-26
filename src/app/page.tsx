export default function Home() {
  return (
    <main className="flex-1 w-full flex flex-col items-center px-2 sm:px-0 mt-8 mb-12">
      <div className="w-full max-w-3xl flex flex-col gap-8">
        <section className="bg-white/90 rounded-2xl shadow-lg p-6 sm:p-10 flex flex-col items-center gap-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-900 mb-2">Equita Talent Partners – suorahakua suurella sydämellä</h1>
        </section>
        <section id="miksi-olemme" className="bg-white/80 rounded-xl shadow p-6 flex flex-col gap-3">
          <h2 className="text-xl font-semibold text-blue-800">Miksi olemme olemassa?</h2>
          <p className="text-gray-800 leading-relaxed">
            Uskomme parempaan työelämään. Haluamme muuttaa työelämää inhimillisemmäksi, kestävämmäksi ja tuloksellisemmaksi. Rakennamme johtajuutta ja organisaatioita, joissa ihmisarvo, tasa-arvo ja kulttuurinen yhteensopivuus eivät ole lisäarvoja vaan lähtökohtia. Autamme asiakkaitamme tunnistamaan, millaista osaamista ja millaisia ihmisiä he tarvitsevat saavuttaakseen liiketoiminnalliset tavoitteensa ja uudistaakseen yrityskulttuuriaan oikeaan suuntaan. Tämä onnistuu, koska me ymmärrämme asiakkaidemme arjen: meillä on vahva tausta eri toimialoilta ja johtamisen ytimistä.
          </p>
        </section>
        <section id="miksi-me" className="bg-white/80 rounded-xl shadow p-6 flex flex-col gap-3">
          <h2 className="text-xl font-semibold text-blue-800">Miksi juuri me?</h2>
          <p className="text-gray-800 leading-relaxed">
            Tarinamme alkoi tarpeesta muutokseen. Tiimimme koostuu kokeneista johtajista ja asiantuntijoista, jotka ovat nähneet perinteisen suorahakumarkkinan haasteet läheltä: epäselvät prosessit, ehdokkaiden huono kohtelu ja arvotyhjiö rekrytoinnin ytimessä. Olemme itse olleet sekä asiakas- että ehdokasrooleissa ja tiedämme, miltä hyvä (ja huono) tuntuu. Siksi loimme jotain uutta: suorahakutoimijan, joka todella välittää.
          </p>
        </section>
        <section id="missio" className="bg-white/80 rounded-xl shadow p-6 flex flex-col gap-3">
          <h2 className="text-xl font-semibold text-blue-800">Missiomme on selkeä.</h2>
          <p className="text-gray-800 leading-relaxed">
            Tahdomme, että hyvä rekrytointi ei ole poikkeus vaan uusi normi. Tässä onnistumme yhdistämällä:
          </p>
          <ul className="list-disc list-inside ml-4 text-gray-700">
            <li>strategisen liiketoimintaymmärryksen</li>
            <li>kulttuurillisen näkemyksen ja</li>
            <li>huippulaatuisen suorahakuprosessin</li>
          </ul>
          <p className="text-gray-800 leading-relaxed">
            Tuotamme asiakkaillemme mitattavaa arvoa: pitkäaikaisia työsuhteita, tyytyväisiä ihmisiä ja kasvua, joka perustuu oikeisiin valintoihin.
          </p>
        </section>
        <section id="arvo" className="bg-white/80 rounded-xl shadow p-6 flex flex-col gap-3">
          <h2 className="text-xl font-semibold text-blue-800">Arvo syntyy ihmisistä ja kohtaamisesta</h2>
          <p className="text-gray-800 leading-relaxed">
            Ihanneasiakkaamme on yritys, jossa halutaan uudistaa johtamista ja löytää pitkän aikavälin ratkaisuja. Lähtökohta voi usein olla se, että rekrytointi ei ole tuottanut toivottuja tuloksia, muutos edellyttää uutta osaamista tai avainhenkilö on lähtenyt. Ratkaisumme on hyvin johdettu ja arvopohjainen suorahakuprosessi, jossa yhdistyvät liiketoimintalogiikan ymmärrys ja aito kiinnostus ihmisiä kohtaan.
          </p>
        </section>
        <section id="tulevaisuus" className="bg-white/80 rounded-xl shadow p-6 flex flex-col gap-3">
          <h2 className="text-xl font-semibold text-blue-800">Tulevaisuus on kulttuurin muotoilua</h2>
          <p className="text-gray-800 leading-relaxed">
            Työelämä on murroksessa. Perinteinen rekrytointilogiikka – &quot;osaaminen + kokemus = oikea valinta&quot; – ei enää riitä. Haluamme auttaa yrityksiä tunnistamaan omat arvonsa ja löytämään ihmiset, jotka voivat aidosti viedä kulttuuria eteenpäin. Samalla autamme ammattilaisia löytämään paikan, jossa heidän arvonsa ja merkityksensä kohtaavat työn.
          </p>
        </section>
      </div>
    </main>
  );
}

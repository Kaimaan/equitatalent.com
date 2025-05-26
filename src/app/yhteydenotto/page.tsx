export default function Yhteydenotto() {
  return (
    <main className="flex flex-col items-center px-2 sm:px-0 mt-8 mb-12 min-h-[70vh]">
      <div className="w-full max-w-2xl flex flex-col gap-8">
        <section className="bg-white/90 rounded-2xl shadow-lg p-6 sm:p-10 flex flex-col items-center gap-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-900 mb-2">Yhteydenotto</h1>
          <p className="text-gray-800 leading-relaxed text-center mb-4">
            Ota yhteyttä – vastaamme mielellämme kaikkiin kysymyksiin!
          </p>
          <form className="w-full flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nimi</label>
              <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Sähköposti</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Viesti</label>
              <textarea id="message" name="message" rows={5} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" required />
            </div>
            <button type="submit" className="mt-2 bg-blue-800 text-white font-semibold py-2 px-6 rounded-lg shadow hover:bg-blue-900 transition-colors">Lähetä</button>
          </form>
          <div className="w-full border-t border-gray-200 mt-6 pt-4 text-center text-gray-600 text-sm">
            Voit myös lähettää sähköpostia suoraan osoitteeseen: <a href="mailto:info@equitatalent.com" className="text-blue-700 hover:underline">info@equitatalent.com</a>
          </div>
        </section>
      </div>
    </main>
  );
} 
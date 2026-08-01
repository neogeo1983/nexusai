export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        
        <h1 className="text-6xl font-bold tracking-tight">
          Nexus<span className="text-blue-500">AI</span>
        </h1>

        <p className="mt-6 max-w-2xl text-xl text-gray-300">
          Construim soluții inteligente cu ajutorul inteligenței artificiale,
          automatizări și tehnologii moderne.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-xl bg-blue-600 px-8 py-3 font-semibold hover:bg-blue-700">
            Explorează
          </button>

          <button className="rounded-xl border border-gray-600 px-8 py-3 font-semibold hover:bg-gray-900">
            Contact
          </button>
        </div>

        <div className="mt-20 grid max-w-5xl gap-6 md:grid-cols-3">
          
          <div className="rounded-2xl border border-gray-800 bg-gray-950 p-6">
            <h2 className="text-xl font-bold">🤖 AI Assistant</h2>
            <p className="mt-3 text-gray-400">
              Asistenți inteligenți pentru proiecte și automatizări.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-gray-950 p-6">
            <h2 className="text-xl font-bold">⚡ Automatizări</h2>
            <p className="mt-3 text-gray-400">
              Procese mai rapide și mai eficiente pentru afaceri.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-gray-950 p-6">
            <h2 className="text-xl font-bold">🚀 Development</h2>
            <p className="mt-3 text-gray-400">
              Aplicații web moderne construite cu tehnologii noi.
            </p>
          </div>

        </div>

      </section>
    </main>
  );
}

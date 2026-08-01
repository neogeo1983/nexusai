export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6">
        <h1 className="text-3xl font-bold">
          Nexus<span className="text-blue-500">AI</span>
        </h1>

        <nav className="hidden md:flex gap-8 text-gray-300">
          <a href="#">Home</a>
          <a href="#">AI Assistant</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">

        <h2 className="text-5xl md:text-7xl font-bold">
          Build the Future with
          <span className="text-blue-500"> AI</span>
        </h2>

        <p className="mt-6 max-w-2xl text-xl text-gray-400">
          NexusAI creates intelligent solutions using artificial intelligence,
          automation and modern web technologies.
        </p>

        <div className="mt-10 flex gap-5">
          <button className="rounded-xl bg-blue-600 px-8 py-3 font-semibold hover:bg-blue-700">
            Start Project
          </button>

          <button className="rounded-xl border border-gray-700 px-8 py-3 font-semibold hover:bg-gray-900">
            Learn More
          </button>
        </div>

      </section>


      {/* Services */}
      <section className="grid md:grid-cols-3 gap-6 px-8 pb-20">

        <div className="rounded-2xl border border-gray-800 bg-gray-950 p-8">
          <h3 className="text-2xl font-bold">
            🤖 AI Assistant
          </h3>
          <p className="mt-4 text-gray-400">
            Smart AI assistants designed to help people work faster.
          </p>
        </div>


        <div className="rounded-2xl border border-gray-800 bg-gray-950 p-8">
          <h3 className="text-2xl font-bold">
            ⚡ Automation
          </h3>
          <p className="mt-4 text-gray-400">
            Automate repetitive tasks and improve productivity.
          </p>
        </div>


        <div className="rounded-2xl border border-gray-800 bg-gray-950 p-8">
          <h3 className="text-2xl font-bold">
            🚀 Web Development
          </h3>
          <p className="mt-4 text-gray-400">
            Modern websites and applications built with latest technology.
          </p>
        </div>

      </section>


      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-500">
        © 2026 NexusAI. All rights reserved.
      </footer>

    </main>
  );
}

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Header */}
      <header className="flex justify-between items-center px-10 py-6 border-b border-gray-800">

        <h1 className="text-3xl font-bold">
          Nexus<span className="text-blue-500">AI</span>
        </h1>

        <nav className="flex gap-6 text-gray-300">
          <Link href="/">Dashboard</Link>
          <Link href="/assistant">AI Assistant</Link>
        </nav>

      </header>


      {/* Welcome */}
      <section className="text-center py-16 px-6">

        <h2 className="text-5xl font-bold">
          Welcome to NexusAI
        </h2>

        <p className="mt-5 text-gray-400 text-xl">
          Your intelligent platform for AI solutions,
          automation and digital innovation.
        </p>

      </section>



      {/* Dashboard Cards */}
      <section className="grid md:grid-cols-3 gap-8 px-10 pb-20">


        <Link href="/assistant">

          <div className="cursor-pointer bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:border-blue-500 transition">

            <div className="text-5xl mb-5">
              🤖
            </div>

            <h3 className="text-2xl font-bold">
              AI Assistant
            </h3>

            <p className="mt-3 text-gray-400">
              Chat with your intelligent AI assistant.
              Get answers, ideas and solutions.
            </p>

          </div>

        </Link>




        <Link href="#">

          <div className="cursor-pointer bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:border-blue-500 transition">

            <div className="text-5xl mb-5">
              ⚡
            </div>

            <h3 className="text-2xl font-bold">
              Automation
            </h3>

            <p className="mt-3 text-gray-400">
              Automate repetitive business tasks
              and improve productivity.
            </p>

          </div>

        </Link>





        <Link href="#">

          <div className="cursor-pointer bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:border-blue-500 transition">

            <div className="text-5xl mb-5">
              🌐
            </div>

            <h3 className="text-2xl font-bold">
              Web Studio
            </h3>

            <p className="mt-3 text-gray-400">
              Create modern websites and
              digital experiences.
            </p>

          </div>

        </Link>





        <Link href="#">

          <div className="cursor-pointer bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:border-blue-500 transition">

            <div className="text-5xl mb-5">
              📊
            </div>

            <h3 className="text-2xl font-bold">
              Analytics
            </h3>

            <p className="mt-3 text-gray-400">
              Monitor performance and insights.
            </p>

          </div>

        </Link>




        <Link href="#">

          <div className="cursor-pointer bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:border-blue-500 transition">

            <div className="text-5xl mb-5">
              📁
            </div>

            <h3 className="text-2xl font-bold">
              Projects
            </h3>

            <p className="mt-3 text-gray-400">
              Manage your AI projects.
            </p>

          </div>

        </Link>




        <Link href="#">

          <div className="cursor-pointer bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:border-blue-500 transition">

            <div className="text-5xl mb-5">
              ⚙️
            </div>

            <h3 className="text-2xl font-bold">
              Settings
            </h3>

            <p className="mt-3 text-gray-400">
              Configure your NexusAI platform.
            </p>

          </div>

        </Link>



      </section>


      <footer className="border-t border-gray-800 text-center py-8 text-gray-500">

        NexusAI © 2026

      </footer>


    </main>
  );
}

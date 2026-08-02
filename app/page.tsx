import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6 border-b border-gray-800">
        <h1 className="text-3xl font-bold">
          Nexus<span className="text-blue-500">AI</span>
        </h1>

        <nav className="flex gap-6 text-gray-300">
          <Link href="/">Home</Link>
          <Link href="#services">Services</Link>
          <Link href="#about">About</Link>
          <Link href="#contact">Contact</Link>
        </nav>
      </header>


      {/* Hero */}
      <section className="text-center px-6 py-24">

        <h2 className="text-5xl md:text-7xl font-bold">
          Intelligent Solutions
          <br />
          Powered by
          <span className="text-blue-500"> AI</span>
        </h2>

        <p className="max-w-3xl mx-auto mt-8 text-xl text-gray-400">
          NexusAI builds modern artificial intelligence solutions,
          automation systems and digital experiences for businesses.
        </p>


        <div className="mt-10 flex justify-center gap-5">

          <Link href="#contact">
            <button className="bg-blue-600 px-8 py-3 rounded-xl hover:bg-blue-700">
              Start Project
            </button>
          </Link>


          <Link href="#services">
            <button className="border border-gray-700 px-8 py-3 rounded-xl hover:bg-gray-900">
              Explore Services
            </button>
          </Link>

        </div>


        <img
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
          alt="Artificial Intelligence"
          className="rounded-3xl mt-16 mx-auto max-w-4xl"
        />

      </section>



      {/* Services */}
      <section id="services" className="px-8 py-20">

        <h2 className="text-4xl font-bold text-center mb-12">
          Our Services
        </h2>


        <div className="grid md:grid-cols-3 gap-8">


          <div className="bg-gray-900 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold">
              🤖 AI Assistants
            </h3>

            <p className="mt-4 text-gray-400">
              Smart AI assistants that help companies automate
              communication and improve productivity.
            </p>
          </div>



          <div className="bg-gray-900 p-8 rounded-2xl">

            <h3 className="text-2xl font-bold">
              ⚡ Automation
            </h3>

            <p className="mt-4 text-gray-400">
              Intelligent workflows that reduce repetitive tasks
              and save valuable time.
            </p>

          </div>



          <div className="bg-gray-900 p-8 rounded-2xl">

            <h3 className="text-2xl font-bold">
              🌐 Web Development
            </h3>

            <p className="mt-4 text-gray-400">
              Modern websites and applications built with
              advanced technology.
            </p>

          </div>


        </div>

      </section>




      {/* About */}
      <section id="about" className="px-8 py-20 bg-gray-950">

        <h2 className="text-4xl font-bold">
          About NexusAI
        </h2>

        <p className="mt-6 text-gray-400 max-w-3xl">

          NexusAI combines artificial intelligence,
          software engineering and automation to create
          digital solutions for the future.

        </p>

      </section>




      {/* Contact */}
      <section id="contact" className="px-8 py-20">

        <h2 className="text-4xl font-bold">
          Contact Us
        </h2>


        <p className="mt-5 text-gray-400">
          Ready to build your AI solution?
        </p>


        <a
          href="mailto:contact@nexusai.com"
          className="inline-block mt-8 bg-blue-600 px-8 py-3 rounded-xl"
        >
          Send Email
        </a>


      </section>




      {/* Footer */}

      <footer className="border-t border-gray-800 py-8 text-center text-gray-500">

        © 2026 NexusAI. All rights reserved.

      </footer>


    </main>
  );
}

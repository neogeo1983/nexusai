import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HEADER */}

      <header className="p-6 flex justify-between items-center border-b border-gray-800">

        <h1 className="text-4xl font-bold">
          <span className="text-red-600">Neon</span>-IPTV
        </h1>


        <nav className="flex gap-4">

          <Link
            href="/channels"
            className="bg-red-600 px-5 py-2 rounded-xl hover:bg-red-700"
          >
            Channels
          </Link>


          <Link
            href="/player"
            className="bg-gray-800 px-5 py-2 rounded-xl hover:bg-gray-700"
          >
            Player
          </Link>


        </nav>


      </header>



      {/* HERO */}


      <section className="text-center py-20 px-5">


        <h2 className="text-6xl font-bold mb-6">

          Televiziune online
          <br />

          <span className="text-red-600">
            Neon IPTV
          </span>

        </h2>



        <p className="text-gray-400 text-xl max-w-2xl mx-auto">

          Urmărește canalele preferate într-o experiență
          modernă, rapidă și compatibilă cu orice dispozitiv.

        </p>



        <div className="mt-10 flex justify-center gap-5">


          <Link

          href="/channels"

          className="bg-red-600 px-8 py-4 rounded-2xl text-xl font-bold"

          >

            📺 Vezi Canale

          </Link>



          <Link

          href="/movies"

          className="bg-gray-800 px-8 py-4 rounded-2xl text-xl font-bold"

          >

            🎬 Filme Online

          </Link>



        </div>


      </section>




      {/* FEATURES */}


      <section className="grid md:grid-cols-3 gap-6 p-8">


        <div className="bg-gray-900 p-8 rounded-3xl">

          <h3 className="text-2xl font-bold mb-3">

            📺 Live TV

          </h3>

          <p className="text-gray-400">

            Canale organizate pe categorii cu player integrat.

          </p>

        </div>




        <div className="bg-gray-900 p-8 rounded-3xl">

          <h3 className="text-2xl font-bold mb-3">

            🎬 Filme

          </h3>

          <p className="text-gray-400">

            Secțiune dedicată pentru conținut video.

          </p>

        </div>





        <div className="bg-gray-900 p-8 rounded-3xl">

          <h3 className="text-2xl font-bold mb-3">

            🤖 AI Assistant

          </h3>

          <p className="text-gray-400">

            Asistent inteligent pentru utilizatori.

          </p>

        </div>



      </section>





      {/* PRICING */}


      <section className="p-8 text-center">


        <h2 className="text-4xl font-bold mb-6">

          Abonamente

        </h2>



        <div className="bg-gray-900 rounded-3xl p-8 max-w-md mx-auto">


          <h3 className="text-3xl font-bold">

            Premium

          </h3>


          <p className="text-5xl font-bold text-red-600 mt-5">

            10€

          </p>


          <p className="text-gray-400">

            lunar

          </p>


          <p className="mt-5">

            sau 90€ anual

          </p>



          <Link

          href="/pricing"

          className="block mt-6 bg-red-600 p-4 rounded-xl"

          >

            Vezi oferta

          </Link>


        </div>


      </section>





      <footer className="text-center p-6 text-gray-500">

        © Neon-IPTV

      </footer>



    </main>
  );
}

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HEADER */}
      <header className="flex items-center justify-between px-8 py-6 border-b border-gray-800">

        <h1 className="text-3xl font-bold">
          IPTV<span className="text-red-500">PLUS</span>
        </h1>

        <nav className="flex gap-6 text-gray-300">
          <Link href="/">Home</Link>
          <Link href="/channels">Channels</Link>
          <Link href="/pricing">Plans</Link>
          <Link href="/contact">Contact</Link>
        </nav>

      </header>


      {/* HERO */}

      <section className="px-8 py-24 text-center">

        <h2 className="text-6xl font-bold">
          Premium
          <span className="text-red-500"> IPTV</span>
          Experience
        </h2>


        <p className="max-w-3xl mx-auto mt-8 text-xl text-gray-400">

          Watch your favourite entertainment,
          sports and live channels on any device.

        </p>


        <div className="flex justify-center gap-5 mt-10">


          <Link href="/channels">

            <button className="bg-red-600 px-8 py-4 rounded-xl hover:bg-red-700">

              Browse Channels

            </button>

          </Link>



          <Link href="/pricing">

            <button className="border border-gray-700 px-8 py-4 rounded-xl hover:bg-gray-900">

              View Plans

            </button>

          </Link>


        </div>


      </section>




      {/* FEATURES */}

      <section className="grid md:grid-cols-3 gap-8 px-8 pb-20">


        <div className="bg-gray-900 rounded-3xl p-8">

          <div className="text-5xl">📺</div>

          <h3 className="text-2xl font-bold mt-4">
            Live TV
          </h3>

          <p className="text-gray-400 mt-3">
            Access your favourite channels from one place.
          </p>

        </div>



        <div className="bg-gray-900 rounded-3xl p-8">

          <div className="text-5xl">⚡</div>

          <h3 className="text-2xl font-bold mt-4">
            Fast Streaming
          </h3>

          <p className="text-gray-400 mt-3">
            Smooth playback on modern devices.
          </p>

        </div>




        <div className="bg-gray-900 rounded-3xl p-8">

          <div className="text-5xl">📱</div>

          <h3 className="text-2xl font-bold mt-4">
            All Devices
          </h3>

          <p className="text-gray-400 mt-3">
            Compatible with Smart TV, mobile and PC.
          </p>

        </div>


      </section>




      {/* FOOTER */}

      <footer className="border-t border-gray-800 text-center py-8 text-gray-500">

        IPTVPLUS © 2026

      </footer>


    </main>
  );
}

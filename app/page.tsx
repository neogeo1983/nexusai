import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      <header className="flex justify-between items-center px-8 py-6 border-b border-red-900">
        <h1 className="text-4xl font-bold">
          Neon<span className="text-red-600">-IPTV</span>
        </h1>

        <nav className="flex gap-5">
          <Link href="/">Home</Link>
          <Link href="/channels">Channels</Link>
          <Link href="/player">Player</Link>
          <Link href="/pricing">Abonamente</Link>
          <Link href="/movies">Filme</Link>
        </nav>
      </header>


      <section className="px-8 py-24 text-center">

        <h2 className="text-6xl font-bold">
          Your Ultimate
          <span className="text-red-600"> TV Experience</span>
        </h2>

        <p className="mt-6 text-xl text-gray-400">
          Neon-IPTV brings entertainment, movies and live television
          to all your devices.
        </p>


        <div className="mt-10 flex justify-center gap-5">

          <Link href="/channels">
            <button className="bg-red-600 px-8 py-4 rounded-xl">
              Watch TV
            </button>
          </Link>


          <Link href="/pricing">
            <button className="border border-gray-600 px-8 py-4 rounded-xl">
              Choose Plan
            </button>
          </Link>

        </div>

      </section>



      <section className="grid md:grid-cols-3 gap-8 px-8">

        <Card
          icon="📺"
          title="Live Channels"
          text="Watch your favourite channels in one place."
        />

        <Card
          icon="🎬"
          title="Movies"
          text="Enjoy your entertainment collection."
        />

        <Card
          icon="📱"
          title="All Devices"
          text="Smart TV, Android, iOS, Windows and more."
        />

      </section>


      <footer className="mt-20 py-8 text-center border-t border-gray-800">
        Neon-IPTV © 2026
      </footer>

    </main>
  );
}



function Card({icon,title,text}:{
icon:string;
title:string;
text:string;
}){

return (

<div className="bg-gray-900 rounded-3xl p-8 hover:border-red-600 border border-gray-800">

<div className="text-5xl">{icon}</div>

<h3 className="text-2xl font-bold mt-5">
{title}
</h3>

<p className="text-gray-400 mt-3">
{text}
</p>

</div>

)

}

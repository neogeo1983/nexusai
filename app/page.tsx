"use client";

import { useState } from "react";

export default function Channels() {

  const [channel, setChannel] = useState(
    "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
  );

  const channels = [
    {
      name: "Demo Channel 1",
      url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
    },
    {
      name: "Demo Channel 2",
      url: "https://test-streams.mux.dev/test_001/stream.m3u8"
    }
  ];


  return (
    <main className="min-h-screen bg-black text-white p-8">

      <h1 className="text-5xl font-bold mb-8">
        📺 Neon-IPTV Channels
      </h1>


      <div className="grid lg:grid-cols-4 gap-6">


        {/* CHANNEL LIST */}

        <div className="bg-gray-900 rounded-2xl p-5">

          <h2 className="text-xl font-bold mb-5">
            Channels
          </h2>


          {channels.map((item,index)=>(

            <button
              key={index}
              onClick={()=>setChannel(item.url)}
              className="w-full text-left mb-3 p-4 rounded-xl bg-gray-800 hover:bg-red-600 transition"
            >

              📺 {item.name}

            </button>

          ))}


        </div>



        {/* PLAYER */}

        <div className="lg:col-span-3 bg-gray-900 rounded-3xl p-5">


          <video
            key={channel}
            controls
            autoPlay
            className="w-full aspect-video rounded-2xl bg-black"
          >

            <source
              src={channel}
              type="application/x-mpegURL"
            />

          </video>


          <h2 className="text-2xl font-bold mt-5">
            Neon-IPTV Player
          </h2>


          <p className="text-gray-400 mt-2">
            Selectează un canal pentru a începe redarea.
          </p>


        </div>


      </div>


    </main>
  );
}

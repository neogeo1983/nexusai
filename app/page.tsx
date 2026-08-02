"use client";

import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";


export default function Player() {

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [channels, setChannels] = useState<any[]>([]);
  const [current, setCurrent] = useState<any>(null);



  useEffect(() => {

    fetch("/api/iptv")
      .then(res => res.json())
      .then(data => {

        setChannels(data);

        if(data.length){
          setCurrent(data[0]);
        }

      });

  }, []);





  useEffect(() => {


    if(!current || !videoRef.current) return;


    const video = videoRef.current;


    if(Hls.isSupported()) {


      const hls = new Hls({

        enableWorker:true,
        lowLatencyMode:true

      });


      hls.loadSource(current.url);

      hls.attachMedia(video);


      hls.on(Hls.Events.MANIFEST_PARSED,()=>{

        video.play().catch(()=>{});

      });


      return ()=>{

        hls.destroy();

      };


    }

    else if(video.canPlayType("application/vnd.apple.mpegurl")){


      video.src=current.url;


    }



  },[current]);





return (

<main className="min-h-screen bg-black text-white p-6">


<h1 className="text-5xl font-bold mb-6">

<span className="text-red-600">
Neon
</span>-IPTV

</h1>




<div className="grid lg:grid-cols-4 gap-6">



<div className="bg-gray-900 rounded-3xl p-4 h-[700px] overflow-y-auto">


<h2 className="text-2xl mb-5">

📺 Canale

</h2>



{

channels.map((ch,index)=>(


<button

key={index}

onClick={()=>setCurrent(ch)}

className={`w-full flex items-center gap-3 p-3 mb-3 rounded-xl 
${current?.name===ch.name 
?"bg-red-600"
:"bg-gray-800 hover:bg-gray-700"}`}


>


{

ch.logo &&

<img

src={ch.logo}

className="w-12 h-12 object-contain rounded"

/>

}



<span>

{ch.name}

</span>


</button>


))


}



</div>







<div className="lg:col-span-3 bg-gray-900 rounded-3xl p-5">



<video

ref={videoRef}

controls

autoPlay

className="w-full aspect-video bg-black rounded-2xl"

/>



{

current &&

<div className="mt-5">

<h2 className="text-3xl font-bold">

{current.name}

</h2>


<p className="text-gray-400">

{current.group}

</p>


</div>

}



</div>



</div>


</main>

);

}

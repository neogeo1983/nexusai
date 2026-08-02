"use client";

import { useState } from "react";

type Channel = {
  name: string;
  category: string;
  logo: string;
  url: string;
};


export default function Channels() {


const channels: Channel[] = [

{
name:"Demo News",
category:"News",
logo:"📰",
url:"https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
},

{
name:"Demo Movies",
category:"Movies",
logo:"🎬",
url:"https://test-streams.mux.dev/test_001/stream.m3u8"
},

{
name:"Demo Sport",
category:"Sport",
logo:"⚽",
url:"https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
},

{
name:"Demo Music",
category:"Music",
logo:"🎵",
url:"https://test-streams.mux.dev/test_001/stream.m3u8"
}

];



const categories = [
"All",
"Romania",
"News",
"Sport",
"Movies",
"Music"
];


const [selected,setSelected]=useState(channels[0]);

const [search,setSearch]=useState("");

const [category,setCategory]=useState("All");



const filteredChannels = channels.filter((channel)=>{

const searchMatch =
channel.name
.toLowerCase()
.includes(search.toLowerCase());


const categoryMatch =
category==="All" ||
channel.category===category;


return searchMatch && categoryMatch;

});



return (

<main className="min-h-screen bg-black text-white p-6">


<header className="mb-8">

<h1 className="text-5xl font-bold">

<span className="text-red-600">
Neon
</span>
-IPTV

</h1>

<p className="text-gray-400 mt-2">
Live TV Experience
</p>

</header>




<div className="grid lg:grid-cols-4 gap-6">



{/* MENU */}

<section className="bg-gray-900 rounded-3xl p-5">


<input

placeholder="Search channel..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

className="w-full bg-black border border-gray-700 rounded-xl p-3 mb-5"

/>



<div className="flex flex-wrap gap-2 mb-6">

{categories.map((cat)=>(

<button

key={cat}

onClick={()=>setCategory(cat)}

className={`
px-4 py-2 rounded-full
${category===cat
?"bg-red-600"
:"bg-gray-800"}
`}

>

{cat}

</button>

))}


</div>



<h2 className="text-xl font-bold mb-4">

Channels

</h2>



<div className="space-y-3">


{filteredChannels.map((channel)=>(


<button

key={channel.name}

onClick={()=>setSelected(channel)}

className="w-full flex items-center gap-4 
bg-gray-800 hover:bg-red-600 
rounded-xl p-4 transition"

>


<span className="text-3xl">

{channel.logo}

</span>


<div className="text-left">

<div className="font-bold">

{channel.name}

</div>


<div className="text-sm text-gray-400">

{channel.category}

</div>


</div>


</button>


))}


</div>


</section>






{/* PLAYER */}


<section className="lg:col-span-3 bg-gray-900 rounded-3xl p-5">


<div className="bg-black rounded-2xl overflow-hidden">


<video

key={selected.url}

controls

autoPlay

className="w-full aspect-video"

>

<source

src={selected.url}

type="application/x-mpegURL"

/>


</video>


</div>




<div className="mt-6">


<h2 className="text-3xl font-bold">

{selected.logo} {selected.name}

</h2>


<p className="text-gray-400 mt-2">

Categorie:
{selected.category}

</p>



<button

onClick={()=>{

const video =
document.querySelector("video");

if(video?.requestFullscreen){

video.requestFullscreen();

}

}}

className="mt-5 bg-red-600 px-6 py-3 rounded-xl"

>

⛶ Fullscreen

</button>


</div>



</section>



</div>



</main>


);


}

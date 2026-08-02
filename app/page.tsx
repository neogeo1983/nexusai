"use client";

import {useEffect,useState} from "react";


type Channel={
name:string;
group:string;
url:string;
};



export default function Channels(){


const [channels,setChannels]=useState<Channel[]>([]);
const [selected,setSelected]=useState<Channel|null>(null);



useEffect(()=>{

fetch("/playlist.m3u")
.then(res=>res.text())
.then(data=>{


const lines=data.split("\n");

let result:Channel[]=[];


for(let i=0;i<lines.length;i++){

if(lines[i].startsWith("#EXTINF")){


const info=lines[i];

const name=
info.split(",")[1] || "Unknown";


const groupMatch=
info.match(/group-title="([^"]+)/);


const group=
groupMatch ? groupMatch[1]:"Other";


const url=
lines[i+1];


result.push({
name,
group,
url
});


}

}


setChannels(result);


if(result.length>0)
setSelected(result[0]);


});


},[]);



return(

<main className="min-h-screen bg-black text-white p-6">


<h1 className="text-5xl font-bold mb-8">

<span className="text-red-600">
Neon
</span>-IPTV

</h1>



<div className="grid lg:grid-cols-4 gap-6">



<div className="bg-gray-900 rounded-3xl p-5">


<h2 className="text-xl font-bold mb-5">
Canale
</h2>


{channels.map((c,index)=>(


<button

key={index}

onClick={()=>setSelected(c)}

className="w-full text-left bg-gray-800 hover:bg-red-600 p-4 rounded-xl mb-3"

>

📺 {c.name}

</button>


))}


</div>




<div className="lg:col-span-3 bg-gray-900 rounded-3xl p-5">


{selected &&

<video

key={selected.url}

src={selected.url}

controls

autoPlay

className="w-full aspect-video bg-black rounded-xl"

/>

}



{selected &&

<h2 className="text-2xl mt-5 font-bold">

{selected.name}

</h2>

}


</div>


</div>


</main>


)

}

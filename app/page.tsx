"use client";

import {useEffect,useState} from "react";


export default function Channels(){


const [channels,setChannels]=useState<any[]>([]);
const [selected,setSelected]=useState<any>(null);
const [category,setCategory]=useState("All");



useEffect(()=>{


fetch("/api/iptv")
.then(r=>r.json())
.then(data=>{

setChannels(data);

if(data.length)
setSelected(data[0]);

});


},[]);



const categories=[
"All",
...Array.from(
new Set(
channels.map(c=>c.category)
)
)
];



const filtered =
category==="All"
?
channels
:
channels.filter(
c=>c.category===category
);



return (

<main className="min-h-screen bg-black text-white p-6">


<h1 className="text-5xl font-bold mb-8">

<span className="text-red-600">
Neon
</span>-IPTV

</h1>



<div className="flex gap-3 flex-wrap mb-8">


{categories.map(c=>(

<button

key={c}

onClick={()=>setCategory(c)}

className="bg-red-600 px-5 py-2 rounded-xl"

>

{c}

</button>

))}


</div>




<div className="grid lg:grid-cols-4 gap-6">



<div className="bg-gray-900 p-5 rounded-3xl h-[700px] overflow-auto">


{filtered.map((c,i)=>(


<button

key={i}

onClick={()=>setSelected(c)}

className="w-full text-left bg-gray-800 hover:bg-red-600 p-4 rounded-xl mb-3"

>


📺 {c.name}


</button>


))}



</div>




<div className="lg:col-span-3 bg-gray-900 rounded-3xl p-5">


{selected && (

<>


<video

key={selected.url}

src={selected.url}

controls

autoPlay

className="w-full aspect-video bg-black rounded-2xl"

/>



<h2 className="text-3xl mt-5">

{selected.name}

</h2>


<p className="text-gray-400">

Categoria: {selected.category}

</p>


</>

)}


</div>


</div>



</main>

);


}

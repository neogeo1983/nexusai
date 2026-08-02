import { NextResponse } from "next/server";


export async function GET() {


const playlistUrl = process.env.IPTV_M3U_URL;


if(!playlistUrl){

return NextResponse.json(
{
error:"Missing IPTV playlist"
},
{
status:500
}
);

}



try{


const response = await fetch(
playlistUrl,
{
cache:"no-store"
}
);


const data = await response.text();



const lines=data.split("\n");


const channels:any[]=[];


for(let i=0;i<lines.length;i++){


if(lines[i].startsWith("#EXTINF")){


const info=lines[i];


const name =
info.split(",").pop()?.trim()
|| "Unknown";



const group =
info.match(/group-title="([^"]+)"/)
?.[1]
|| "Other";



const logo =
info.match(/tvg-logo="([^"]+)"/)
?.[1]
|| "";



const url =
lines[i+1]?.trim();



if(url){


channels.push({

name,

category:group,

logo,

url

});


}



}


}



return NextResponse.json(channels);



}catch(e){


return NextResponse.json(
{
error:"Playlist failed"
},
{
status:500
}
);


}


}

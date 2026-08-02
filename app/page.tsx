import { NextResponse } from "next/server";

export async function GET() {

  const playlist = await fetch(
    process.env.IPTV_PLAYLIST_URL!,
    {
      cache: "no-store"
    }
  );

  const text = await playlist.text();

  const lines = text.split("\n");

  const channels = [];

  for(let i = 0; i < lines.length; i++){

    if(lines[i].startsWith("#EXTINF")){

      const info = lines[i];
      const url = lines[i + 1]?.trim();

      const name =
        info.split(",").pop()?.trim() || "Unknown";

      const category =
        info.match(/group-title="([^"]+)"/)?.[1]
        || "Other";

      const logo =
        info.match(/tvg-logo="([^"]+)"/)?.[1]
        || "";


      channels.push({
        name,
        category,
        logo,
        url
      });

    }

  }


  return NextResponse.json(channels);

}

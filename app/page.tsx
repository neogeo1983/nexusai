import { NextResponse } from "next/server";

export async function GET() {

  const url = process.env.IPTV_LIST_1;


  if (!url) {
    return new NextResponse(
      "Playlist missing",
      { status: 500 }
    );
  }


  try {

    const response = await fetch(url, {
      cache: "no-store"
    });


    if (!response.ok) {

      return new NextResponse(
        "Playlist error",
        { status: 500 }
      );

    }


    const playlist = await response.text();


    return new NextResponse(
      playlist,
      {
        headers:{
          "Content-Type":"text/plain"
        }
      }
    );


  } catch(error){


    return new NextResponse(
      "Connection failed",
      { status:500 }
    );


  }

}

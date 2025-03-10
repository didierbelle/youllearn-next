import { NextResponse } from "next/server";

const THE_YT_KEY = "AIzaSyA9vajdWV-uPTJ-zeJUbIsTa8kQZZaHrnI";


export async function GET()
{
    try{
        const query = "Google AI studio";
        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=8&q=${encodeURIComponent(query)}&key=${THE_YT_KEY}`;

        const videos = await fetch(url);

        if(!videos.ok) throw new Error("Failed to fetch videos");

        const response = await videos.json();
        console.log(response);

        return NextResponse.json(response, {status: 200});
    } catch (error) {
        console.error("YouTube API Error:", error);
        return NextResponse.json({ error: "Failed to fetch YouTube videos" }, { status: 500 });
    }

    // return new Response(JSON.stringify(users), {
    //     status: 200,
    //     headers: { 'Content-Type': 'application/json'}
    // });
}
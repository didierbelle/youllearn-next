import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";


const THE_KEY = "AIzaSyAggQ7GaVVpoMHu522SxSqKjeHAY6JgfLQ";

const genAI = new GoogleGenerativeAI(THE_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


export async function POST(req: Request) {
    try {
      // Extract phrase from request body
      const { phrase } = await req.json();
  
      if (!phrase) {
        return NextResponse.json({ error: "Phrase is required" }, { status: 400 });
      }
  
      // Construct AI prompt
      const prompt = `Generate five keywords about ${phrase} that can help me learn everything on it. Return the response as a JSON array.`; 
  
      // Call AI model
      const result = await model.generateContent(prompt);
      const responseText = await result.response.text();
  
      // Validate AI response
      try {
        const jsonResponse = JSON.parse(responseText);
        return NextResponse.json(jsonResponse, { status: 200 });
      } catch (error) {
        console.error("Invalid JSON from AI:", responseText);
        return NextResponse.json({ error: "Invalid response from AI" }, { status: 500 });
      }
    } catch (error) {
      console.error("Server Error:", error);
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
  }
  
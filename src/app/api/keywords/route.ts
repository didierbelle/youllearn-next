import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";


const THE_KEY = "AIzaSyAggQ7GaVVpoMHu522SxSqKjeHAY6JgfLQ";

const genAI = new GoogleGenerativeAI(THE_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


export async function POST(req: Request){
    if(req.method !== "POST") return NextResponse.json({ error: "Invalid request method" }, { status: 405 });

    try {
        const { prompt } = await req.json();
        if(!prompt) return NextResponse.json({ error: "Prompt is required" }, { status: 400 });

        const aiPrompt = `Re-structure the following prompt to be more clear and concise, focusing on the core intent.  Then, extract a list of relevant keywords (at least 5, separated by commas) related to both the original and the restructured prompt. Present the output in JSON format with 'restructuredPrompt' and 'keywords' fields.

            Original Prompt: ${prompt}

            Example Response Format:
            {
                "restructuredPrompt": "Concise, improved prompt based on the original input.",
                "keywords": "keyword1, keyword2, keyword3, keyword4, keyword5"
            }
            `;

        const result = await model.generateContent( aiPrompt );
        
        const response = result.response;
        const text = response.text();

        let parsedResult;
        try {
            parsedResult = JSON.parse(text);
        } catch (error) {
            console.error("Error parsing JSON response from Gemini:", error);
            console.error("Raw response from Gemini:", text); // Log the raw response for debugging
            return NextResponse.json({ 
                error: "Failed to parse JSON response from AI.  Check AI's response format.",    rawResponse: text }, { status: 500 });
        }

        if(!parsedResult.restructuredPrompt || !parsedResult.keywords) {
            return NextResponse.json({ 
                error: "Failed to parse JSON response from AI.  Check AI's response format.",    rawResponse: text }, { status: 500 });
        }

        return NextResponse.json(parsedResult, { status: 200 });
    } catch (error) {
        console.error("Error in API route:", error);
        const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred";
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}
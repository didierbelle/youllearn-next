import { NextResponse } from "next/server";

type User = {
    id: number,
    name: string,
    email? : string
};

export async function GET() {

    //const YOUTUBE_API_KEY = "AIzaSyA9vajdWV-uPTJ-zeJUbIsTa8kQZZaHrnI";

    const users : User[] = [
        {id: 1, name: "ark"},
        {id: 2, name: "Killer", email: "killer@gmoil.com"},
        {id: 3, name: "Scoper"},
        {id: 4, name: "Banger"},
        {id: 5, name: "Luffy"}
    ];

    return NextResponse.json(users, {status: 200});
}

// export async function handler({req, res}: {req: Request, res: Response}) {
//     if (req.method === 'POST') {
//       try {
//         const response = await fetch(
//           'https://api.googleapis.com/ai/v1/your-api-endpoint', // Replace with your Google API endpoint
//           {
//             method: 'POST',
//             headers: {
//               'Authorization': `Bearer ${process.env.GOOGLE_API_KEY}`, // Secure API key
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ data: req.body?.data }), // Send input data to AI API
//           }
//         );
  
//         if (!response.ok) {
//           throw new Error(`Google AI API error: ${response.statusText}`);
//         }
  
//         const result = await response.json();
//         res.status(200).json(result);
//       } catch (error) {
//         res.status(500).json({ error: error.message });
//       }
//     } else {
//       res.status(405).json({ error: 'Method Not Allowed' });
//     }
//   }
  
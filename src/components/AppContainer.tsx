"use client";

import { useState } from "react";
import VideoContainer from "./VideoContainer";

const AppContainer = () => {

    const [prompt, setPrompt] = useState("");
    const [restructuredPrompt, setRestructuredPrompt] = useState("");
     const [interest, setInterest] = useState("");

     const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        try {
            const response = await fetch("/api/keywords", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ prompt }),
            });
    
            if (!response.ok) {
                throw new Error("Erreur lors de la génération des keywords");
            }
    
            const data = await response.json();
            setRestructuredPrompt(data.data.restructuredPrompt);
            // setKeywords(data.data.keywords.split(",").map((keyword : string) => keyword.trim()));
            } catch (error) {
                console.error("Fetch Error:", error);
                // alert(`Fetch Error: ${error.message || "Something went wrong"}`);
            }
        }

        const handleInterestChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            // let timer;

            const target = e.target as HTMLInputElement;
            console.log(e);

            // timer = setTimeout(() => {
            setInterest(target?.value); 
            // }, 300);

            // clearTimeout(timer);
        }

        return (
            <>
                <div className="mx-auto text-center bg-white py-8">
                    
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                    <strong className="font-extrabold text-indigo-950 sm:block"> KW-AI : <br />
                        <span className="text-left text-xl font-light inline-block w-3/5 py-4"> Type what interests you, and let the tool propose you the best keywords and Youtube videos about it. </span>
                        </strong>
                    {/* <small className="font-extralight text-sm text-slate-700">You searched for { interest }</small> */}
                    </h1>

                    {/* <p>Nouveau prompt : { restructuredPrompt }</p> */}
                    
                    <form onSubmit={handleSubmit} className="my-8">
                        <p className="sm:text-xl/relaxed flex items-center justify-center gap-2">
                
                            <input list="interests" id="interests-input" name="interests-input" className="w-1/2 text-md cursor-pointer bg-white p-3 border border-red-200 transition hover:border-red-700" onChange={handleInterestChange} placeholder="Your prompt here"/>

                            <datalist id="interests">
                                <option value="Developer">Developer</option>
                                <option value="Business">Business</option>
                                <option value="Fashion">Fashion</option>
                            </datalist>

                            <button className="border text-black scale-95 border-indigo-500 rounded p-3 cursor-pointer transition hover:scale-100 hover:rotate-2 hover:text-indigo-500">Launch the AI</button>
                        </p>
                    </form>

                    {
                        restructuredPrompt && <p className="text-left">AI-Enhanced prompt : { restructuredPrompt }</p>
                    }

                </div>

                <section className="pt-8 w-4/5 m-auto">
                    <VideoContainer interest={interest}/>
                    
                </section>
            </>
        )
}

export default AppContainer
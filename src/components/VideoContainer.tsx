"use client";

import { useState, useEffect } from "react";
import Keyword from "./Keyword";
import Video from "./Video";

const VideoContainer = () => {

    const [keywords, setKeywords] = useState([]);
    const [lastDeletedKeyword, setLastDeletedKeyword] = useState("");

    useEffect(() => {
      async function fetchKeywords() {
        try {
            const response = await fetch("api/keywords");

            if(!response.ok){
                throw new Error("Erreur lors du chargement des utilisateurs");
            }

            const data = await response.json();
            setKeywords(data);
        } catch (error : any) {
            console.error("Erreur :", error?.message);
        }
      }
    
      fetchKeywords();
    }, []);

    const handleLastDelKeyword = (name: string) => {
        setLastDeletedKeyword(name);
    }


    const handleRemoveKeyword = (id: number) => {
        setKeywords((preKeywords) => preKeywords.filter(keyword => keyword.id !== id));
        // console.log(users);
    };
    
    console.log(keywords);

  return (
        <div className="px-8 py-4 mb-4 text-center">
             
             <span
                className="inline-flex items-center justify-center rounded-full px-2.5 py-0.5 mx-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="-ms-1 me-1.5 size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <p className="whitespace-nowrap text-sm">Keywords generated : </p>
              </span>

            <p>Dernier mot cle supprime :  { lastDeletedKeyword} </p>

              <div className="px-8 py-4 mb-4 text-center">
                    {keywords.map(keyword => (

                        <Keyword key={keyword.id} keyword={keyword} onRemove={handleRemoveKeyword} onDel={handleLastDelKeyword}/>
                    ))}
                </div>

              

                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
                    <div className="h-fit w-fit rounded-lg bg-gray-200">
                        <Video videoSrc="https://www.youtube.com/watch?v=EFmxPMdBqmU"/>
                    </div>
                    <div className="h-fit w-fit rounded-lg bg-gray-200">
                        <Video videoSrc="https://www.youtube.com/watch?v=EFmxPMdBqmU"/>
                    </div>
                    <div className="h-fit w-fit rounded-lg bg-gray-200">
                        <Video videoSrc="https://www.youtube.com/watch?v=EFmxPMdBqmU"/>
                    </div>
                </div>
              
        </div>
  )
}

export default VideoContainer
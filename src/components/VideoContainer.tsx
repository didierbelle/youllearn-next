"use client";

import { useState, useEffect } from "react";
import Keyword from "./Keyword";
import Video from "./Video";

// import { KeywordType } from "@/types/Keywords";


const VideoContainer = ({interest} : {interest : string}) => {

    const [keywords, setKeywords] = useState<string[]>([]);
	const [videos, setVideos] = useState([]);
  	// const interest = "investir en Afrique"; // Example phrase

	useEffect(() => {
		// async function generateKeywords() {
		// 	try {
		// 		const response = await fetch("/api/keywords", {
		// 			method: "POST",
		// 			headers: { "Content-Type": "application/json" },
		// 			body: JSON.stringify({ phrase: interest }),
		// 		});

		// 		if (!response.ok) {
		// 			throw new Error("Erreur lors du chargement des keywords");
		// 		}

		// 		const data = await response.json();
		// 		setKeywords(data);
		// 	} catch (error) {
		// 		console.error("Erreur:", error);
		// 	}
		// }

		async function fetchVideos() {
			try {
				const videos = await fetch("api/videos");

				if(!videos.ok) throw new Error("Can't fetch videos");

				const data = await videos.json();
				setVideos(data.items);

			} catch (error) {
				console.error(error);
			}
		}

		//generateKeywords();
		fetchVideos();
	}, [interest]);



    const handleRemoveKeyword = (word: string) => {
        setKeywords((preKeywords) => preKeywords.filter((keyword : string)  => keyword !== word));
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


              <div className="px-8 py-4 mb-4 text-center">
									
                    {keywords.map((keyword : string) => (
                        <Keyword key={keyword} keyword={keyword} onRemove={handleRemoveKeyword}/>
                    ))}
                </div>

              

                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
					{ 
						videos.map((video : { 
							id : { videoId : string }
							snippet : { description :  string }
						}, index : number) => {
							const videoId = video?.id.videoId;
							const description = video.snippet.description;
							return (
								<div key={index} className="h-fit w-fit rounded-lg bg-gray-50 pb-3 hover:border hover:border-red-200 transition duration-300 ease-in-out hover:scale-105">
									<Video videoSrc={videoId} description={description}/>
								</div>
							);
						})
					}
                    {/* <div className="h-fit w-fit rounded-lg bg-gray-200">
                        <Video videoSrc="https://www.youtube.com/watch?v=EFmxPMdBqmU"/>
                    </div>
                    <div className="h-fit w-fit rounded-lg bg-gray-200">
                        <Video videoSrc="https://www.youtube.com/watch?v=EFmxPMdBqmU"/>
                    </div>
                    <div className="h-fit w-fit rounded-lg bg-gray-200">
                        <Video videoSrc="https://www.youtube.com/watch?v=EFmxPMdBqmU"/>
                    </div> */}
                </div>
              
        </div>
  )
}

export default VideoContainer
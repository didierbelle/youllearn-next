"use client"

import Image from "next/image";
import { useState } from "react";
import Video from "@/components/Video";
import VideoContainer from "@/components/VideoContainer";

export default function Home() {

  const [profile, setProfile] = useState("");

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // let timer;

    const target = e.target as HTMLInputElement;
    console.log(e);

    // timer = setTimeout(() => {
      setProfile(target?.value); 
    // }, 300);

    // clearTimeout(timer);
  }

  return (
    <>
      <section className="bg-red-50">
        <div className="mx-auto max-w-screen-xl px-4 py-14 lg:flex lg:h-[300px] lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              {/* Understand User Flow. */}
              <strong className="font-extrabold text-red-700 sm:block"> KW-AI : { profile } </strong>
              <small className="font-extralight text-sm text-slate-700">Trendy keywords for your profession</small>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">

              {/* <select name="profile" id="profile" className="cursor-pointer bg-white p-3" onChange={handleProfileChange}>
                <option value="">-- Choose your profession profile --</option>
                

              </select> */}

              <input list="interests" id="interests-input" name="interests-input" className="text-2xl cursor-pointer bg-white p-3 border border-slate-200 transition hover:border-indigo-900" onChange={handleProfileChange}/>

              <datalist id="interests">
                <option value="Developer">Developer</option>
                <option value="Business">Business</option>
                <option value="Fashion">Fashion</option>
              </datalist>
            </p>


          </div>
        </div>
      </section>

      <section className="pt-8 w-4/5 m-auto">
        <VideoContainer />

        
        
      </section>
    </>
  );
}

"use client";

import { useState } from "react";
import VideoContainer from "./VideoContainer";

const AppContainer = () => {

  const [interest, setInterest] = useState("");

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
        <div className="mx-auto text-center">
            
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              <strong className="font-extrabold text-red-700 sm:block"> KW-AI : { interest } </strong>
              <small className="font-extralight text-sm text-slate-700">Trendy keywords for your profession</small>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">

                <input list="interests" id="interests-input" name="interests-input" className="text-2xl cursor-pointer bg-white p-3 border border-slate-200 transition hover:border-indigo-900" onChange={handleInterestChange}/>

                <datalist id="interests">
                <option value="Developer">Developer</option>
                <option value="Business">Business</option>
                <option value="Fashion">Fashion</option>
                </datalist>
            </p>

          </div>

          <section className="pt-8 w-4/5 m-auto">
            <VideoContainer interest={interest}/>
            
          </section>
    </>
  )
}

export default AppContainer
"use client";

import { useState } from "react";
import Keyword from "./Keyword";

const KeywordGenerator = () => {

    
    const [keywords, setKeywords] = useState<string[]>([]);

    const handleRemoveKeyword = (word: string) => {
        setKeywords((preKeywords) => preKeywords.filter((keyword : string)  => keyword !== word));
        // console.log(users);
    };

    

  return (
    <>
        {
            keywords.map((keyword : string, index : number) => (
                <Keyword key={index} keyword={keyword} onRemove={handleRemoveKeyword} />
            ))
        }
    </>
  )
}

export default KeywordGenerator
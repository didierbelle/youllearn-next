"use client";

import { useState } from "react";

interface Keyword {
    id: number,
    name: string
};

const Keyword = ({ keyword, onRemove, onDel } : { keyword : Keyword; onRemove : (id: number) => void; onDel : (name: string) => void} ) => {
    
    const [useful, setUseful] = useState(true);

    // const handleKeywordUtility = (e : React.MouseEvent<HTMLButtonElement>) => {
    //     console.log(e.target);
    // }

    const handleRemove = (e: React.MouseEvent<HTMLSpanElement>) => {
        e.stopPropagation(); // Prevent event bubbling
        onRemove(keyword.id); // Call the parent function with the user ID
    };

    const handleOnDel = (e : React.MouseEvent<HTMLParagraphElement>) => {
        e.stopPropagation();
        onDel(keyword.name);
    }

  return (
        <span
            // key={keyword.id}
            className="inline-flex items-center justify-center rounded-full border border-emerald-500 mx-1.5 px-2.5 py-0.5 text-emerald-700 transition hover:bg-emerald-200"
            onClick={handleRemove}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="-ms-1 me-1.5 size-4 cursor-pointer transition hover:scale-125 hover:font-bold hover:text-red-500"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>

            <p className="whitespace-nowrap text-sm" onMouseOver={handleOnDel}>{keyword?.name}</p>
        </span>
  )
}

export default Keyword
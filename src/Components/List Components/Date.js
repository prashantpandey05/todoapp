import {useState} from "react";

export default function Date({todoDate})
{

  return(
      <div className="flex mb-10  text-2xl">
          <h2 className="mr-4 underline font-bold">DateTime:</h2>
          <p >{todoDate}</p>
      </div>
  );
}
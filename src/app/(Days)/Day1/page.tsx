'use client'
import Image from "next/image";
import React from "react";
import { img1,img2 } from "./images";
const imagedata=[
  {
    "name":"img1",
    "image":img1
  },
  {
    "name":"img2",
    "image":img2
  }
]
const Day1 = () => {
  return (
    <div className=" p-4 text-sm  flex flex-col items-center justify-center h-screen ">
      Backstory:
      I got this during one of my interview and I mess it up lol
      <p>I know there are many libary but doing it manually can improve your logic</p>

      <div className="flex items-center justify-center  space-x-4 ">
        <div>arrow</div>
        {imagedata.map((data,index)=>(
          <div key={index} >
            <Image draggable={false} src={data.image} width={100} height={100} alt={data.name} />
          </div>

        ))}
         <div>arrow</div>
      </div>
    </div>
  );
};

export default Day1;

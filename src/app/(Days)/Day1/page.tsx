'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { img1, img2 } from "./images";

const imagedata = [
  { name: "img1", image: img1 },
  { name: "img2", image: img2 },
  { name: "img3", image: "https://images.pexels.com/photos/28389852/pexels-photo-28389852/free-photo-of-traditional-colorful-turkish-carpet.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" },
  { name: "img4", image: "https://images.pexels.com/photos/18449266/pexels-photo-18449266/free-photo-of-bell-tower-of-saint-nikolas-church-over-adriatic-sea.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" },
];

const Day1 = () => {
  const [counter, setCounter] = useState(0);

  const decrementit = () => {
    setCounter((prevCounter) =>
      prevCounter === 0 ? imagedata.length - 1 : prevCounter - 1
    );
  };

  const incrementit = () => {
    setCounter((prevCounter) => (prevCounter + 1) % imagedata.length);
  };

  useEffect(()=>{
   const interval=setInterval(incrementit,2000)
   return ()=>clearInterval(interval)
  },[])
  return (
    <div className="p-4 text-sm flex flex-col items-center justify-center h-screen">
      <p className="mb-4">
        Backstory: I got this during one of my interviews and I messed it up lol
      </p>
      <p className="mb-4">
        I know there are many libraries but doing it manually can improve your logic
      </p>
      <div className="flex  items-center justify-center space-x-4">
        <button
          className="cursor-pointer border rounded-md p-2"
          onClick={decrementit}
        >
          arrow
        </button>
        <div className="relative w-[100px] h-[100px]">
          <Image
            className="rounded-lg object-cover"
            draggable={false}
            src={imagedata[counter].image} //so we can use it to change image the next line
            fill
            alt={imagedata[counter].name}
          />
        </div>
        <button
          className="cursor-pointer border rounded-md p-2"
          onClick={incrementit}
        >
          arrow
        </button>
      </div>
      <p className="mt-4">Current index: {counter}</p>
    </div>
  );
};

export default Day1;
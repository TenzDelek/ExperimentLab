"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { img1, img2 } from "../(Days)/Day1/images";
const Gallery = [
  {
    name: "img1",
    images: img1,
  },
  {
    name: "img2",
    images: img2,
  },
  {
    name: "img3",
    images:
      "https://images.pexels.com/photos/28389852/pexels-photo-28389852/free-photo-of-traditional-colorful-turkish-carpet.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  },
];
const Page = () => {
  const [counter, setcounter] = useState(0);
  const increment = () => {
    setcounter((prev) => (prev + 1)%Gallery.length);
  };
  const decrement = () => {
    setcounter((prev) => prev==0?Gallery.length-1: prev - 1);
  };
  useEffect(()=>{
    const interval= setInterval(increment,2000)
    return ()=>clearInterval(interval)
  },[])
  return (
    <div className=" w-full flex-col h-screen flex gap-2 items-center justify-center">
      <div className="flex items-center gap-x-2">
        <button onClick={decrement} className=" border p-2 rounded-sm">
          down
        </button>
        <div>
          <Image
            alt={Gallery[counter].name}
            src={Gallery[counter].images}
            width={200}
            height={200}
          />
        </div>
        <button onClick={increment} className=" border p-2 rounded-sm">
          up
        </button>
      </div>
      {counter}
    </div>
  );
};

export default Page;

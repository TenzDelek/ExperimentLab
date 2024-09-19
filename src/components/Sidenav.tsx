import Link from "next/link";
import React from "react";

const Sidenav = () => {
  const Day = [
    {
      daycount: 0,
      day: "Introduction",
      link: "/",
    },
    {
      daycount: 1,
      day: "Day 1:Image Slider",
      link: "/Day1",
    },
    {
      daycount: 2,
      day: "Day 2:API Call Server",
      link: "/Day2",
    },
    {
      daycount: 3,
      day: "Day 3:API Call Client",
      link: "/Day3",
    },
    {
      daycount: 4,
      day: "Day 4:Dynamic Route",
      link: "/Day4",
    },
    {
      daycount: 5,
      day: "Day 5:UseRouter and redirect",
      link: "/Day5",
    },
  ];
  return (
    <div className="max-sm:hidden w-[250px] ">
      <div className=" space-y-4 p-6">
        {Day.map((days, index) => {
          return (
            <div
             
              className=" rounded-md w-full hover:bg-[#272829] p-2 text-sm transition"
              key={index}
            >
              <Link href={days.link}>{days.day}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidenav;

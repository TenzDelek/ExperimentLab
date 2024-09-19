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
      link: "/1imageslider",
    },
    {
      daycount: 2,
      day: "Day 2:API Call Server",
      link: "/2serverapi",
    },
    {
      daycount: 3,
      day: "Day 3:API Call Client",
      link: "/3clientapi",
    },
    {
      daycount: 4,
      day: "Day 4:Dynamic Route",
      link: "/4dynamic",
    },
    {
      daycount: 5,
      day: "Day 5:UseRouter and redirect",
      link: "/5userouter",
    },
    {
      daycount: 6,
      day: "Day 5:onClick",
      link: "/6onclick",
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

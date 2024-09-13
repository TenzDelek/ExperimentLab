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
      day: "Day 2:Buttons",
      link: "/Day2",
    },
    {
      daycount: 1,
      day: "Day 3:Dropdown",
      link: "/Day3",
    },
  ];
  return (
    <div className="max-sm:hidden w-[250px] ">
      <div className=" space-y-4 p-6">
        {Day.map((days, index) => {
          return (
            <div
              className=" rounded-md w-full hover:bg-[#272829] p-2 text-sm transition"
              key={days.daycount}
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

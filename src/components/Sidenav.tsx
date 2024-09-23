'use client'

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Sidenav = () => {
  const pathname = usePathname();
  const locale = pathname.startsWith('/tib') ? 'tib' : 'en';

  const Day = [
    {
      daycount: 0,
      day: {
        en: "Introduction",
        tib: "ངོ་སྤྲོད།",
      },
      link: "/",
    },
    {
      daycount: 1,
      day: {
        en: "Day 1: Image Slider",
        tib: "ཉིན་དང་པོ། པར་རིས་འཁོར་ལོ།",
      },
      link: "/1imageslider",
    },
    {
      daycount: 2,
      day: {
        en: "Day 2: API Call Server",
        tib: "ཉིན་གཉིས་པ། API འབོད་སྐུལ་ཞབས་ཞུ་ཆས།",
      },
      link: "/2serverapi",
    },
    {
      daycount: 3,
      day: {
        en: "Day 3: API Call Client",
        tib: "ཉིན་གསུམ་པ། API འབོད་སྐུལ་མཁོ་མཁན།",
      },
      link: "/3clientapi",
    },
    {
      daycount: 4,
      day: {
        en: "Day 4: Dynamic Route",
        tib: "ཉིན་བཞི་པ། འགྱུར་ལྡོག་ལམ་ཁ།",
      },
      link: "/4dynamic",
    },
    {
      daycount: 5,
      day: {
        en: "Day 5: UseRouter and redirect",
        tib: "ཉིན་ལྔ་པ། UseRouter དང་ཁ་ཕྱོགས་བསྐྱར་སྒྲིག",
      },
      link: "/5userouter",
    },
    {
      daycount: 6,
      day: {
        en: "Day 6: onClick",
        tib: "ཉིན་དྲུག་པ། མནན་པ།",
      },
      link: "/6onclick",
    },
    {
      daycount: 7,
      day: {
        tib: "ཉིན་བདུན་པ་: ཕྲིས་མ།",
        en: "Day 7: Prisma",
      },
      link: "/7prisma",
    },
  ];

  return (
    <div className="max-sm:hidden w-[250px]">
      <div className="space-y-4 p-6">
        {Day.map((days, index) => {
          return (
            <div
              className="rounded-md w-full hover:bg-[#272829] p-2 text-sm transition"
              key={index}
            >
              <Link href={`/${locale}${days.link}`}>
                {days.day[locale] || days.day.en}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidenav;
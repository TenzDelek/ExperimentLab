'use client'

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Page = () => {
    const pathname = usePathname();
    const id = 3;

    return (
        <div className="p-4 text-sm flex flex-col items-center justify-center">
            <Link className="border rounded-md p-2" href={`${pathname}/${id}`}>
                Go to Blog
            </Link>
            <div>Page</div>
        </div>
    );
};

export default Page;
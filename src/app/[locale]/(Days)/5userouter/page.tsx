// 'use client'

// import { useRouter } from "next/navigation";

// const Page = () => {
//   const router=useRouter()
//   return (
//     <div className="p-4 text-sm flex flex-col items-center justify-center ">

//       <button onClick={()=>router.push("/")}>
//      back to home client
//       </button>
//     </div>
//   );
// };

// export default Page;

//server
import { redirect } from "next/navigation";
import React from "react";

const Page = () => {
  const demo=true
  if (!demo){
    redirect("/") //always takes us to redirect

  }
  return (
    <div className="p-4 text-sm flex flex-col items-center justify-center ">
       tenzin
    </div>
  );
};

export default Page;

import Link from "next/link";

const Page = () => {
    const id=3
  return (
    <div className="p-4 text-sm flex flex-col items-center justify-center h-screen">
      <Link className=" border rounded-md p-2" href={`/4dynamic/${id}`}>Go to Blog</Link>
      <div>Page</div>
    </div>
  );
};

export default Page;

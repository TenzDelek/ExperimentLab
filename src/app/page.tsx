
export default function Home() {
  return (
    <div className=" p-4 text-sm  flex flex-col items-center justify-center h-screen " >
      <h1 className=" font-bold text-lg">Tenzin Delek Daily learning journal</h1>
      <p className=" px-2 py-1 w-fit my-2 rounded-lg bg-[#272829]">Why I am creating this?</p>
    <p className=" w-[480px] text-justify">
      Long story short, I am tried of tutorials, and I am still trying. and the most efficient way
      I found out is the trials and error. so this a journal to record my journey, a 30 day challenge to learn and explore the world of web design and development
    </p>
    
    <a href="" className="  mt-2 border rounded-lg p-2 shadow cursor-pointer transition hover:shadow-none hover:bg-[#272829]">Github Repo</a>
    </div>
  );
}

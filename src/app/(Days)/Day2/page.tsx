
import axios from 'axios'
import Image from 'next/image'
import React from 'react'

const Day2 = async () => {
  try
  {

    const data=await axios.get('https://api.github.com/users/TenzDelek')

  return (

    <div className=" p-4 text-sm  flex flex-col items-center justify-center h-screen ">
      <p>I know that API call is kinda backend but its important</p>
      {data && (
<div>


      <div className=' gap-x-3 flex items-center'>
        <div className=' flex  justify-center items-end flex-col'>
          <p>{data.data.login}</p>
          <p className=' text-sm font-bold'>{data.data.bio}</p>
        </div>
        <Image className=' rounded-md' alt='avatar' src={data.data.avatar_url} width={50} height={50} />
   
      </div>
      <div className=' flex gap-x-4 mt-3 '>
      <p className=' border rounded-md px-2'>Repo:{data.data.public_repos}</p>
      <p className=' border rounded-md px-2'>Follower:{data.data.followers}</p>
      <p className=' border rounded-md px-2'>Following:{data.data.following}</p>
      </div>
      </div>
      )}
    </div>
  )
}

  catch
  {
    return (
      <div className=" p-4 text-sm  flex flex-col items-center justify-center h-screen ">
        <p>Rate Limit Try again later</p>
      </div>
    )
  }
}

export default Day2
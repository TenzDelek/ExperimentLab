'use client'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
type PageProps = {
  params: {
    id: string
  },
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}
const Page:React.FC<PageProps> = ({params,searchParams}) => { //searchParams for server
  const router=useRouter()
  const searchparams=useSearchParams() //only for client //will not make network request(get/post)
    const {id}=params
  return (
    <div className="p-4 text-sm flex flex-col items-center justify-center">
        <p>searchparams: http://localhost:3000/4dynamic/3?color=green</p>
        <p>server:{searchParams.color}</p>
        <p>client:{searchparams.get('color')}</p>
        <div className=' flex  gap-x-2'>
        <button className=' border bg-green-500 rounded-md p-2' onClick={()=>router.push(`/4dynamic/${id}?color=black`)}>Black</button>
        <button className=' border bg-green-500 rounded-md p-2' onClick={()=>router.push(`/4dynamic/${id}?color=green`)}>green</button>
        <button className=' border bg-green-500 rounded-md p-2' onClick={()=>router.push(`/4dynamic/${id}?color=yellow`)}>yellow</button>

        </div>
        <p>with destructure: {id}</p>
        <p>direct without destructure: {params.id}</p>
        <p className=' mt-4'>can also use link for searchparams</p>
        <Link className=' underline' href={`/4dynamic/${id}?color=white`}>go to white shirt</Link>
    </div>
  )
}

export default Page
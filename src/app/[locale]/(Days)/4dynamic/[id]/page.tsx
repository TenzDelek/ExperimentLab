'use client'

import Link from 'next/link'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import React from 'react'

type PageProps = {
  params: {
    id: string
  },
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}

const Page: React.FC<PageProps> = ({ params, searchParams }) => {
  const router = useRouter()
  const clientSearchParams = useSearchParams()
  const pathname = usePathname()
  const { id } = params

  // Determine the current language based on the pathname
  const locale = pathname.startsWith('/tib') ? 'tib' : 'en'

  // Translations
 

  return (
    <div className="p-4 text-sm flex flex-col items-center justify-center">
      <h1>Color Selection</h1>
      <p>searchparams: http://localhost:3000/{locale}/4dynamic/3?color=green</p>
      <p>server: {searchParams.color as string}</p>
      <p>client: {clientSearchParams.get('color')}</p>
      <div className='flex gap-x-2'>
        <button className='border bg-green-500 rounded-md p-2' onClick={() => router.push(`/${locale}/4dynamic/${id}?color=black`)}>black</button>
        <button className='border bg-green-500 rounded-md p-2' onClick={() => router.push(`/${locale}/4dynamic/${id}?color=green`)}>green</button>
        <button className='border bg-green-500 rounded-md p-2' onClick={() => router.push(`/${locale}/4dynamic/${id}?color=yellow`)}>yellow</button>
      </div>
      <p>with destructure: {id}</p>
      <p>direct without destructure: {params.id}</p>
      <p className='mt-4'>can also use link for searchparams</p>
      <Link className='underline' href={`/${locale}/4dynamic/${id}?color=white`}>white</Link>
    </div>
  )
}

export default Page
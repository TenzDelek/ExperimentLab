import React from 'react'

const Page = ({params}:{params:{id:string}}) => {
    const {id}=params
  return (
    <div className="p-4 text-sm flex flex-col items-center justify-center h-screen">
        
        <p>with destructure: {id}</p>
        <p>direct without destructure: {params.id}</p>
    </div>
  )
}

export default Page
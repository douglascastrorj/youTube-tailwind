'use client';

import React from 'react'

const VideoPage = ({params}) => {
  console.log(params.id)
  return (
    <section className="flex min-h-screen flex-col items-center sm:items-start justify-between p-8">
     
    <div className='flex flex-row flex-wrap gap-8 text-slate-100'>
      Pagina de video
    </div>
    
   </section>
  )
}

export default VideoPage
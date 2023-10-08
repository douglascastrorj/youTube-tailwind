'use client';

import React from 'react'

const VideoPage = ({ params }) => {
  console.log(params.id)

  const getVideoUrl = () => {
    return `https://www.youtube.com/embed/${params.id}?autoplay=1`
  }

  return (
    <section className="flex min-h-screen w-full flex-col items-center sm:items-start justify-between p-8">

      <div className='w-full flex flex-row justify-center flex-wrap gap-8 text-slate-100'>
        <iframe className='w-full sm:h-[440px] md:h-[600px] justify-center' height="315" src={getVideoUrl()} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
      </div>
    </section>
  )
}

export default VideoPage
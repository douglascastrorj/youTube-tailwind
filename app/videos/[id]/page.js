'use client';
'use client';

import Comments from '@/components/Comments';
import LikeButton from '@/components/LikeButton';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const VideoPage = ({ params }) => {

  const [video, setVideo] = useState({});
  const getVideoUrl = () => {
    return `https://www.youtube.com/embed/${params.id}?autoplay=1`
  }

  useEffect(() => {
    const getVideo = async () => {
      const response = await fetch(`/api/videos/${params.id}`)
      const _video = await response.json();
      setVideo(_video);
      console.log('video', _video)
    }

    getVideo();
  }, [])

  return (
    <section className="flex min-h-screen w-full flex-col items-center sm:items-start justify-between p-8">

      <div className='w-full flex flex-row justify-center flex-wrap gap-8 text-slate-100'>
        <iframe className='w-full sm:h-[440px] md:h-[600px] justify-center' height="315" src={getVideoUrl()} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>

        <div className='w-full flex justify-start'>
          <div>
            <h1 className='text-2xl font-bold text-white mb-2'>{video.title}</h1>
            <div className='w-full text-sm text-gray-400 flex gap-2'>
              <Image src={video?.author?.avatar} width={37} height={32} className='rounded-full' />
              <div className='flex flex-col'>
                <span className='font-semibold text-base text-slate-200' > {video?.author?.name} </span>
                <span className='text-sm text-slate-400'> 159 mil Inscritos </span>
              </div>
            </div>
          </div>
          {/* likes section  */}
          <div className='self-end text-slate-200'>
            <LikeButton
              handleDislikeClick={() => { }}
              handleLikeClick={() => { }}
            />
          </div>
        </div>
      </div>
      <div>
        <Comments />
      </div>
    </section>
  )
}

export default VideoPage
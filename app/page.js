'use client';

import CardVideo from '@/components/CardVideo';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'

export default function Home() {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const loadVideos = async () => {
      try {
        const response = await fetch('/api/videos');
        const data = await response.json();
        setVideos(data);
      } catch(e) {
        console.log(e)
      }
    }
    loadVideos()
  }, []);
  
  return (
    <section className="flex min-h-screen flex-col items-center justify-between p-y-8">
     
     <div className='flex flex-row flex-wrap gap-8 justify-center'>
      {videos.map((video) => (
        <CardVideo key={video.id} video={video} />
      ))}
     </div>
     
    </section>
  )
}



import {BsThreeDotsVertical} from 'react-icons/md'
import Image from 'next/image'
import { useRouter } from 'next/navigation';


const CardVideo = ({video}) => {

  const router = useRouter();

  const onClickCard = (video) => { 
    router.push(`/videos/${video.id}`);
  }

  const formatVisualizations = () => {
    if(video.visualizations >= 1000000) {
      return `${(video.visualizations / 1000000).toFixed(1)}M de visualizações`
    } else if(video.visualizations >= 1000) {  
      return `${(video.visualizations / 1000).toFixed(1)}K de visualizações`
    }
    return `${video.visualizations} visualizações`
  }

  return (
    <div className='text-slate-50 cursor-pointer' onClick={onClickCard} >
      <Image 
          className='rounded-lg mb-2' 
          src={video.thumb} 
          width={313} 
          height={173} 
          // layout='fill'
          objectFit='contain'
      />
      <div className='flex flex-col gap-2 justify-center w-[313px]'>
        <div className='flex items-center justify-between'>
          <Image className='rounded-full mt-4 mr-4' 
              width={32} height={32} 
              src={video.author.avatar}
          />
          <span>
            {video.title}
          </span>
          {/* <BsThreeDotsVertical fontSize={12} /> */}
        </div>
        <div className='flex flex-col text-gray-400 text-sm px-12'>
          <span> {video.author.name} </span>
          <span> {formatVisualizations()} - {video.relativeDate}</span>
        </div>
      </div>
    </div>
  )
}

  export default CardVideo;
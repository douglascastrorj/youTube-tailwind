import React from 'react'
import { BiLike, BiDislike } from 'react-icons/bi'

const LikeButton = ({
    handleLikeClick,
    handleDislikeClick,
}) => {

    return (
        <div className="flex flex-row items-center justify-center cursor-pointer text-">
            <button className='border-r border-slate-400 hover:bg-slate-800 bg-slate-900 py-2 px-4 flex gap-2 items-center rounded-l-full'>
                <BiLike fontSize={24} onClick={handleLikeClick} />
                123
            </button>
            <button className='hover:bg-slate-800 bg-slate-900  py-2 px-4 flex gap-2 items-center rounded-r-full'>
                <BiDislike fontSize={24} onClick={handleDislikeClick} />
            </button>
        </div>
    )
}

export default LikeButton
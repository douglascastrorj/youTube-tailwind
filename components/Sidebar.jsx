import Link from 'next/link'
import React from 'react'
import { MdHome, MdVideoLibrary, MdHistory, MdAlarm} from 'react-icons/md'
const Sidebar = ({isExpanded}) => {
  return (
    <div className='text-slate-100 flex flex-col items-center'>
        {
            !isExpanded && (
                <ul className='list-none flex flex-col gap-4 items-center p-2'>
                    <li className='flex items-center justify-center ml-4'>
                        <Link href={'/'}>
                            <MdHome className='text-2xl' />
                        </Link>
                    </li>
                    <li className='flex items-center justify-center ml-4'>
                        <Link href={'/'}>
                            <MdVideoLibrary className='text-2xl' />
                        </Link>
                    </li>
                </ul>
            )
        }
        {
            isExpanded && (
                <ul className='list-none flex flex-col p-4 gap-4 items-start w-60 max-h-screen overflow-y-scroll text-sm'>
                    <li className='w-full flex items-center justify-start p-2 ml-2 rounded-md hover:bg-slate-600'>
                        <Link href={'/'} className='flex justify-start items-center'>
                            <MdHome className='text-2xl ml-2' />
                            <span className='ml-2'>Início</span>
                        </Link>
                    </li>
                    <li className='w-full flex items-center justify-start p-2 ml-2 rounded-md hover:bg-slate-600'>
                        <Link href={'/'} className='flex justify-start items-center'>
                            <MdVideoLibrary className='text-2xl ml-2' />
                            <span className='ml-2'>Biblioteca</span>
                        </Link>
                    </li>

                    <div className='w-11/12 h-px bg-slate-600 my-2 mx-4' />

                    <li className='w-full flex items-center justify-start p-2 ml-2 rounded-md hover:bg-slate-600'>
                        <Link href={'/'} className='flex justify-start items-center'>
                            <MdHistory className='text-2xl ml-2' />
                            <span className='ml-2'>Histórico</span>
                        </Link>
                    </li>

                    <li className='w-full flex items-center justify-start p-2 ml-2 rounded-md hover:bg-slate-600'>
                        <Link href={'/'} className='flex justify-start items-center'>
                            <MdAlarm className='text-2xl ml-2' />
                            <span className='ml-2'>Assistir mais tarde</span>
                        </Link>
                    </li>
                </ul>
            )
        }
    </div>
  )
}

export default Sidebar
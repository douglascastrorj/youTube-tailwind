'use client'
import Image from "next/image"
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import { MdMenu, MdSearch, MdNotifications } from 'react-icons/md';
import { useRouter } from "next/navigation";
import SearchForm from "./SearchForm";

const Nav = ({handleMenuClick}) => {

    // const {data: session} = useSession();
    const session = {};

    const router = useRouter();

    const [providers, setProviders] = useState(null);
    const [toggle, setToggle] = useState(false);

    const onSearchSubmit = (searchTerm) => {
        alert(searchTerm)
    }
  
    useEffect(() => {
      const _setProviders = async () => {
        const response = await getProviders();
        setProviders(response);
      }
  
      _setProviders();
    }, []);

  return (
    <nav className="w-full bg-slate-950 flex flex-row content-center justify-start gap-x-16 sm:justify-between h-16 px-4 text-slate-100 mb-4">
        <div className='flex flex-row items-center gap-x-2 cursor-pointer'>
            
            <div className="border border-transparent rounded-full p-2 mr-2 hover:border-slate-300 transition-all duration-200">
               <MdMenu  fontSize={24} onClick={handleMenuClick}/>
            </div>

            <Image 
                src={'/assets/images/youtube-logo.png'}
                width={32}
                height={24}
                onClick={() => router.push('/')}
            /> 
            <span className="font-semibold" >Youtube</span>
        </div>
        <div className="flex items-center justify-center cursor-pointer">
            <SearchForm 
                handleSubmit={onSearchSubmit}
            />
        </div>

        <div className="hidden sm:flex items-center justify-center h-full px-4 cursor-pointer">

            <MdNotifications fontSize={24} className="mr-4" />
            <Image
                width={37}
                height={37}
                className="rounded-full"
                alt="Profile"
                src={session?.user?.image || 'https://yt3.ggpht.com/yti/ADpuP3P9fNka54uXB6jOyVJaR4JM5RCa_qTxt9IoRxm6EA=s88-c-k-c0x00ffffff-no-rj'}
                onClick={() => setToggle(prev => !prev)}
              />

        </div>
    </nav>
  )
}

export default Nav
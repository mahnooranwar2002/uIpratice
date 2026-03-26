"use client"
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import React, { use } from 'react'
import Topbar from './Topbar'
import { RatIcon, RibbonIcon } from 'lucide-react'

const Navbar = () => {
  const pathname=usePathname();
if (pathname === "/about") {
    return null;
  }


  return (
    
    <>    
    <Topbar/>
   
    <div className='flex px-14 bg-[#0a0a0a] py-7 z-50 justify-between  items-center'>
        <h1 className='text-3xl font-extrabold'><span className='text-[#E2B05E]'>A</span>ura.</h1>
        {/* <ul className='flex gap-5 text-black font-semibold'>
            <li>  <Link href={"/about"}>ABOUT</Link></li>
                 <li>  <Link href={"/"}>HOME</Link></li>
                      <li>  <Link href={"/contact"}>CONTACT</Link></li>
                    
        
          <RibbonIcon/>
          <RatIcon/>
        </ul> */}
         <a href="" className='bg-[#E2B05E] py-3 px-5 rounded text-black '>Menu</a>
    </div>
    </>

  )
}

export default Navbar
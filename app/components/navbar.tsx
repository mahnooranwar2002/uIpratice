"use client"
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import React, { use } from 'react'
import Topbar from './Topbar'
import { RatIcon, RibbonIcon } from 'lucide-react'

const Navbar = () => {
var pathname=usePathname();
if (pathname === "/about") {
    return null;
  }


  return (
    
    <>    
    <Topbar/>
   
    <div className='flex px-14 py-7 justify-between  items-center'>
        <h1 className='text-3xl font-bold '>Navbar</h1>
        {/* <ul className='flex gap-5 text-black font-semibold'>
            <li>  <Link href={"/about"}>ABOUT</Link></li>
                 <li>  <Link href={"/"}>HOME</Link></li>
                      <li>  <Link href={"/contact"}>CONTACT</Link></li>
                    
        
          <RibbonIcon/>
          <RatIcon/>
        </ul> */}
         <a href="" className='bg-[#FF404C] py-3 px-5 rounded'>Menu</a>
    </div>
    </>

  )
}

export default Navbar
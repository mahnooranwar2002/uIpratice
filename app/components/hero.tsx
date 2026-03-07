import React from 'react'
import Image from 'next/image'
import pic from "../../public/file.svg"
import Navbar from './navbar'
const Hero = () => {
  return (
    <>
    <section id='home-bannar'>  
      <Navbar/>
                 <div className='lg:pb-70 lg:pt-30 lg:px-20 p-10' >
  
    <div className='flex container mx-auto lg:flex-row flex-col'>
      <div className='lg:w-6/12  lg:px-20 lg:py-10 py-5 w-full'>

   <h3 className='text-5xl font-semibold '>
    Order Healthy and <span className='text-[#FF404C]'>Fresh Food</span> Any time
   </h3>
      <p className='mt-3 text-gray-200'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit neque ipsa nisi error quidem dolore alias accusamus fugiat nam aspernatur expedita odio est iusto veritatis possimus asperiores sint, quos officia!</p>
      <div><a href="" className='bg-[#FF404C] py-3 px-8 rounded inline-block mt-5 mr-5'>Join us</a>
      
      <a href="" className='border-[#FF404C] border-2 py-3 px-8 rounded inline-block mt-5'>Join us</a>
      </div>
                  
      </div>
    </div>
   <svg className='lg:block hidden' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0a0a0a" fill-opacity="1" d="M0,128L48,138.7C96,149,192,171,288,170.7C384,171,480,149,576,160C672,171,768,213,864,208C960,203,1056,149,1152,154.7C1248,160,1344,224,1392,256L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </div>
    
</section>
ssss
</>
  )
}

export default Hero

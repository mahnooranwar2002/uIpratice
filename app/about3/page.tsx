import React from 'react'
import Info from '../components/Info'
import CTABannersSection from './CtabannarSection'

const page = () => {
  return (
    <div>
     <section className='  my-4 py-5'>
      <div className='container mx-auto flex lg:flex-row flex-col-reverse'>
<div className='lg:w-6/12 p-5 w-full '>


<h4 className='font-extrabold text-5xl mb-5'><span className='text-[#E2B05E]'>A</span>bout us</h4>
<p className='mb-2 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, omnis hic eius voluptatum, architecto et quo non animi corrupti cumque ex voluptate aliquam sequi itaque ipsum neque necessitatibus adipisci autem!3
  
</p>
<ul className='mb-5'>
  <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, unde?</li>
    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, unde?</li>
      <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, unde?</li>
        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, unde?</li>
          <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, unde?</li>
</ul>
  <a href="" className='bg-[#E2B05E] py-3 px-5 rounded text-black mr-5 '>Contact us</a>
    <a href="" className=' py-3 px-5 rounded text-[#E2B05E] border border-[#E2B05E] '>Our Product </a>
</div>

<div className='lg:w-6/12 w-full rounded '>

  <img 
  className='rounded  bg-amber-100'
      src="https://i.ytimg.com/vi/dRVvLHll7fU/maxresdefault.jpg" alt="" />
</div>




      </div>
     </section>
     
     <Info/>
     <CTABannersSection/>
    </div>
  )
}

export default page

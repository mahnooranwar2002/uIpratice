import React from 'react'

const CTABannersSection = () => {
  return (
    <div>
      <section className='   mx-auto rounded bg-[#0a0a0a]    p-5  my-4'>
        <div className='flex flex-col justify-center items-center'><h4 className='text-center text-4xl my-2 font-semibold'><span className='text-[#E2B05E]'>O</span>ur Features</h4>
        <p className='lg:w-9/12  hidden p-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae aspernatur facere alias modi, ducimus suscipit. Perferendis magni blanditiis quo commodi nostrum, excepturi architecto. Magnam, dicta. Ducimus iste sequi libero inventore.</p></div>
        <div className=' flex lg:flex-row flex-col'>
        <div className='lg:w-6/12 flex lg:px-25 w-full  p-8'>
  <div>
      <p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio mollitia, sequi esse at cumque unde suscipit optio cum. Dolore, alias blanditiis itaque in voluptate corporis temporibus omnis doloremque eos vel.</p>
     <p className='mb-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio mollitia, sequi esse at cumque unde suscipit optio cum. Dolore, alias blanditiis itaque in voluptate corporis temporibus omnis doloremque eos vel.</p>
       <a href="" className='bg-[#E2B05E] py-3 px-5 rounded text-black mr-5 '>Contact us</a>
    <a href="" className=' py-3 px-5 rounded text-[#E2B05E] border border-[#E2B05E] '>Our Product </a>
  </div>
     
        </div>
        <div className='lg:w-5/12 w-full'>
          <img src="https://avatars.mds.yandex.net/i?id=ac0ce253fad81e0daa66156bc8b7162a_l-9099802-images-thumbs&ref=rim&n=13&w=788&h=512" alt="" className='w-full rounded-2xl' />
        </div>
        </div>
      </section>
  
    </div>
  )
}

export default CTABannersSection

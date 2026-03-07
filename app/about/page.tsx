import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      About Page
      <Link href={"/about/id"} className='text-white'>Go to about 1</Link>
    </div>
  )
}

export default page

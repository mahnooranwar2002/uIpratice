"use client"
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
    var b=useParams();
    console.log(b.id);
  return (
    <div>
      dddd {b.id}
    </div>
  )
}

export default page

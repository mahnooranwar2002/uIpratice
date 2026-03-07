// export const dynamic = "force-dynamic";
// export default async function Page() {
 
//   await new Promise((resolve) => setTimeout(resolve, 5000));

//   return (
//     <div className="p-10">
//       <h1 className="text-3xl font-bold">Page Load Ho Gaya!</h1>
//     </div>
//   );
// }
import React from 'react'
import Hero from './components/hero'
import ProfessionalBanner from './components/hero'
const page = () => {
  return (
    <div>
 {/* <Hero/> */}
 <ProfessionalBanner/>
    </div>
  )
}

export default page

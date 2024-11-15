import React from 'react'
import Image from 'next/image'

export default function Herosection() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-12">
  
<div className="col-span-7 sm:text-left place-self-center">
  <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">Hello, I am Eleeza</h1>

 <p className="text-[#ADB7BE] w-full text-lg mb-6lg:text-xl">
I am a frontend developer with a passion for creating intuitive and responsive user interfaces. I have experience working with Html CSS ,Typescript ,React, Next.js, and Tailwind CSS. I am always looking for new challenges and opportunities to learn and grow.
 </p>
<div className=''>
 <button className='bg-gradient-to-br from-purple-600 to-pink-500 px-6 py-3 rounded-full m-4 bg-white hover:bg-slate-200 text-black'>Hire Me</button>
  <button className='bg-gradient-to-br from-purple-600 to-pink-500 px-6 py-3 rounded-full bg-white hover:bg-slate-200 text-black border- border-white'>Download</button>
</div>
</div>
    <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
    <div className='rounded-md bg-[#181818] w-[250px] h-[250px] lg:w-[400px]  relative'>
        <Image src="/images/lady.jpeg" className='rounded-[50%] absolute transform-translate-x-1/2 top-1/2-translate-y-1/2' alt="ladyimage" height={300} width={300}  />
    </div>
    </div>

      </div>
    </div>
  )
}

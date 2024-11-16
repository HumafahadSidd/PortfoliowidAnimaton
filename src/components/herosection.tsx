'use client'
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

      
export default function Herosection() {
  return (
    <div>
      <div className="grid grid-cols-1 h-screen lg:grid-cols-12">
  
<div className="col-span-7 sm:text-left place-self-center">
  <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-2">
    <span className='text-transparent bg-clip-text  bg-gradient-to-br from-blue-500 to bg-pink-600'>Hello, I am {" "}
  </span>
    <br /> <span>HUMA SIDD</span><br />
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'A Graphic Designer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
       'A Website Developer using modern Tools',
        1000,
        'UI/UX Designer',
        1000,
        '& An Applied Chemist',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', display: 'inline-block' }}
      repeat={Infinity}
    />
 </h1>

 <p className="text-[#ADB7BE] w-full text-lg mb-6l g:text-xl">
I am a frontend developer with a passion for creating intuitive and responsive user interfaces. I have experience working with Html CSS ,Typescript ,React, Next.js, and Tailwind CSS. I am always looking for new challenges and opportunities to learn and grow.
 </p>
<div className='col-span-5 place-self-center lg:mt-0'>
<div>
 <button className='bg-gradient-to-br from-blue-600 to-purple-500 px-8 py-3 mr-4 rounded-full  bg-white hover:bg-slate-200 text-black'>Hire Me</button>
 
    <button className='bg-gradient-to-br from-blue-600 to-purple-500 px-6 py-3 mt-4 rounded-full bg-white hover:bg-slate-200 text-black border- border-white'>Download</button>
    </div>
</div>
</div>
    <div className=' col-span-5 flex place-self-center mt-6 lg:mt-0'>
    <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] relative p-6'>
        <Image src="/images/lady.jpeg" className='rounded-[50%] absolute transform-translate-x-1/2 top-1/2-translate-y-1/2' alt="ladyimage" height={200} width={200}  />
    </div>
    </div>

      </div>
    </div>
  )
}

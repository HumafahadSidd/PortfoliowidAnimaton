import React from 'react'
import Link from 'next/link'
export default function Navbar() {
  return (
    <div>

      <nav>

        <div className='flex flex-wrap items-center justify-between mx-auto  '>
         <Link href="/" className='text-4xl  font-semibold text-white ml-4'>HS </Link>
        
<div className="text-white ">
<ul className='flex flex-wrap items-center justify-between mx-auto p-8 gap-4 '>
      <li><Link href="/About">About</Link></li>
      <li> <Link href="/contact">Contact</Link></li>
      <li> <Link href="/projects">Projects</Link></li>
      <li><button className='px-6 py-2 bg-purple-500 rounded-lg'><Link href="https://github.com/HumafahadSidd">Github</Link></button></li>
      <li><button className='px-6 py-2 bg-purple-500 rounded-lg'><Link href="https://www.linkedin.com/in/huma-fahad-siddiqui-b226b52b7">LinkedIn</Link></button></li>
</ul>
</div>
</div>
    
</nav>
    </div>
  )
}

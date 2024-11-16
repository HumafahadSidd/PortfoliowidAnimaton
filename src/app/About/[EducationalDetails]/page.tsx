import Sidebar from '@/components/sidebar'
import Link from 'next/link'
import React from 'react'

export default function EducationalDetails() {
  return (
    <div className='h-screen bg-gray-900 text-white w-[100%] pl-10 pt-10 '>
     
      <h1 className='text-center font-2xl' >Click link below to know more about me: </h1>
           
      <ul className='underline text-center pt-4'>
          <li><Link href="/About/EducationalDetails/Education">Education</Link></li>
          <li><Link href="/About/EducationalDetails/Skills">Skills</Link></li>
        </ul>
            </div>
    
    

  )
}

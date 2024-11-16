import React from 'react'
import Image from 'next/image'

function Projects() {
  return (
    <div className="h-screen bg-gray-900 text-white">
      <div >
       <h1>Here are some latest Projects on which i have worked</h1>
       <div className=''>

        <div className='flex '>
        {/* pic1 */}
        <div className=' pl-4 pr-4 pt-4 pb-4'>
        <Image src="/images/attendeForm.png" alt="atendeeForm" width={200} height={200} />
        </div> 
       {/* pic2 */}
      <div  className="pl-4 pr-4 pt-4 pb-4">
        <Image src="/images/calculator.png" alt="calculator" width={200} height={200} />
        </div>
        {/* pic3 */}
        <div className=' pl-4 pr-4 pt-4 '>
        <Image src="/images/figma1.png" alt="figma" width={200} height={200} />
        </div>
        </div>
      
        <div className='flex '>
           {/* pic4 */}
        <div  className=' pl-4 pr-4 pt-4 pb-4'>
        <Image src="/images/figma2code.png" alt="figmaconv" width={200} height={200} />
        </div>
        {/* pic5 */}
        <div  className=' pl-4 pr-4 pt-4 pb-4'>
        <Image src="/images/panaclod.png" alt="webimage" width={200} height={200} />
        </div>
        {/* pic6 */}
        <div  className=' pl-4 pr-4 pt-4 pb-4'>
        <Image src="/images/st2.png" alt="static" width={200} height={200} />
        </div>
         {/* pic 7 */}
         <div  className=' pl-4 pr-4 pt-4 pb-4'>
        <Image src="/images/ui-1.png" alt="ui" width={200} height={200} />
        </div>
        </div>  
        </div>

      </div>
      </div>
  )
}

export default Projects
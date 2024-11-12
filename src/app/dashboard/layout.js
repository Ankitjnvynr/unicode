

import { Sidebar,Background, SpotlightBackground } from '@/components'
import React from 'react'

export default function DashLayout({children}) {
  return (
   <>
    <div className='-z-10'><  SpotlightBackground/></div>
    <div
    className='flex z-10  h-screen p-2 gap-2'
    >
        <div className=' min-w-[220px]'><Sidebar/></div>
        <div className=' flex-1 p-2 ' >{children}</div>
        {/* <div className='border' > profile</div> */}
    </div>
    {/* <Background/> */}
   </>
  )
}

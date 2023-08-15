import React from 'react'
import Link from 'next/link'
import { sidebarTopMenu } from '@/data/sidebar-top-menu'
import { sidebarBottomMenu } from '@/data/sidebar-bottom-menu'
import { RocketLaunchIcon } from '@heroicons/react/24/outline'


export default function Sidebar() {
  return (
    <div className='flex flex-col p-8 text-white'>
        {/* Logo */}
        <div className='flex flex-row'>
            <RocketLaunchIcon className='w-6 h-6 stroke-2'/>
            <h1 className='hidden lg:block text-xl font-bold ml-2 uppercase'>RocketDash</h1>
        </div>

        {/* Top Menu */}
        <div className='mt-16 space-y-4'>
            {sidebarTopMenu.map((item, idx) => (
                <div className='flex flex-row' key={idx}>
                    <div className='w-6 h-6 md:mr-2'>{item.icon}</div>
                    <Link href={item.path}><p className='text-xl hidden lg:block font-semibold'>{item.title}</p></Link>
                </div>
            ))}
        </div>

        {/* Bottom Menu */}
        <div className='mb-8 absolute bottom-0 space-y-4'>
            {sidebarBottomMenu.map((item, idx) => (
                <div className='flex flex-row' key={idx}>
                    <div className='w-6 h-6 md:mr-2'>{item.icon}</div>
                    <Link href={item.path}><p className='text-xl hidden lg:block font-semibold'>{item.title}</p></Link>
                </div>
            ))}
        </div>
    </div>
  )
}

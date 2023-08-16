import React from 'react'
import Link from 'next/link'
import { sidebarTopMenu } from '@/data/sidebar-top-menu'
import { sidebarBottomMenu } from '@/data/sidebar-bottom-menu'
import { RocketLaunchIcon } from '@heroicons/react/24/outline'


export default function Sidebar() {
  return (
    <div className='flex flex-col p-4 lg:p-8 text-white h-screen justify-between shadow-md'>
        {/* Logo */}
        <div className='flex flex-row justify-center lg:justify-normal mt-4 hover:bg-blue-600'>
            <RocketLaunchIcon className='w-6 h-6 stroke-2'/>
            <h1 className='hidden lg:block text-lg font-bold ml-2 uppercase'>RocketDash</h1>
        </div>

        {/* Top Menu */}
        <div className='space-y-6'>
            {sidebarTopMenu.map((item, idx) => (
                <div className='flex flex-row justify-center lg:justify-normal' key={idx}>
                    <div className='w-6 h-6 md:mr-2'>{item.icon}</div>
                    <Link href={item.path}><p className='text-lg hidden lg:block font-semibold'>{item.title}</p></Link>
                </div>
            ))}
        </div>

        {/* Bottom Menu */}
        <div className='mb-8 space-y-4'>
            {sidebarBottomMenu.map((item, idx) => (
                <div className='flex flex-row justify-center lg:justify-normal' key={idx}>
                    <div className='w-6 h-6 md:mr-2'>{item.icon}</div>
                    <Link href={item.path}><p className='text-lg hidden lg:block font-semibold'>{item.title}</p></Link>
                </div>
            ))}
        </div>

    </div>
  )
}

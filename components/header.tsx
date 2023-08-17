import React from 'react'
import { MagnifyingGlassCircleIcon, BellAlertIcon } from '@heroicons/react/24/outline'

export default function Header() {
  return (
    <div className="col-span-12 bg-white">

    {/* Search & User Details */}
    <div className='flex col-span-8 p-4 bg-whote shadow-sm'>
      <div className='w-2/3'>
        <div className='flex p-4 items-center '>
          <MagnifyingGlassCircleIcon className='w-10 h-10 text-gray-500' />
          <input className='w-full p-2 ml-2 bg-gray-100 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent' type='text' placeholder='Search' />
        </div>
        <div className='flex items-center'>
          <div className='ml-4 bg-yellow-400 rounded-full w-8 h-8 md:w-16 md:h-16'>
          </div>
          <div className='flex-col ml-4'>
            <p className='text-sm'>Hi there,</p>
            <p className='text-xl font-semibold'>Morgan Oakley (@morgan)</p>
          </div>
        </div>
      </div>
      <div className='w-1/3'>
        <div className='flex justify-around px-8 items-center'>
          <BellAlertIcon className='w-6 h-6 text-gray-800' />
          <div className='bg-yellow-400 rounded-full w-10 h-10'></div>
          <p>Morgan Oakley</p>
        </div>
        <div className='flex justify-between p-8'>
          <button className='bg-blue-500 px-4 py-2 rounded-full text-white font-semibold'>New</button>
          <button className='bg-blue-500 px-4 py-2 rounded-full text-white font-semibold'>Upload</button>
          <button className='bg-blue-500 px-4 py-2 rounded-full text-white font-semibold'>Share</button>
        </div>
      </div>
    </div>

  </div>
  )
}

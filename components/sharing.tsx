import React from 'react'
import { StarIcon, EyeIcon, ShareIcon } from '@heroicons/react/24/outline'

export default function Share() {
  return (
    <div className='flex justify-end p-8 space-x-4'>
        <StarIcon className='w-6 h-6 text-gray-700'/>
        <EyeIcon className='w-6 h-6 text-gray-700'/>
        <ShareIcon className='w-6 h-6 text-gray-700'/>
    </div>
  )
}

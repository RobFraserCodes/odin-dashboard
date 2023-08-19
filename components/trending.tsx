import React from 'react'
import Image from 'next/image'

interface Props {
    trend: {
        title: string;
        image: string;
        user: string;
    }
}

export default function Trending({trend: { title, image, user }}: Props) {
  return (
    <div className='flex items-center py-4'>
        <Image src={image} alt={title} width={80} height={80} className='rounded-full' />
        <div className='mx-8'>
            <h1 className='text-gray-600'>{user}</h1>
            <h1 className='text-sm text-gray-400'>{title}</h1>
        </div>
    </div>
  )
}

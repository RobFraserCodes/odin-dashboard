import React from 'react'
import Share from './sharing'

export default function Card({ project: { title, description } }) {
  return (
    <div className='col-span-2 md:col-span-1 bg-white pt-8 px-4 rounded-md shadow-sm border-l-8 border-yellow-400'>
        <h3 className='font-semibold'>{title}</h3>
        <p className='text-sm font-light'>{description}</p>
        <div>
            <Share />
        </div>
    </div>
  )
}

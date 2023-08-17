import React from 'react'

export default function Announcement({ announcement: { title, description }}) {
  return (
    <div>
        <h3 className='font-semibold'>{title}</h3>
        <p className='font-light text-sm'>{description}</p>
        <div className="w-full border-b my-4"></div>
    </div>
  )
}

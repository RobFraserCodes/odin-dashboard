import React from 'react'

export default function Header() {
  return (
    <div className="col-span-12 bg-white">

    {/* Search & User Details */}
    <div className='flex col-span-8 p-4 bg-whote shadow-sm'>
      <div className='w-2/3'>
        <p>search</p>
        <p>User Details</p>
      </div>
      <div className='w-1/3 bg-slate-600'>
        <div className=''>
          Notifications, icon, username
          Buttons
        </div>
      </div>
    </div>

  </div>
  )
}

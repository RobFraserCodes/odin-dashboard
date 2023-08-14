import Image from 'next/image'

export default function Home() {
  return (
    <main className='grid grid-cols-12 h-screen bg-blue-500'>
      
      {/* Sidebar */}
      <div className='col-span-3'>
        <div className='flex flex-col p-8'>
          <h1>Logo</h1>
          {/* Menu */}
          <p>Menu Items</p>
        </div>
      </div>
      
      {/* Main */}
      <div className='col-span-9 bg-slate-300'>
        {/* Header */}
        <div className='flex flex-col'>

        </div>

      </div>
    
    </main>
  )
}

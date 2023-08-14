import Image from 'next/image'

export default function Home() {
  return (
    <main className='grid grid-cols-12 h-screen bg-blue-500'>
      
      {/* Sidebar */}
      <div className='col-span-3'>
        <h1>Logo</h1>
        {/* Menu */}
        <p>Menu Items</p>
      </div>
      
      {/* Main */}
      <div className='col-span-9 bg-white'>
        {/* Header */}

      </div>
    
    </main>
  )
}

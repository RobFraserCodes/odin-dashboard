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
        <div className="grid gap-4">
          <div className="col-span-12 bg-white">
            header
          </div>

          {/* Projects */}
          <div className='col-span-8'>
            Projects
            <div className='grid grid-cols-2 gap-4'>
              <div className='col-span-1 bg-white'>
                card 1
              </div>
              <div className='col-span-1 bg-white'>
                card 2
              </div>
            </div>
          </div>

          {/* Announcements & Trending */}
          <div className='col-span-4'>
            <div className='flex flex-col'>
              Announcements
              <div className='bg-white'>
                Announcements
              </div>
              Trending
              <div className='bg-white'>
                Trending
              </div>
            </div>
          </div>

        </div>
        </div>

      {/* Footer */}
      <div className='bg-slate-500'>
        Footer
      </div>

      </div>
    
    </main>
  )
}

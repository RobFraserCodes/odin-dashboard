import Card from '@/components/card'
import Header from '@/components/header'
import Sidebar from '@/components/sidebar'
import { projects } from '@/data/projects'

export default function Home() {
  return (
    <main className='grid grid-cols-12 h-screen'>
      
      {/* Sidebar */}
      <div className='col-span-2 bg-blue-500'>
        <Sidebar />
      </div>
      
      {/* Main */}
      <div className='col-span-10 bg-slate-100'>
        
        {/* Header */}
        <div className='flex flex-col'>
        <div className="grid gap-4">
          <Header />

          {/* Projects */}
          <div className='col-span-8 p-8'>
            <h3 className='font-semibold mb-4'>Projects</h3>
            <div className='grid grid-cols-2 gap-4'>
              {projects.map((project) => (
                <Card key={project.id} project={project} />
              ))}
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

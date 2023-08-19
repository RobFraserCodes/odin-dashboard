import Announcement from '@/components/announcement'
import Card from '@/components/card'
import Header from '@/components/header'
import Sidebar from '@/components/sidebar'
import Trending from '@/components/trending'
import { announcements } from '@/data/announcements'
import { projects } from '@/data/projects'
import { trending } from '@/data/trending'
import Link from 'next/link'

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
          <div className='col-span-4 pt-8 pr-8 mb-4'>
            <div className='flex flex-col'>
              <h3 className='font-semibold mb-4'>Announcements</h3>
              <div className='bg-white p-8 rounded-md shadow-sm'>
                {announcements.map((announcement) => (
                  <Announcement key={announcement.id} announcement={announcement} />
                ))}

              </div>
              <h3 className='font-semibold my-4'>Trending</h3>
              <div className='bg-white p-8 rounded-md shadow-sm'>
                      {trending.map((trend) => (
                  <Trending key={trend.id} trend={trend} />
                ))}
              </div>
            </div>
          </div>

        </div>
        </div>

      {/* Footer */}
      <div className='text-center pb-4 text-gray-400 text-sm'>
        Copyright 2023. Built by <Link href="https://www.robfraser.dev"><span className='font-semibold'>Rob Fraser</span></Link> for <Link href="https://www.theodinproject.com"></Link><span className='font-semibold'>The Odin Project</span>.
      </div>

      </div>
    
    </main>
  )
}

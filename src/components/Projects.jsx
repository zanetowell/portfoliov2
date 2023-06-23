import React from 'react'
import Poke from '../assets/projects/pokelibrary.png'
import Waters from '../assets/projects/watersreviewed.png'
import Sandwich from '../assets/projects/sandwichio.png'
import Curate from '../assets/projects/curate.png'

const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-yellow-400'>Work</p>
          <p className='py-6'>// Check out some of my recent work</p>
        </div>
        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4'>
          {/* Grid Item */}
          <div style={{backgroundImage: `url(${Poke})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
              Poké Library
              </span>
              <div className='pt-8 text-center'>
                <a href='https://zanetowell.github.io/Poke-Library/'target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='https://github.com/zanetowell/Poke-Library' target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          <div style={{backgroundImage: `url(${Waters})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Waters: Reviewed
              </span>
              <div className='pt-8 text-center'>
                <a href='https://waters-reviewed.herokuapp.com/' target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='https://github.com/zanetowell/Waters-Reviewed' target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          <div style={{backgroundImage: `url(${Sandwich})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Sandwich.IO
              </span>
              <div className='pt-8 text-center'>
                <a href='https://sandwich-io.herokuapp.com/' target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='https://github.com/zanetowell/sandwich.io' target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          <div style={{backgroundImage: `url(${Curate})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Curate
              </span>
              <div className='pt-8 text-center'>
                <a href='https://curate-dev.netlify.app/' target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='https://github.com/zanetowell/Curate-Client' target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Projects
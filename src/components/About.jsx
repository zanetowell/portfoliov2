import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-yellow-400'>About</p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold '>
              <p>Hi. I'm Zane, nice to meet you. Take a look around and get to know me!</p>
            </div>
            <div>
              <p>I'm passionate about crafting things that make people smile. Whether it's software or coffee I pay close attention to detail and make sure it's just right. I create with my client at the forefront and make something tailored to their needs, ranging from individuals all the way up to large enterprise corporations. </p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default About
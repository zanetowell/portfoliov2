import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll'


const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#1a1a1a]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-yellow-400 text-3xl'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-white'>Zane Towell</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Developer</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a full-stack developer that is passionate about building effective and efficient digital experiences.</p>
        <div>
          <button className='group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#e9e9e9] hover:text-black duration-150 ease-in-out'>
          <Link to='projects' smooth={true}>View My Work</Link>
            <span className='group-hover:rotate-90 group-hover:translate-x-2 group-hover:-translate-y-1 duration-500 ease-in-out'>
            <HiArrowNarrowRight  className='ml-3'/>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
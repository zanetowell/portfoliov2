import HTML from '../assets/skills/html.png'
import CSS from '../assets/skills/css.png'
import JavaScript from '../assets/skills/javascript.png'
import Mongo from '../assets/skills/mongodb.png'
import Express from '../assets/skills/express.png'
import ReactImg from '../assets/skills/react.png'
import Node from '../assets/skills/node.png'
import Tailwind from '../assets/skills/tailwind.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#1a1a1a] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

        <div>
          <p className='text-4xl inline border-b-4 border-yellow-400 md:text-7xl pt-10'>Skills</p>
          <p className='py-4 md:text-2xl'>These are some of the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>

          <div className='bg-[#ccd6f6] rounded-md pt-4 shadow-md shadow-[#040c16] hover:bg-white hover:-translate-y-1 duration-300'>
            <img src={HTML} alt='html' className='w-16 md:w-20 mx-auto'/>
            <p className='my-4 text-[#0a192f] font-semibold text-xl'>HTML</p>
          </div>
          <div className='bg-[#ccd6f6] rounded-md pt-4 shadow-md shadow-[#040c16] hover:bg-white hover:-translate-y-1 duration-300'>
            <img src={CSS} alt='css' className='w-16 md:w-20 mx-auto'/>
            <p className='my-4 text-[#0a192f] font-semibold text-xl'>CSS</p>
          </div>
          <div className='bg-[#ccd6f6] rounded-md pt-4 shadow-md shadow-[#040c16] hover:bg-white hover:-translate-y-1 duration-300'>
            <img src={JavaScript} alt='javascript' className='w-16 md:w-20 mx-auto'/>
            <p className='my-4 text-[#0a192f] font-semibold text-xl'>JavaScript</p>
          </div>
          <div className='bg-[#ccd6f6] rounded-md pt-4 shadow-md shadow-[#040c16] hover:bg-white hover:-translate-y-1 duration-300'>
            <img src={Mongo} alt='mongodb' className='w-16 md:w-20 mx-auto'/>
            <p className='my-4 text-[#0a192f] font-semibold text-xl'>MongoDB</p>
          </div>
          <div className='bg-[#ccd6f6] rounded-md pt-4 shadow-md shadow-[#040c16] hover:bg-white hover:-translate-y-1 duration-300'>
            <img src={Express} alt='express' className='w-16 md:w-20 mx-auto'/>
            <p className='my-4 text-[#0a192f] font-semibold text-xl'>Express JS</p>
          </div>
          <div className='bg-[#ccd6f6] rounded-md pt-4 shadow-md shadow-[#040c16] hover:bg-white hover:-translate-y-1 duration-300'>
            <img src={ReactImg} alt='react' className='w-16 md:w-20 mx-auto'/>
            <p className='my-4 text-[#0a192f] font-semibold text-xl'>React</p>
          </div>
          <div className='bg-[#ccd6f6] rounded-md pt-4 shadow-md shadow-[#040c16] hover:bg-white hover:-translate-y-1 duration-300'>
            <img src={Node} alt='node' className='w-16 md:w-20 mx-auto'/>
            <p className='my-4 text-[#0a192f] font-semibold text-xl'>Node</p>
          </div>
          <div className='bg-[#ccd6f6] rounded-md pt-4 shadow-md shadow-[#040c16] hover:bg-white hover:-translate-y-1 duration-300'>
            <img src={Tailwind} alt='tailwind' className='w-16 md:w-20 mx-auto'/>
            <p className='my-4 text-[#0a192f] font-semibold text-xl'>Tailwind</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Skills
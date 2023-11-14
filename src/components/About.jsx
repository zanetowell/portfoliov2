import Pfp from '../assets/pfp.jpeg'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#1a1a1a] text-gray-300'>
      <div className='flex justify-center items-center w-full h-full max-w-[1000px] mx-auto'>
        <div className='flex flex-col flex-1 w-full gap-4 mx-2'>

          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-yellow-400'>About Me</p>
          </div>

          <div className='text-4xl font-bold'>
            <p>I'm Zane, nice to meet you. Take a look around and get to know me!</p>
          </div>

          <div>
            <p className='mb-10 text-2xl'>I'm passionate about crafting things that make people smile. Whether it's code or coffee I pay close attention to detail and make sure it's just right. To me, there's always room to improve and delve deeper into anything I do. I have 5+ years of experience in customer service along with management and leadership roles. </p>
            <span className='text-2xl text-yellow-300'>Send me a message so we can get to know each other!</span>
          </div>
        </div>

        <div className='flex-2'>
          <img src={Pfp} alt='pfp' className='hidden md:flex w-64 h-64 rounded-full mx-3 border-gray-300 border-4'/>
        </div>
      </div>
    </div>
  )
}

export default About
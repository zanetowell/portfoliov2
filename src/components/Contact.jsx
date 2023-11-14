import { FaGithub, FaLinkedin } from 'react-icons/fa'


const Contact = () => {
  return (
    <div>
    <div name='contact' className='w-full h-screen bg-[#1a1a1a] flex justify-center items-center p-4'>
      <form method='POST' action='https://getform.io/f/b3a472f1-431d-4f9e-b041-7e39f217922f' className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-5xl font-bold inline border-b-4 border-yellow-400 text-gray-300'>Contact</p>
          <p className='text-gray-300 text-xl py-4'>Submit the form below or email me so we can get to know each other - zanetowelldev@gmail.com</p>
        </div>
        <input className='bg-[#ccd6f6] p-2 rounded-sm' type='text' placeholder='Name' name='name' />
        <input className='bg-[#ccd6f6] my-4 p-2 rounded-sm' type='email' placeholder='Email' name='email' />
        <textarea className='bg-[#ccd6f6] p-2 rounded-sm' name='message' rows='10' placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-white hover:border-white hover:text-black px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
      </form>
    </div>
      <div className='w-full bg-[#1a1a1a] flex justify-center items-center p-4'>
        <a className='flex items-center w-full text-gray-300' href='https://www.linkedin.com/in/zane-towell/'>LinkedIn <FaLinkedin size={30} className='ml-4'/>
        </a>
        <a className='flex items-center justify-end w-full text-gray-300'
        href='https://github.com/zanetowell'>GitHub
        <FaGithub size={30} className='ml-4'/>
        </a>
      </div>
    </div>
  )
}

export default Contact
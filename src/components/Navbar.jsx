import React from 'react'
import { Link } from 'react-scroll'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';



function MyNav() {
  return (
    <div className='inline-flex justify-between w-screen'>
      <div className='ml-4 mt-4 mr-2'>
        <h1 className='text-4xl'>Zane Towell</h1>
      </div>
      <div className='flex mt-4 gap-3 mr-4'>
        <p className='cursor-pointer text-3xl'>Home</p>
        <p className='cursor-pointer text-3xl'>About</p>
        <p className='cursor-pointer text-3xl'>Skills</p>
        <p className='cursor-pointer text-3xl'>Projects</p>
        <p className='cursor-pointer text-3xl'>Contact</p>
      </div>
    </div>
  );
}


export default MyNav
import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

import { SiGmail } from "react-icons/si";
export default function Footer() {
  return (
    <div>
      <hr></hr>
      {/* <footer className='py-12  '>
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
            <div className='flex flex-col items-center justify-center'></div>
            <div className='flex space-x-4'>
                <FaGithub size={24} />
                <FaLinkedin size={24}/>
                <SiGmail size={24}/>
            </div>
            <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
                <p >Made with ❤️, by Sumati</p>
            </div>
        </div>
      </footer> */}
      <footer className='py-12 bg-gray-900 text-white'>
  <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
    <div className='flex flex-col  '>
      <div className='flex space-x-4 justify-center'>
        <FaGithub size={24} className="hover:text-blue-800"/>
        <FaLinkedin size={24} className="hover:text-blue-800" />
        <SiGmail size={24} className="hover:text-blue-800"/>
      </div>
    </div>
    
    <div className='flex justify-center items-center mt-2'>
      <p>Made with ❤️, <span style={{color:"dodgerblue" ,textDecoration: "underline"}}>by Sumati</span> </p>
    </div>
  </div>
</footer>

    </div>
  )
}

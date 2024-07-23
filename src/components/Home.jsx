import React from 'react'

import pic from "../../public/sumati_pic.jpeg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

import { SiGmail } from "react-icons/si";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";
import '../App.css';


export default function Home() {
  return (
    <>
   
    <div
    name="Home"
     className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 '>
        <div className='flex flex-col items-center  md:flex-row '>
        <div className=' md:w-1/2 mt-12 md:mt-48 space-y-2 order-2 md:order-1  md:items-start'>
        {/* <span className='text-xl'>Welcome In My Feed</span> */}
        <h1 className='text-4xl'>Hello! My name is </h1>
         <h1 className='heading'>Sumati</h1>
        <div className='flex space-x-1 text-2xl md:text-4xl '>

        {/* <h1>Hello! I am a</h1>  */}
        
       <ReactTyped
       style={{color: 'dodgerblue'}}
       className='text-Blue-700 font-bold'
          strings={[
            "i'm from Khagaria,Bihar",
            "I'm a Web Development Enthusiast",
             "Aspiring Software Engineer",
          ]}
          
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />

       
        {/* <span className='text-red-700 font-bold'>Developer</span> */}
        </div>
        <br></br>
        
       
    {/* social media-icons */}
    <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
           <div className='space-y-2'>
      <h1 className='font-bold text-center'>Available on</h1>
      <ul className='flex space-x-5'>
        <li>
          <a href="https://www.linkedin.com/in/sumati-0a31b7210/ " target='_blank'>
             <FaLinkedin className='text-4xl cursor-pointer '/></a>
         </li>
       <li>
        <a href="https://github.com/Sumati4" target='_blank'>
        <FaGithub className='text-4xl cursor-pointer '/>
        </a></li>
       <li>
       <a href="mailto:sumati3976@gmail.com" target="_blank" rel="noopener noreferrer">
        <SiGmail className='text-4xl cursor-pointer '/>
        </a>
        </li>
      </ul>
    </div>
    <div className=" space-y-2 md:text:start">
                <h1 className="font-bold text-center ">My Current Learning Focus</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-4xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiExpress className="text-4xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaReact className="text-4xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaNodeJs className="text-4xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </div>
              </div>
        </div>
        </div>
        <div className='md:w-1/2 md:ml-72 md:mt-20 mt-8 order-1'>
        <img src={pic} className=" rounded-full md:w-[450px] md:h-[450px]"alt=""></img>
        </div>
        </div>
     </div>
  
     <hr/>
     
    </>
  );
}

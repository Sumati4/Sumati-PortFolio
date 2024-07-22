import React from 'react'
import { MdEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import '../App.css';


export default function Contact() {
  return (
    <div>
      <h1 className='heading text-3xl font-bold mb-5 text-center '>CONTACT ME</h1>
      <div className='flex'>
      <div className='md:w-2/3 mt-10 md:mt-48'>
      <h1 className='ml-40 text-4xl text-gray-700 custom-font mb-6'>Let's Connect</h1>
      <p className='text-gray-600 ml-40 mt-2 '> Unlock New Innovation Together!</p>


      <div className='text-gray-700 ml-40 flex gap-1 mt-12'><CiLocationOn size={20} style={{color:"dodgerblue"}}/><span>Khagaria,Bihar(India)</span></div>
      <div className='text-gray-700 ml-40 flex gap-1 mb-12'><MdEmail size={20} style={{color:"dodgerblue"}}  /><span>sumati3976@gmail.com</span></div>
      </div>
      <div className='md:w-1/3 mt-12 md:mt-48'>
      <form action="">
        <div>
            <label className='block text-gray-700 font-bold mb-2'
            htmlFor="name"></label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight'
            id="name"
            type="text"
            placeholder="Name"></input>
             <label className='block text-gray-700 font-bold mb-2'
            htmlFor="email"></label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight'
            id="email"
            type="text"
            placeholder="email"></input>

        </div>
       
      </form>
      </div>
      </div>
    </div>
  )
}

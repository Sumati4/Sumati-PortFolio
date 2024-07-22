
import axios from "axios";
import React from 'react';
import { MdEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { IoIosSend } from "react-icons/io";
import '../App.css';
import { useForm } from "react-hook-form"
import toast, { Toaster } from 'react-hot-toast';
export default function Contact() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async(data) => {
    const userInfo={
     name:data.name,
     email:data.email,
     message:data.message
    }
  try{
    await axios.post("https://getform.io/f/bxojzvya",userInfo);
    toast.success("Your message has been send");
  }catch(error){
   toast.error("Something went wrong");
  }
  }
  return (
    <div
    name="Contact"
     className="min-h-screen  flex flex-col items-center justify-center py-12">
      <h1 className='heading text-3xl font-bold text-center mb-12'>CONTACT ME</h1>
      <div className='flex flex-col md:flex-row justify-center items-center w-full max-w-4xl'>
        <div className='md:w-1/3 p-6'>
          <h1 className='text-4xl text-gray-700 custom-font mb-6'>Let's Connect</h1>
          <p className='text-gray-600 mb-6'>Unlock New Innovation Together!</p>
          <div className='text-gray-700 flex items-center gap-2 mb-4'>
            <CiLocationOn size={24} style={{color: "dodgerblue"}}/>
            <span>Khagaria, Bihar (India)</span>
          </div>
          <div className='text-gray-700 flex items-center gap-2 mb-12'>
            <MdEmail size={24} style={{color: "dodgerblue"}}/>
            <span>sumati3976@gmail.com</span>
          </div>
        </div>
        <div className='md:w-2/3 p-6'>
          <form 
          onSubmit={handleSubmit(onSubmit)}
          // action="https://getform.io/f/bxojzvya"
          // method="POST" 
          className='bg-white shadow-lg p-8 rounded-xl'>
            <div className='flex flex-col'>
              <div className='flex flex-col mb-6'>
                <label className='block text-gray-700 mb-2' htmlFor="name">Full Name</label>
                <input 
                {...register("name",{required:true})}
                className='shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your Full Name"/>
               {errors.name && <span>This field is required</span>}
              </div>
              <div className='flex flex-col mb-6'>
                <label className='block text-gray-700 mb-2' htmlFor="email">Email</label>
                <input
                 {...register("email",{required:true})}
                className='shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your Email"/>
                   {errors.email && <span>This field is required</span>}
              </div>
             
              <div className='flex flex-col mb-6'>
                <label className='block text-gray-700 mb-2' htmlFor="message">Message</label>
                <textarea 
                
                {...register("message",{required:true})}
                className='shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id="message"
                  rows="4"
                  name="message"
                  placeholder="Enter your Query"/>
                   {errors.message && <span>This field is required</span>}
            
              </div>
              
              <button type="submit" className='bg-black text-white rounded-xl py-3 px-6 hover:bg-gray-800 duration-300 flex justify-center '>Send<IoIosSend className='text-2xl  ' /></button>
           
              
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

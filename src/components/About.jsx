import React from 'react'
import html from '../../public/html.png';
import css from '../../public/css.jpg';
import javascript from '../../public/javascript.png';
import node from '../../public/node.png';
import react from '../../public/reactjs.png';
import express from '../../public/express.png';
import mongodb from '../../public/mongodb.jpg';
import mysql from '../../public/Mysql.png';
import java from '../../public/java.png';
import git from '../../public/git.png';
import '../App.css';





const About = () => {
  return (
    <>
    <div
    name="About"
     className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 flex flex-col items-center  md:flex-row'>
      <div className='md:w-1/2 mt-12 md:mt-48'>
   
    
     <h1 className='heading  font-bold mb-5 text-center'>ABOUT ME </h1>
     <br></br>
     <p className='text-justify '>Hello, my name is Sumati. I am from Khagaria, Bihar. I completed my B.Tech in Computer Science and Engineering from Chandigarh Engineering College, Landran, with an aggregate CGPA of 8.06. </p>
     <br></br>
     <p className='text-justify '>I am a passionate web developer with a strong foundation in the MERN stack, driven by a commitment to continuous learning and growth in the field. Although I am a recent graduate, I have devoted significant time and effort to mastering the MERN stack, completing several projects that showcase my skills and abilities.</p>
      <br></br>
    <p className='text-justify'>My programming journey is built on a solid base, with proficiency in Java, which has enriched my understanding of various programming concepts and enabled me to quickly adapt to new technologies and frameworks. I thrive in environments where I can continually expand my skill set, and my ability to grasp new concepts swiftly allows me to hit the ground running and contribute effectively to any team.</p>
      <br></br>
    <p className='text-justify'>I am dedicated to delivering high-quality work and exceeding expectations. My passion for web development, combined with my strong technical foundation and eagerness to learn, empowers me to add value to any project I undertake. I am excited about the prospect of contributing my technical expertise to innovative projects and furthering my professional growth. </p>
    </div>
    <div className='md:w-1/2 mt-12 md:mt-48 md:ml-12'>
    <h1  className='heading  font-bold mb-5 text-center'>Skills </h1>
    <br></br>
     <div className='grid grid-cols-2 md:grid-cols-3 gap-5 text-center' >
       <div className='hover:scale-110 duration-200   flex flex-col items-center'><img src={html} className='w-[100px] h-[100px]' ></img>
       <h1>HTML</h1>
       
       </div>
       <div className='hover:scale-110 duration-200   flex flex-col items-center'><img src={css} className='w-[100px] h-[100px]' ></img>
       <h1>CSS</h1>
       </div>
       <div className='hover:scale-110 duration-200   flex flex-col items-center'><img src={javascript} className='w-[100px] h-[100px]' ></img>
       <h1>JAVASCRIT</h1>
       
       </div>
       <div className='hover:scale-110 duration-200   flex flex-col items-center'><img src={node} className='w-[100px] h-[100px]' ></img>
       <h1>NODE</h1>
       </div>
       <div className='hover:scale-110 duration-200   flex flex-col items-center'><img src={react} className='w-[100px] h-[100px]' ></img>
       <h1>REACT</h1>
       </div>
       <div className='hover:scale-110 duration-200   flex flex-col items-center'><img src={express} className='w-[100px] h-[100px]' ></img>
       <h1>EXPRESS</h1>
       
       </div>
       <div className='hover:scale-110 duration-200   flex flex-col items-center'><img src={mongodb} className='w-[100px] h-[100px]' ></img>
       <h1>MONGODB</h1>
       </div>
       <div className='hover:scale-110 duration-200   flex flex-col items-center'><img src={mysql} className='w-[100px] h-[100px]' ></img>
       <h1>MYSQL</h1>
       </div>
       <div className='hover:scale-110 duration-200   flex flex-col items-center'><img src={java} className='w-[100px] h-[100px]' ></img>
       <h1>JAVA</h1>
       
       </div>
       <div className='hover:scale-110 duration-200   flex flex-col items-center'><img src={git} className='w-[100px] h-[100px]' ></img>
       <h1>GIT</h1>
       
       </div>
     </div>
    </div>
     
    </div>
<hr></hr>
    </>
  )
}

export default About


// import React from 'react'
// import amazonclone from '../../public/amazonclone.png';
// import wanderlust from '../../public/wanderlust.png';
// import portfolio from '../../public/portfolio.png';
// import weather from '../../public/weather-app.png';
// import '../App.css';
// import { FaGithub } from "react-icons/fa6";
// import { FaEye } from "react-icons/fa";

// import { SiMongodb } from "react-icons/si";
// import { SiExpress } from "react-icons/si";
// import { FaReact } from "react-icons/fa";
// import { FaNodeJs } from "react-icons/fa6";
// import { SiCss3 } from "react-icons/si";
// import { FaHtml5 } from "react-icons/fa";
// import { RiTailwindCssFill } from "react-icons/ri";
// import { FaBootstrap } from "react-icons/fa";


// export default function Projects() {
//     // const PROJECTS=[
//     //     {
//     //         title:"Property rental platform",
//     //         image:project1,
//     //         descripion:"Developed a web application for property rentals using Express.js, MongoDB, Mongoose, EJS, and Passport.js. Enabled users to list properties, book accommodations, and leave reviews. Implemented user authentication, session management, and CRUD operations for listings and reviews, enhancing trust and transparency in the booking process. ",
//     //         technologies:["Node.js,Express.js,MongoDB,EJS"],
//     //         link:"https://property-rental-platform.onrender.com/listings",
//     //         Git:"https://github.com/Sumati4/Property__Rental_platform",

//     //     },
      
//     //     {
//     //         title:"Weather-app",
//     //         image:project3,
//     //         descripion:" Weather App provides real-time weather updates by fetching data from a weather API. It features a clean and interactive interface to display current weather conditions, forecasts, and location-based information using React ." ,
//     //         technologies:["React"],
//     //         link:"https://weather-app-ry73.onrender.com/",
//     //         Git:"https://github.com/Sumati4/Weather-App",

//     //     },
//     //     {
//     //       title:"PortFolio website",
//     //       image:project2,
//     //       descripion:"Developed a personal portfolio website to showcase my skills, projects, and experience using React and Tailwind CSS. The site features a clean, responsive design and includes sections such as Home,About,Projects, and Contact." ,
//     //       technologies:["React,Tailwind"],
//     //       link:"",
//     //       Git:"",

//     //   },
//     //     {
//     //         title:"Amazon-clone",
//     //         image:project4,
//     //         descripion:"Developed a personal portfolio website to showcase my skills, projects, and experience using React and Tailwind CSS. The site features a clean, responsive design and includes sections such as Home,About,Projects, and Contact." ,
//     //         technologies:["HTML,CSS"],
//     //         link:"https://sumati4.github.io/Amazon-Clone/",
//     //         Git:"https://github.com/Sumati4/Amazon-Clone",

//     //     },
//     // ]
//   return (
//     <div className=' max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
//       <h1 className='heading text-center text-3xl font-bold mt-40'>Projects</h1>
//        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 text-center m-16 '>
//         <div className='w-full and h-auto p-4 shadow-md'>
//         <h1 style={{ color: 'dodgerblue' }} className='text-xl m-2'>Property rental platform</h1>
//           <img src={wanderlust}></img>
//         <ul className='flex space-x-5 justify-center'>
//        <li>
//         <a href="https://github.com/Sumati4/Property__Rental_platform" target='_blank' rel='noopener noreferrer'>
//         <FaGithub className='text-2xl cursor-pointer mt-2  text-gray-600 hover:text-gray-800 transition ' title="Source Code"/>
        
//         </a></li>
//        <li>
//        <a href="https://property-rental-platform.onrender.com/listings" target="_blank" rel='noopener noreferrer'>
//         <FaEye className='text-2xl cursor-pointer mt-2  text-gray-600 hover:text-gray-800 transition '
//         title="view"/>

//         </a>
//         </li>
//       </ul>
        
        
//              <span><h1 className='text-gray-700'>Tech Stack</h1></span>
//                 <div className="flex justify-center space-x-5 mt-1">

//                   <SiMongodb className="text-4xl md:text-3xl hover:scale-110 duration-200  text-gray-800 hover:text-gray-800 rounded-full border-[2px] cursor-pointer" 
//                   title="MongoDb"/>
//                   <SiExpress className="text-4xl md:text-3xl hover:scale-110 duration-200  text-gray-800 hover:text-gray-800 rounded-full border-[2px] cursor-pointer" 
//                    title="Express.js"/>
//                   <FaNodeJs className="text-4xl md:text-3xl hover:scale-110 duration-200  text-gray-800 hover:text-gray-800 rounded-full border-[2px] cursor-pointer" 
//                    title="Node.js"/>
//                    <FaBootstrap className="text-4xl md:text-3xl hover:scale-110 duration-200  text-gray-800 hover:text-gray-800 rounded-full border-[2px] cursor-pointer" 
//                    title="BootStrap"/>
//                 </div> 
//           </div>
      
//         <div className='w-full and h-auto p-4 shadow-md'>
//         <h1 style={{ color: 'dodgerblue' }} className='text-xl m-2'>Weather App</h1>
//           <img src={weather}></img>
//           <ul className='flex space-x-5 justify-center'>
//        <li>
//         <a href="https://github.com/Sumati4/Weather-App" target='_blank' rel='noopener noreferrer'>
//         <FaGithub className='text-2xl cursor-pointer mt-2  text-gray-600 hover:text-gray-800 transition ' title="Source Code"/>
        
//         </a></li>
//        <li>
//        <a href="https://weather-app-ry73.onrender.com/" target="_blank" rel='noopener noreferrer'>
//         <FaEye className='text-2xl cursor-pointer mt-2  text-gray-600 hover:text-gray-800 transition '
//         title="view"/>

//         </a>
//         </li>
//       </ul>  
//       <span><h1 className='text-gray-700'>Tech Stack</h1></span>
//                 <div className="flex justify-center space-x-5 mt-1">

//                   <FaReact className="text-4xl md:text-3xl hover:scale-110 duration-200  text-gray-800 hover:text-gray-800 rounded-full border-[2px] cursor-pointer" 
//                   title="React"/>
//                   <SiCss3  className="text-4xl md:text-3xl hover:scale-110 duration-200  text-gray-800 hover:text-gray-800 rounded-full border-[2px] cursor-pointer" 
//                    title="css"/>
                 
//                 </div>     
//        </div>
//        <div className='w-full and h-auto p-4 shadow-md'>
//         <h1 style={{ color: 'dodgerblue' }} className='text-xl m-2'>Portfolio</h1>
//           <img src={portfolio}></img>
//           <ul className='flex space-x-5 justify-center'>
//        <li>
//         <a href="" target='_blank' rel='noopener noreferrer'>
//         <FaGithub className='text-2xl cursor-pointer mt-2  text-gray-600 hover:text-gray-800 transition ' title="Source Code"/>
        
//         </a></li>
//        <li>
//        <a href="" target="_blank" rel='noopener noreferrer'>
//         <FaEye className='text-2xl cursor-pointer mt-2  text-gray-600 hover:text-gray-800 transition '
//         title="view"/>

//         </a></li>
//       </ul>  
//       <span><h1 className='text-gray-700'>Tech Stack</h1></span>
//                 <div className="flex justify-center space-x-5 mt-1">

//                   <FaReact className="text-4xl md:text-3xl hover:scale-110 duration-200  text-gray-900 hover:text-gray-800 rounded-full border-[2px] cursor-pointer" 
//                   title="React"/>
//                   < RiTailwindCssFill className="text-4xl md:text-3xl hover:scale-110 duration-200  text-gray-800 hover:text-gray-800 rounded-full border-[2px] cursor-pointer" 
//                    title="Tailwind"/>
                 
//                 </div> 
//        </div>
            
//         <div className='w-full and h-auto p-4 shadow-md'>
//         <h1 style={{ color: 'dodgerblue' }} className='text-xl m-2'>Amazon Clone</h1>
//           <img src={amazonclone}></img>
//           <ul className='flex space-x-5 justify-center'>
//        <li>
//         <a href="https://github.com/Sumati4/Amazon-Clone" target='_blank' rel='noopener noreferrer'>
//         <FaGithub className='text-2xl cursor-pointer mt-2  text-gray-600 hover:text-gray-800 transition ' title="Source Code"/>
        
//         </a></li>
//        <li>
//        <a href="https://sumati4.github.io/Amazon-Clone/" target="_blank" rel='noopener noreferrer'>
//         <FaEye className='text-2xl cursor-pointer mt-2  text-gray-600 hover:text-gray-800 transition '
//         title="view"/>

//         </a></li>
//       </ul>  
//       <span><h1 className='text-gray-700'>Tech Stack</h1></span>
//                 <div className="flex justify-center space-x-5 mt-1">

//                   <FaHtml5 className="text-4xl md:text-3xl hover:scale-110 duration-200  text-gray-800 hover:text-gray-800 rounded-full border-[2px] cursor-pointer" 
//                   title="HTML"/>
//                   <SiCss3 className="text-4xl md:text-3xl hover:scale-110 duration-200  text-gray-800 hover:text-gray-800 rounded-full border-[2px] cursor-pointer" 
//                    title="CSS"/>
                 
//                 </div> 
//           </div>
//        </div>
//     </div>
//   )
// }
import React from 'react';
import amazonclone from '../../public/amazonclone.png';
import wanderlust from '../../public/wanderlust.png';
import portfolio from '../../public/portfolio.png';
import weather from '../../public/weather-app.png';
import '../App.css';
import { FaGithub, FaEye, FaReact, FaHtml5 } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiCss3 } from 'react-icons/si';
import { RiTailwindCssFill } from 'react-icons/ri';
import { FaNodeJs } from 'react-icons/fa6';
import { FaBootstrap } from 'react-icons/fa';

const projects = [
  {
    title: "Property rental platform",
    image: wanderlust,
    technologies: [<SiMongodb title="MongoDB" />, <SiExpress title="Express.js" />, <FaNodeJs title="Node.js" />, <FaBootstrap title="Bootstrap" />],
    link: "https://property-rental-platform.onrender.com/listings",
    git: "https://github.com/Sumati4/Property__Rental_platform",
  },
  {
    title: "Weather App",
    image: weather,
    technologies: [<FaReact title="React" />, <SiCss3 title="CSS" />],
    link: "https://weather-app-ry73.onrender.com/",
    git: "https://github.com/Sumati4/Weather-App",
  },
  {
    title: "Portfolio",
    image: portfolio,
    technologies: [<FaReact title="React" />, <RiTailwindCssFill title="Tailwind" />],
    link: "#",
    git: "",
  },
  {
    title: "Amazon Clone",
    image: amazonclone,
    technologies: [<FaHtml5 title="HTML" />, <SiCss3 title="CSS" />],
    link: "https://sumati4.github.io/Amazon-Clone/",
    git: "https://github.com/Sumati4/Amazon-Clone",
  },
];

const ProjectCard = ({ title, image, technologies, link, git }) => (
  <div className='w-full h-auto p-4 shadow-md  hover:scale-105 duration-100 bg-white'>
    <h1 className='text-xl m-2' style={{ color: 'dodgerblue' }}>{title}</h1>
    <img src={image} alt={title} />
    <ul className='flex space-x-5 justify-center mt-2'>
      <li>
        <a href={git} target='_blank' rel='noopener noreferrer'>
          <FaGithub className='text-2xl cursor-pointer text-gray-600 hover:text-gray-800 transition' title="Source Code" />
        </a>
      </li>
      <li>
        <a href={link} target='_blank' rel='noopener noreferrer'>
          <FaEye className='text-2xl cursor-pointer text-gray-600 hover:text-gray-800 transition' title="View" />
        </a>
      </li>
    </ul>
    <span><h1 className='text-gray-700'>Tech Stack</h1></span>
    <div className="flex justify-center space-x-5 mt-1">
      {technologies.map((tech, index) => (
        <div key={index} className="text-4xl md:text-3xl hover:scale-110 duration-200 text-gray-800 hover:text-gray-800 rounded-full border-[2px] cursor-pointer">
          {tech}
        </div>
      ))}
    </div>
  </div>
);

const Projects = () => (
  <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
    <h1 className='heading text-center text-3xl font-bold mt-40'>Projects</h1>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 text-center m-16'>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
     
    </div>
    <div className=' flex gap-1 text-center semi-circular-border mb-6 '>
     <a href="https://github.com/Sumati4" target="_blank" rel='noopener noreferrer'style={{ color: 'dodgerblue' }}
      >
      see more 
      </a>
      <FaGithub className='text-2xl cursor-pointer text-gray-600 hover:text-gray-800 transition' title="View" />
  

     </div>
     <hr></hr>
  </div>
);

export default Projects;

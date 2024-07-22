
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
  <div 
  name="Projects" className='w-full h-auto p-4 shadow-md  hover:scale-105 duration-100 bg-white flex flex-col justify-center text-center'>
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
    <div className=' flex gap-1 text-center  semi-circular-border mb-6 '>
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

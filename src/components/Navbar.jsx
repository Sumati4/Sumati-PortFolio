// import React,{useState} from 'react'

// import pic from "../../public/sumati_pic.jpeg";
// import { AiOutlineMenu } from 'react-icons/ai';
// import { ImCross } from "react-icons/im";
// import {Link} from "react-scroll";
// function Navbar()  {
//     const [menu,setMenu]= useState(false);
//     const navItems = [
//         {
//           id: 1,
//           text: "Home",
//         },
//         {
//           id: 2,
//           text: "About",
//         },
//         {
//           id: 3,
//           text: "Projects",
//         },
       
//         {
//           id: 4,
//           text: "Contact",
//         },
//       ];
//   return (
//     <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 bg-white">
//         <div className="flex justify-between items-center h-16">
//        <div className="flex space-x-2">
//       <img src={pic} className="h-12 w-12 rounded-full" alt=""/>
//         <h1 className="font-semibold text-2xl mt-2 cursor-pointer">Sumati<span></span>
//         <p className="text-sm"></p></h1>
//       </div>
//       <div >
//         <ul className='hidden md:flex space-x-8'>
           
//             {navItems.map(({ id, text }) => (
//               <li key={id} className="hover:scale-105 duration-200 cursor-pointer">
//                 <Link to={text}
//                 smooth={true}>{text}
//                 duration={500}
//                 offset={-70}
//                 activeClass="active"</Link>
//                 </li> 
//             ))}
//         </ul>
//         <div onClick={()=>setMenu(!menu)} className='md:hidden '>
//             {menu? <ImCross size={24} />: <AiOutlineMenu size={24} />}</div>
        
   
//         </div>
//       </div>
//    {menu && (
//       <div>
//       <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl'>
//       {navItems.map(({ id, text }) => (
//               <li key={id} className='hover:scale-105 duration-200 font-semibold cursor-pointer' >{text}</li> 
//             ))}
//         </ul>
//       </div>
//       )}
//     </div>
//   )
// }

// export default Navbar



import React, { useState } from 'react';
import pic from '../../public/sumati_pic.jpeg';
import { AiOutlineMenu } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';
import { Link } from 'react-scroll';

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: 'Home',
    },
    {
      id: 2,
      text: 'About',
    },
    {
      id: 3,
      text: 'Projects',
    },
    {
      id: 4,
      text: 'Contact',
    },
  ];

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 bg-white">
      <div className="flex justify-between items-center h-16">
        <div className="flex space-x-2">
          <img src={pic} className="h-12 w-12 rounded-full" alt="Profile picture" />
          <h1 className="font-semibold text-2xl mt-2 cursor-pointer">
            Sumati<span></span>
            <p className="text-sm"></p>
          </h1>
        </div>
        <div>
          <ul className="hidden md:flex space-x-8">
            {navItems.map(({ id, text }) => (
              <li key={id} className="hover:scale-105 duration-200 cursor-pointer">
                <Link
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
          <div onClick={() => setMenu(!menu)} className="md:hidden">
            {menu ? <ImCross size={24} /> : <AiOutlineMenu size={24} />}
          </div>
        </div>
      </div>
      {menu && (
        <div className="md:hidden flex flex-col items-center justify-center h-screen space-y-8 bg-white  text-xl">
          <ul>
            {navItems.map(({ id, text }) => (
              <li key={id} className="hover:scale-105 duration-200 font-semibold cursor-pointer">
                <Link
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass='active'
                  onClick={() => setMenu(false)}
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;

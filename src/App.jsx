import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import toast, { Toaster } from 'react-hot-toast';
export default function App() {
  return (
    <div>
     <div>
  <Navbar/>
 <Home/>
 <About/>
 <Projects/>
 <Contact/>
 <Footer/>
 </div>
 <div>
 <Toaster />
 </div>
 
    </div>
  )
}



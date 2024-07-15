import React from 'react'
import Intro from './Intro.js'
import About from './About.js'
import Experiences from './Experience.js'
import Project from './Project.js'
import Contact from './Contact.js'
import Footer from './Footer.js'
import LeftSider from './LeftSider.js'

const Homepage = () => {
  return (
    <div className='px-40 sm:px-5 py-5'>
      <Intro/>
      <About />
      <Experiences />
      <Project />
      <Contact/>
      <Footer />
      <LeftSider/>
    </div>
  )
}

export default Homepage
import React from 'react'
import Navbar from './Navbar'
import Landing from './Landing'
import About from './About'
import Course from './Course'
import Fotter from './Fotter'
import Counter from './Counter'
import GetInTouch from './GetInTouch'
import Facilities from './Facilities'
import Enquery from './Enquery'
import Gallery from './Gallery'
import Testemonial from './Testemonial'
import GetAddmission from './GetAddmission'
function Home() {
  return (
   <>
   <Navbar/>
  <Landing/>
  <About/>
  <Course/>
  <GetInTouch/>
  <Facilities/>
  <Counter/>
  <Enquery/>
  <Gallery/>
  <Testemonial/>
  <GetAddmission/>
  <Fotter/>
   </>
  )
}

export default Home
import React from 'react'
import Hero from '../components/Hero/Hero'
import About from "../components/About/About"
import Services from "../components/Services/Services"
import MyWork from '../components/My Work/MyWork'
import Contact from "../components/Contact/Contact"

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <MyWork />
      <Contact/>
    </>
  )
}

export default Home

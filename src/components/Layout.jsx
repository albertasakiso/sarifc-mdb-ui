import React from 'react'
import Home from '../pages/Home'
import Carousel from './Carousel'
import Footer from './Footer'
import NavBar from './NavBar'

function Layout() {
  return (
    <>
      <NavBar />

      <Carousel />

      <Home />

      <Footer />
    </>
  )
}

export default Layout

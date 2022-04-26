import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import image from '../assets/pictures/sector0.png'

import { MDBInput, MDBCheckbox, MDBBtn } from 'mdb-react-ui-kit'
import MissionVisionValues from './cards/MissionVisionValues'
import DivisionThreeCard from './cards/DivisionThreeCard'

function ContactUs() {
  return (
    <>
      <NavBar />
      <DivisionThreeCard />
      <MissionVisionValues />
      <Footer />
    </>
  )
}

export default ContactUs

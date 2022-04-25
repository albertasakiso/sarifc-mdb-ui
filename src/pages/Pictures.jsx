import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

//gallery pictures

import gallery1 from '../assets/pictures/IMG_20211228_154707_633.jpg'
import gallery2 from '../assets/pictures/ramadam_karim1.jpg'
import gallery3 from '../assets/pictures/IMG_20220105_174136_857.jpg'
import gallery4 from '../assets/pictures//teampictures/corevaluesinceo1.jpg'
import gallery5 from '../assets/pictures/IMG_20211231_163205_747.jpg'
import gallery6 from '../assets/pictures/happy_easter.jpg'

function Pictures() {
  return (
    <>
      <NavBar />
      <hr />
      <div className='container-fluid mt-0'>
        <div className='d-flex justify-content-center mb-1'>Gallery</div>
        <div className='row mx-1 me-1'>
          <figure className='col'>
            <a href='#' data-size='1600x1067'>
              <img alt='picture' src={gallery1} className='img-fluid' />
            </a>
          </figure>
          <figure className='col'>
            <a href='#' data-size='1600x1067'>
              <img alt='picture' src={gallery2} className='img-fluid' />
            </a>
          </figure>
          <figure className='col'>
            <a href='#' data-size='1600x1067'>
              <img alt='picture' src={gallery3} className='img-fluid' />
            </a>
          </figure>
        </div>
        <div className='row mx-1 me-1'>
          <figure className='col'>
            <a href='#' data-size='1600x1067'>
              <img alt='picture' src={gallery4} className='img-fluid' />
            </a>
          </figure>
          <figure className='col'>
            <a href='#' data-size='1600x1067'>
              <img alt='picture' src={gallery5} className='img-fluid' />
            </a>
          </figure>
          <figure className='col'>
            <a href='#' data-size='1600x1067'>
              <img alt='picture' src={gallery6} className='img-fluid' />
            </a>
          </figure>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Pictures

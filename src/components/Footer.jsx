import React from 'react'
import { MDBFooter } from 'mdb-react-ui-kit'

//sponsors images/logos

import logo1 from '../assets/icons/add21.jpg'

import logo2 from '../assets/icons/asakiso_logo.jpg'

import logo3 from '../assets/icons/BernardBerBitbrand.jpg'

import logo4 from '../assets/icons/grandmaster_logo.jpg'

function Footer() {
  return (
    <MDBFooter
      bgColor='light'
      className='sticky text-center text-lg-start text-primary '
    >
      <section className='mt-5 mb-1 py-1'>
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <i className='fas fa-gem me-3'></i>sari football club
              </h6>
              <p>
                Join us today by following and sharing our brand on social media
                and visiting our training and matchday matches at the S.A.R.I
                Park in Nyankpala.
              </p>
            </div>

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Latests</h6>
              <p>
                <a href='/' className='text-reset'>
                  Latest News
                </a>
              </p>
              <p>
                <a href='/' className='text-reset'>
                  Results/Fixtures
                </a>
              </p>
              <p>
                <a href='/' className='text-reset'>
                  Pictures
                </a>
              </p>
              <p>
                <a href='/' className='text-reset'>
                  Videos
                </a>
              </p>
            </div>

            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Our Club</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Players
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Our Club
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  History
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  League Table
                </a>
              </p>
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <i className='fas fa-home me-3'></i> Nyankpala, NL-1030-6932,
                Ghana
              </p>
              <p>
                <i className='fas fa-envelope me-3'></i>
                sarifc.gh@gmail.com
              </p>
              <p>
                <i className='fas fa-phone me-3'></i> + 233 24 690 4618
              </p>
              <p>
                <i className='fas fa-print me-3'></i> + 233 (0) 453 2502
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className='d-flex justify-content-center text-align-center p-1 bg-light '>
        {/* <img src={logo2} alt='asakisologo' height={100} /> */}
        <img src={logo3} alt='asakisologo' height={120} />
        <img src={logo4} alt='asakisologo' height={120} />
      </div>

      <div
        className='text-center p-4'
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
      >
        © 2022 Copyright:
        <a className='text-reset fw-bold' href='https://sarifc.com/'>
          {' '}
          sarifc.com
        </a>
      </div>
    </MDBFooter>
  )
}

export default Footer

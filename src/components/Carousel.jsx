import React from 'react'
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from 'mdb-react-ui-kit'

import slider1 from '../assets/cover/sector.jpg'

import slider2 from '../assets/cover/sarifcsittinglarge.jpg'

import slider3 from '../assets/cover/ambaimgcoach.jpg'

function Carousel() {
  return (
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselInner>
        <MDBCarouselItem className='active'>
          <MDBCarouselElement src={slider1} alt='slider1 image' />
          <MDBCarouselCaption>
            <p className='btn btn-success'>
              PICTURES OF SARI FC HALFTIME TEAM TALK VS ARROW HEAD
            </p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem>
          <MDBCarouselElement src={slider2} alt='slider2 image' />
          <MDBCarouselCaption>
            <p className='btn btn-success'>
              PICTURES OF SARI FC HALFTIME TEAM TALK VS ARROW HEAD
            </p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem>
          <MDBCarouselElement src={slider3} alt='slider3 image' />
          <MDBCarouselCaption>
            <p className='btn btn-success'>
              PICTURES OF SARI FC HALFTIME TEAM TALK VS ARROW HEAD
            </p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  )
}

export default Carousel

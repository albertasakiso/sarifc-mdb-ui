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
            <h5 className='fs-3'>First slide label</h5>
            <p className='btn btn-success'>
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem>
          <MDBCarouselElement src={slider2} alt='slider2 image' />
          <MDBCarouselCaption>
            <h5 className='fs-3'>Second slide label</h5>
            <p className='btn btn-success'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem>
          <MDBCarouselElement src={slider3} alt='slider3 image' />
          <MDBCarouselCaption>
            <h5 className='fs-3'>Third slide label</h5>
            <p className='btn btn-success'>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  )
}

export default Carousel

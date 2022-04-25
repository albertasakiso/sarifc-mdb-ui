import React from 'react'
import { Link } from 'react-router-dom'
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
} from 'mdb-react-ui-kit'
import { useQuery, gql } from '@apollo/client'

import newscard1 from '../assets/pictures/individual/red_Ambassador.jpg'
import newscard2 from '../assets/pictures/teampictures/match2.jpg'
import newscard3 from '../assets/pictures/teampictures/team4.jpg'
import newscard4 from '../assets/pictures/teampictures/team10.jpg'
import FixtureCard from './cards/FixtureCard'

//gallery pictures

import gallery1 from '../assets/pictures/IMG_20211228_154707_633.jpg'
import gallery2 from '../assets/pictures/ramadam_karim1.jpg'
import gallery3 from '../assets/pictures/IMG_20220105_174136_857.jpg'
import gallery4 from '../assets/pictures//teampictures/corevaluesinceo1.jpg'
import gallery5 from '../assets/pictures/IMG_20211231_163205_747.jpg'
import gallery6 from '../assets/pictures/happy_easter.jpg'

// import FixtureCard from './cards/FixtureCard'

const GET_FAKEPLAYERS = gql`
  query getfakeplayers {
    fakeplayers {
      data {
        id
        attributes {
          number
          position
          name
          contractstart
          contractend
          biography
          fakeplayerimage {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`

function Home() {
  // const { loading, error, data } = useQuery(GET_FAKEPLAYERS)

  // if (loading) return <p>Loading page....</p>
  // if (error) return `Error! ${error.message}`
  // console.log(data)

  return (
    <>
      <MDBCarousel>
        <MDBCarouselInner>
          <MDBCarouselItem className='active'>
            <FixtureCard />
          </MDBCarouselItem>
          <MDBCarouselItem>
            <MDBCarouselElement /> <FixtureCard />
          </MDBCarouselItem>
          <MDBCarouselItem>
            <MDBCarouselElement /> <FixtureCard />
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>

      <>
        <div className='d-flex justify-content-center'>
          <main className='mt-1'>
            <h1 className='lead fw-bolder d-flex justify-content-center'>
              LATEST NEWS
            </h1>
            <hr className=' my-0 mb-1' />
            <div className='container'>
              <MDBRow className='row-cols-1 row-cols-md-3 g-4 text-dark'>
                <MDBCol>
                  <MDBCard className='h-100'>
                    <MDBCardImage src={newscard4} alt='...' position='top' />
                    <MDBCardBody>
                      <MDBCardTitle>Card title</MDBCardTitle>
                      <MDBCardText>
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </MDBCardText>

                      <MDBBtn
                        outline
                        rounded
                        className='d-flex justify-content-start'
                      >
                        Read More
                      </MDBBtn>

                      <span className='d-flex justify-content-end'>
                        <MDBBtn
                          tag='a'
                          color='none'
                          className='m-1'
                          style={{ color: '#3b5998' }}
                        >
                          <MDBIcon fab icon='facebook-f' size='lg' />
                        </MDBBtn>
                        <MDBBtn
                          tag='a'
                          color='none'
                          className='m-1'
                          style={{ color: '#55acee' }}
                        >
                          <MDBIcon fab icon='twitter' size='lg' />
                        </MDBBtn>
                        <MDBBtn
                          tag='a'
                          color='none'
                          className='m-1'
                          style={{ color: '#dd4b39' }}
                        >
                          <MDBIcon fab icon='google' size='lg' />
                        </MDBBtn>
                        <MDBBtn
                          tag='a'
                          color='none'
                          className='m-1'
                          style={{ color: '#ac2bac' }}
                        >
                          <MDBIcon fab icon='instagram' size='lg' />
                        </MDBBtn>
                      </span>
                    </MDBCardBody>
                    <MDBCardFooter>
                      <small className='text-muted'>
                        Last updated 3 mins ago
                      </small>
                    </MDBCardFooter>
                  </MDBCard>
                </MDBCol>
                <MDBCol>
                  <MDBCard className='h-100'>
                    <MDBCardImage src={newscard1} alt='...' position='top' />
                    <MDBCardBody>
                      <MDBCardTitle>Card title</MDBCardTitle>
                      <MDBCardText>
                        This card has supporting text below as a natural lead-in
                        to additional content.
                      </MDBCardText>
                      <MDBBtn
                        outline
                        rounded
                        className='d-flex justify-content-start'
                      >
                        Read More
                      </MDBBtn>

                      <span className='d-flex justify-content-end'>
                        <MDBBtn
                          tag='a'
                          color='none'
                          className='m-1'
                          style={{ color: '#3b5998' }}
                        >
                          <MDBIcon fab icon='facebook-f' size='lg' />
                        </MDBBtn>
                        <MDBBtn
                          tag='a'
                          color='none'
                          className='m-1'
                          style={{ color: '#55acee' }}
                        >
                          <MDBIcon fab icon='twitter' size='lg' />
                        </MDBBtn>
                        <MDBBtn
                          tag='a'
                          color='none'
                          className='m-1'
                          style={{ color: '#dd4b39' }}
                        >
                          <MDBIcon fab icon='google' size='lg' />
                        </MDBBtn>
                        <MDBBtn
                          tag='a'
                          color='none'
                          className='m-1'
                          style={{ color: '#ac2bac' }}
                        >
                          <MDBIcon fab icon='instagram' size='lg' />
                        </MDBBtn>
                      </span>
                    </MDBCardBody>

                    <MDBCardFooter>
                      <small className='text-muted'>
                        Last updated 3 mins ago
                      </small>
                    </MDBCardFooter>
                  </MDBCard>
                </MDBCol>
                <MDBCol>
                  <MDBCard className='h-100'>
                    <MDBCardImage src={newscard3} alt='...' position='top' />
                    <MDBCardBody>
                      <MDBCardTitle>Card title</MDBCardTitle>
                      <MDBCardText>
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This card has
                        even longer content than the first to show that equal
                        height action.
                      </MDBCardText>
                      <MDBBtn
                        outline
                        rounded
                        className='d-flex justify-content-start'
                      >
                        Read More
                      </MDBBtn>

                      <span className='d-flex justify-content-end'>
                        <MDBBtn
                          tag='a'
                          color='none'
                          className='m-1'
                          style={{ color: '#3b5998' }}
                        >
                          <MDBIcon fab icon='facebook-f' size='lg' />
                        </MDBBtn>
                        <MDBBtn
                          tag='a'
                          color='none'
                          className='m-1'
                          style={{ color: '#55acee' }}
                        >
                          <MDBIcon fab icon='twitter' size='lg' />
                        </MDBBtn>
                        <MDBBtn
                          tag='a'
                          color='none'
                          className='m-1'
                          style={{ color: '#dd4b39' }}
                        >
                          <MDBIcon fab icon='google' size='lg' />
                        </MDBBtn>
                        <MDBBtn
                          tag='a'
                          color='none'
                          className='m-1'
                          style={{ color: '#ac2bac' }}
                        >
                          <MDBIcon fab icon='instagram' size='lg' />
                        </MDBBtn>
                      </span>
                    </MDBCardBody>
                    <MDBCardFooter>
                      <small className='text-muted'>
                        Last updated 3 mins ago
                      </small>
                    </MDBCardFooter>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </div>
          </main>
        </div>
        <hr />
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
      </>
    </>
  )
}

export default Home

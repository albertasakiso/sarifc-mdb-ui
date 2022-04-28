import React, { useState } from 'react'
import { useQuery, gql } from '@apollo/client'

import {
  MDBBtn,
  MDBIcon,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBBadge,
} from 'mdb-react-ui-kit'

import newscard1 from '../../assets/pictures/individual/red_Ambassador.jpg'
import newscard2 from '../../assets/pictures/individual/player_Iven1.jpg'
import newscard3 from '../../assets/pictures/individual/player_defender1.jpg'

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

const uri = 'http://localhost:1337'

function DivisionThreeCard() {
  const [scrollableModal, setScrollableModal] = useState(false)

  const [centredModal, setCentredModal] = useState(false)

  const toggleShow = () => setCentredModal(!centredModal)

  //here
  const { loading, error, data } = useQuery(GET_FAKEPLAYERS)

  if (loading) return <p>Loading...</p>
  // if (error) return `Error! ${error.message}`
  if (error)
    return (
      <div>
        <div>{error.message}</div>
      </div>
    )
  console.log(data)

  return (
    <>
      {/*  */}
      {data.fakeplayers.data.map((fakeplayer) => (
        <div>
          <div className='container mt-5 text-dark'>
            <div className='row justify-content-start'>
              <div key={fakeplayer.id} className='col-lg-4 col-md-12 mb-4'>
                {/* Card Regular */}
                <div className='card card-cascade'>
                  {/* Card image */}
                  <div className='view view-cascade overlay'>
                    <img
                      className='card-img-top'
                      src={
                        'http://localhost:1337' +
                        fakeplayer.attributes.fakeplayerimage.data.attributes
                          .url
                      }
                      alt='Card image cap'
                    />
                    <a data-toggle='modal' data-target='#fullHeightModalRight'>
                      <div className='mask rgba-white-slight' />
                    </a>
                  </div>
                  <div
                    className='card-body mb-0 pb-0
                '
                  >
                    <p className='fw-bold text-muted small text-uppercase '>
                      {fakeplayer.attributes.position}
                    </p>
                    <p className='fw-bold h1 mb-1'>
                      {fakeplayer.attributes.name}
                    </p>

                    <p className='text-muted mb-0'>
                      {fakeplayer.attributes.number}
                    </p>
                  </div>
                  <hr style={{ backgroundColor: 'hsl(0, 0%, 75%)' }} />
                  <div className='card-body d-flex justify-content-around pt-0 pb-0 mt-0 mb-0'>
                    <span>
                      {/* <i className='fas fa-bed me-2 text-muted' /> */}
                      <strong className='me-1'>
                        <MDBBtn>
                          APP
                          {/* {'  '} <MDBIcon far icon='arrow-alt-circle-right' /> */}
                          {/* <MDBBadge className='ms-2' color='danger'>
                          9
                        </MDBBadge> */}
                        </MDBBtn>
                      </strong>
                      <span className='text-muted'>
                        <MDBBtn
                          floating
                          outline
                          rounded
                          className='mx-2'
                          color='success'
                        >
                          123
                        </MDBBtn>
                      </span>
                      <strong className='me-1'>
                        <MDBBtn>
                          Goals
                          {/* <MDBBadge
                          pill
                          className='mx-2 text-bold'
                          color='danger'
                        >
                          9
                        </MDBBadge> */}
                        </MDBBtn>
                      </strong>
                      <span className='text-muted'>
                        <MDBBtn
                          floating
                          outline
                          rounded
                          className='mx-2'
                          color='success'
                        >
                          52
                        </MDBBtn>
                      </span>
                    </span>
                  </div>
                  {/* Card content */}
                  <div className='card-body card-body-cascade text-center'>
                    <hr style={{ backgroundColor: 'hsl(0, 0%, 75%)' }} />
                    <div className='card-body d-flex justify-content-around pt-0 pb-0 mt-0 mb-0'>
                      <span>
                        {/* <i className='fas fa-bed me-2 text-muted' /> */}
                        <strong className='me-1'>Contract Start </strong>
                        <span className='text-muted'>
                          {fakeplayer.attributes.contractstart}
                        </span>
                      </span>
                      <span>
                        {/* <i className='fas fa-bath me-2 text-muted' /> */}
                        <strong className='me-1'> Ends</strong>
                        <span className='text-muted'>
                          {fakeplayer.attributes.contractend}
                        </span>
                      </span>
                    </div>
                    {/* Text */}
                    {/* <p className='card-text'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus, ex, recusandae. Facere modi sunt, quod
                    quibusdam.
                  </p> */}
                    <div className='d-flex align-items-center'>
                      <div className='flex-grow-1 ms-3'>
                        <MDBBtn onClick={toggleShow} color='info'>
                          <MDBIcon fas icon='book-reader' /> {'  '}
                          Biography
                        </MDBBtn>

                        <MDBModal
                          tabIndex='-1'
                          show={centredModal}
                          setShow={setCentredModal}
                        >
                          <MDBModalDialog centered>
                            <MDBModalContent>
                              <MDBModalHeader>
                                <MDBModalTitle>Biography</MDBModalTitle>
                                <MDBBtn
                                  className='btn-close'
                                  color='none'
                                  onClick={toggleShow}
                                ></MDBBtn>
                              </MDBModalHeader>
                              <MDBModalBody className='text-dark text-start'>
                                <p>{fakeplayer.attributes.biography}</p>
                                <span>
                                  <MDBIcon outline floating color='warning'>
                                    <p className='text-muted'>NxGen Rating </p>
                                    <MDBIcon fas icon='star' />{' '}
                                    <MDBIcon fas icon='star' />{' '}
                                    <MDBIcon fas icon='star' />{' '}
                                    <MDBIcon fas icon='star' />{' '}
                                    <MDBIcon fas icon='star' />{' '}
                                  </MDBIcon>
                                </span>
                              </MDBModalBody>
                              <MDBModalFooter>
                                <MDBBtn color='danger' onClick={toggleShow}>
                                  Close
                                </MDBBtn>
                                {/* <MDBBtn>Save changes</MDBBtn> */}
                              </MDBModalFooter>
                            </MDBModalContent>
                          </MDBModalDialog>
                        </MDBModal>
                      </div>
                    </div>
                    {/* Facebook */}
                    <a type='button' className='btn-floating btn-small btn-fb'>
                      <i className='fab fa-facebook-f' />
                    </a>
                    {/* Twitter */}
                    <a type='button' className='btn-floating btn-small btn-tw'>
                      <i className='fab fa-twitter' />
                    </a>
                    {/* Google + */}
                    <a
                      type='button'
                      className='btn-floating btn-small btn-dribbble'
                    >
                      <i className='fab fa-instagram' />
                    </a>
                  </div>
                </div>
                {/* Card Regular */}
              </div>
            </div>
          </div>
          {/* /Start your project here*/}
          {/* Full Height Modal Right */}
        </div>
      ))}
    </>
  )
}

export default DivisionThreeCard

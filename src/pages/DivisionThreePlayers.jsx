import React, { useState } from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import { useQuery, gql } from '@apollo/client'
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardLink,
  MDBListGroup,
  MDBListGroupItem,
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
  MDBRow,
  MDBCol,
} from 'mdb-react-ui-kit'

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
// const URI = 'http://localhost:1337/uploads/sector0_6ef578eb4c.png'

function DivisionThreePlayers() {
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
  const [scrollableModal, setScrollableModal] = useState(false)

  const [centredModal, setCentredModal] = useState(false)

  const toggleShow = () => setCentredModal(!centredModal)

  return (
    <>
      {/*  */}
      <MDBRow>
        {data.fakeplayers.data.map((fakeplayer) => (
          <MDBCol sm='12' md='6' lg='3' className='text-primary'>
            <div key={fakeplayer.id}>
              <MDBCard style={{ width: '23rem' }} alignment='center'>
                <MDBCardImage
                  position='top'
                  alt='...'
                  src={
                    'http://localhost:1337' +
                    fakeplayer.attributes.fakeplayerimage.data.attributes.url
                  }
                  className='img-fluid shadow-4'
                />
                <MDBCardBody>
                  <MDBCardTitle>{fakeplayer.attributes.name}</MDBCardTitle>
                  <MDBCardText>{fakeplayer.attributes.position}</MDBCardText>
                  <MDBCardText>{fakeplayer.attributes.number}</MDBCardText>
                </MDBCardBody>
                <MDBListGroup flush>
                  <MDBListGroupItem>
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
                  </MDBListGroupItem>
                  <MDBListGroupItem>
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
                  </MDBListGroupItem>
                  <MDBListGroupItem>
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
                  </MDBListGroupItem>
                </MDBListGroup>
                <MDBCardBody>
                  <MDBCardLink href='#'>
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
                  </MDBCardLink>
                </MDBCardBody>
              </MDBCard>
            </div>
          </MDBCol>
        ))}
      </MDBRow>
    </>
  )
}

export default DivisionThreePlayers

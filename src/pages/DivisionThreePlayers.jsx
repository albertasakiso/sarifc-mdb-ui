import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import { useQuery, gql } from '@apollo/client'

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
const URI = 'http://localhost:1337/uploads/sector0_6ef578eb4c.png'

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

  return (
    <div>
      <div>
        <div className='d-flex justify-content-center fs-4 mb-1'>
          Division Three Players
        </div>
        <div className='row'>
          {data.fakeplayers.data.map((fakeplayer) => (
            <div key={fakeplayer.id} className='col'>
              <div className='container mt-5'>
                <div className='d-flex justify-content-center'>
                  <div className='card' style={{ width: 400 }}>
                    <img
                      src={
                        'http://localhost:1337' +
                        fakeplayer.attributes.fakeplayerimage.data.attributes
                          .url
                      }
                      className='card-img-top'
                      alt='...'
                    />
                    <div className='card-body pb-2'>
                      <p className='fw-bold text-muted small text-uppercase mb-1'>
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
                    <div className='card-body d-flex justify-content-around pt-2'>
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
                    <div className='card-body bg-light'>
                      <p className='text-uppercase text-muted small fw-bold'>
                        Sari Football Club
                      </p>
                      <div className='d-flex align-items-center'>
                        {/* <div className='flex-shrink-0'>
                        <img
                          src={
                            'http://localhost:1337' +
                            fakeplayer.attributes.fakeplayerimage.data
                              .attributes.url
                          }
                          className='rounded-circle'
                          alt
                          style={{ width: 45, height: 45 }}
                        />
                      </div> */}
                        <div className='flex-grow-1 ms-3'>
                          <p className='fw-bold mb-1'>Biography</p>
                          <span className='text-muted mb-0 text-center'>
                            {fakeplayer.attributes.biography}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DivisionThreePlayers

import React from 'react'
import Footer from '../components/Footer'
import NavBar from './../components/NavBar'
import image from '../assets/pictures/sector0.png'
import { useQuery, gql } from '@apollo/client'
import DivisionThreePlayers from './DivisionThreePlayers'

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

function Players() {
  const { loading, error, data } = useQuery(GET_FAKEPLAYERS)

  if (loading) return <p>Loading...</p>
  // if (error) return `Error! ${error.message}`
  if (error)
    return (
      <div>
        <NavBar />
        <div>{error.message}</div>
        <Footer />
      </div>
    )
  console.log(data)

  return (
    <div>
      <NavBar />
      {/* <div>
        {data.fakeplayers.data.map((fake) => (
          <div key={fake.id}> {fake.attributes.name} </div>
        ))}
      </div> */}
      <hr />
      <DivisionThreePlayers />

      <hr />
      <Footer />
    </div>
  )

  // const { loading, error, data } = useFetch(
  //   'http://localhost:1337/api/fakeplayers'
  // )

  // if (loading) return <p>Loading in progress...........!</p>
  // if (error) return <p>error!!!!!!! peal</p>
}

export default Players

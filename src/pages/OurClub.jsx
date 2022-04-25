import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
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

//SARI FC BOARD MEMBERS PICTURES
import boardmember1_blankavatorsolid from '../assets/icons/blank-male-silhouette.jpg'
import visionicon from '../assets/icons/mission.png'
import missionicon from '../assets/icons/missionstatementicon1hp.png'
import valuesicon from '../assets/icons/circle_icon.png'

import boardmemberhermas from '../assets/pictures/individual/hermas.jpg'
import boardmemberasakiso from '../assets/pictures/individual/asakiso.jpg'
import boardmember2_blankavator from '../assets/icons/Blank-Avatar-Man-in-Suit.jpg'
import boardmembergodwin from '../assets/pictures/individual/red_Ambassador.jpg'
import MissionVisionValues from './cards/MissionVisionValues'

function OurClub() {
  return (
    <div>
      <NavBar />
      <MissionVisionValues />
      <div className='container-fluid mt-0 mb-0 py-0 bg-light'>
        <div className='row mx-1 me-1'>
          <div className='col bg-success text-light fw-bold p-5 border-rounded'>
            <div className='row d-flex justify-content-center mx-1 me-1'>
              <h4 className='col border img-center text-center p-5 fw-bolder'>
                <img src={visionicon} height={120} alt='vision' />
                Vision
              </h4>
              <p className='col'>
                To be the best football club in Ghana, both on and off the
                pitch. To become the District’s leading football club that
                changes lives.
              </p>
            </div>
          </div>

          <div className='col'>
            <div className='row d-flex justify-content-center  bg-primary text-light fw-bold p-5 border-rounded'>
              <h4 className='col border img-center text-center p-5 fw-bolder mx-1 me-1'>
                <img src={visionicon} height={120} alt='vision' />
                Mission
              </h4>
              <p className='col d-flex justify-content-start'>
                To bring together the Sari F.C family to create life changing
                opportunities for children and young people in Tolon District
                and beyond.
              </p>
            </div>
          </div>
          <div className='col'>
            <div className='row d-flex justify-content-center  bg-danger text-light fw-bold p-5 border-rounded'>
              <h4 className='col img-center text-center border p-5 fw-bolder mx-1 me-1'>
                <img src={visionicon} height={120} alt='vision' />
                Values{' '}
              </h4>
              <p className='col d-flex justify-content-start'>
                Respect, effort, ambition, teamwork and humility are the five
                principal values that define the spirit of Sari Football Club
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className='mb-1 mt-0' />
      <div className='d-flex justify-content-center bg-light text-danger mt-0 py-1 mb-0'>
        OUR CORE VAULES
      </div>
      <div className='container mt-0 mb-2 px-3 pb-3 bg-light'>
        <div className='row mx-1 me-1'>
          <div className='col bg-light text-primary fw-bold p-3 border-rounded'>
            <div className='row d-flex justify-content-center '>
              <div className='col border fw-bolder'>
                <h5 className='fw-bolder text-center mt-1 '>
                  <MDBBtn
                    outline
                    rounded
                    className='fw-bolder text-center mt-1 '
                  >
                    RESPECT
                  </MDBBtn>
                </h5>
                <p className='fw-normal fs-5'>
                  Respect for others is one of the basic requirements of
                  democratic life and the capacity to live in society. It
                  affects the individual and has both a social and a collective
                  dimension. Respect is a fundamental part of sport, for sport
                  generates situations of tension that have to be resolved
                  almost instantaneously. There is therefore a need, above rules
                  and standards, for this value to be present in order to
                  guarantee cordial and correct interrelations between people.
                  In sport, respect is needed in similar situations to those
                  where it is demanded in wider society, but the intensity of
                  the moment implies that the presence or absence of respect can
                  be very obvious and can affect the development of the
                  situation or event.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='row mx-1 me-1'>
          <div className='col bg-light text-primary fw-bold p-3 border-rounded'>
            <div className='row d-flex justify-content-center '>
              <div className='col border fw-bolder'>
                <h5 className='fw-bolder text-center mt-1'>
                  <MDBBtn
                    outline
                    rounded
                    className='fw-bolder text-center mt-1 '
                  >
                    EFFORT
                  </MDBBtn>
                </h5>
                <p className='fw-normal fs-5'>
                  There are many social models that avoid effort and advocate
                  instead luck, opportunism and immediate triumph. However,
                  effort is a value that can take us to unthinkable heights and
                  lead us to achieve targets and objectives that may at other
                  times appear distant or inaccessible. Dedication, rigour,
                  constancy, sacrifice and perseverance all bear fruit, while
                  luck and the search for a quick win are often fleeting and
                  momentary. Note that at school, teachers have for a long time
                  being promoting a culture of effort as the vehicle for
                  academic development and personal achievement, and this helps
                  to construct new social models.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='row mx-1 me-1'>
          <div className='col bg-light text-primary fw-bold p-3 border-rounded'>
            <div className='row d-flex justify-content-center '>
              <div className='col border fw-bolder'>
                <h5 className='fw-bolder text-center mt-1'>
                  <MDBBtn
                    outline
                    rounded
                    className='fw-bolder text-center mt-1 '
                  >
                    AMBITION
                  </MDBBtn>
                </h5>
                <p className='fw-normal fs-5'>
                  Ambition is the desire to achieve the maximum performance and
                  do things not only well but also as well as is feasibly
                  possible and to improve every day. This value is applicable
                  both to individuals and to groups. It involves use of a web of
                  values as varied as excellence, patience, discipline, order,
                  motivation and responsibility. Indeed, ambition invokes and
                  requires a broad system of values and, in turn, is related
                  with a job being done well, effort and rigour. Regarding
                  targets, ambition is probably the surest way of achieving
                  them, for it is the impulse to grow.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='row mx-1 me-1'>
          <div className='col bg-light text-primary fw-bold p-3 border-rounded'>
            <div className='row d-flex justify-content-center '>
              <div className='col border fw-bolder'>
                <h5 className='fw-bolder text-center mt-1'>
                  <MDBBtn
                    outline
                    rounded
                    className='fw-bolder text-center mt-1 '
                  >
                    TEAMWORK
                  </MDBBtn>
                </h5>
                <p className='fw-normal fs-5'>
                  Teamwork implies that the subject forms part of a group and
                  that, as a member of the same, becomes an active element that
                  acts on behalf of the whole (sometimes even to the determine
                  of their own individuality). There are undeniable benefits of
                  knowing that you are part of a team and this requires the
                  learning and accentuation of many other values.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='row mx-1 me-1'>
          <div className='col bg-light text-primary fw-bold p-3 border-rounded'>
            <div className='row d-flex justify-content-center '>
              <div className='col border fw-bolder'>
                <h5 className='fw-bolder text-center mt-1'>
                  <MDBBtn
                    outline
                    rounded
                    className='fw-bolder text-center mt-1 '
                  >
                    HUMILITY
                  </MDBBtn>
                </h5>
                <p className='fw-normal fs-5'>
                  Often when athletes, and people in general, achieve the goals
                  they have set themselves, they start feeling superior in
                  physical, moral, economic and other terms, and this leads them
                  to forget certain values that have in all probability helped
                  them to achieved those very goals: effort, perseverance,
                  self-control, etc. We are all aware of how Sari F.C has dealt
                  with its victories of recent years, and how it has always
                  shown humility (and also such values as effort, rigour,
                  responsibility and others) to win respect in its field, and
                  among its opponents, and generally everyone. Humility probably
                  consists of knowing how to be clear about one’s values, and to
                  maintain them and defend them even in situations where you are
                  clearly superior and more successful.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='d-flex justify-content-center bg-light text-danger  mb-0  py-5 px-5'>
        BOARD OF DIRECTORS | TECHNICAL STAFF | COACHING STAFF
      </div>
      <>
        <div className='container-fluid'>
          <h1 className=' d-flex justify-content-center bg-light text-danger mb-0 py-0'>
            BOARD OF DIRECTORS
          </h1>
          <hr className=' my-0 mb-1' />
          <div className='container-fluid bg-light  d-flex justify-content-start'>
            <MDBRow className='text-dark mt-4 mx-4 mb-4 d-flex justify-content-start'>
              <MDBCol className='shadow mt-4 mx-4 mb-4'>
                <MDBCard className='h-100'>
                  <MDBCardImage
                    src={boardmemberasakiso}
                    alt='...'
                    position='top'
                  />
                  <MDBCardBody>
                    <MDBCardTitle className='text-secondary fw-bolder lead'>
                      APILIGU ASAKISO
                    </MDBCardTitle>
                    <MDBCardText>
                      BOARD MEMBER <br /> DIRECTOR OF COMMUNICATIONS
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol className='shadow mt-4 mx-4 mb-4'>
                <MDBCard className='h-100'>
                  <MDBCardImage
                    src={boardmembergodwin}
                    alt='...'
                    position='top'
                  />
                  <MDBCardBody>
                    <MDBCardTitle className='text-secondary fw-bolder lead'>
                      GODWIN ANAFO APULLAH
                    </MDBCardTitle>
                    <MDBCardText>
                      <br /> BOARD MEMBER <br /> HEAD COACH | DIV 3
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol className='shadow mt-4 mx-4 mb-4'>
                <MDBCard className='h-100'>
                  <MDBCardImage
                    src={boardmember1_blankavatorsolid}
                    alt='...'
                    position='top'
                  />
                  <MDBCardBody>
                    <MDBCardTitle className='text-secondary fw-bolder lead'>
                      ALHASSAN IBRAHIM
                    </MDBCardTitle>
                    <MDBCardText>
                      BOARD MEMBER <br />
                      GENERAL SECRETARY
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol className='shadow mt-4 mx-4 mb-4'>
                <MDBCard className='h-100'>
                  <MDBCardImage
                    src={boardmemberhermas}
                    alt='...'
                    position='top'
                  />
                  <MDBCardBody>
                    <MDBCardTitle className='text-secondary fw-bolder lead'>
                      WASAAL HERMAS SONGTAA
                    </MDBCardTitle>
                    <MDBCardText>
                      BOARD MEMBER <br /> TECHNICAL DIRECTOR
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol className='shadow mt-4 mx-4 mb-4'>
                <MDBCard className='h-100'>
                  <MDBCardImage
                    src={boardmember1_blankavatorsolid}
                    alt='...'
                    position='top'
                  />
                  <MDBCardBody>
                    <MDBCardTitle className='text-secondary fw-bolder lead'>
                      ABAAH PAUL LAMBERT
                    </MDBCardTitle>
                    <MDBCardText>
                      BOARD MEMBER <br />
                      TECHNICAL DIRECTOR
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </div>
        </div>
      </>
      <div>
        <hr />
        <div className='container-fluid'>
          <h1 className=' d-flex justify-content-center bg-light text-danger mb-0 py-0'>
            COACHING STAFF
          </h1>
          <hr className=' my-0 mb-0' />
        </div>
        <section>
          <div
            className='jumbotron p-5 text-center text-md-left author-box wow fadeIn bg-light text-dark'
            data-wow-delay='0.3s'
          >
            {/*Name*/}

            <hr />
            <div className='row'>
              {/*Avatar*/}
              <div className='col-12 col-md-2 mb-md-0 mb-4'>
                <img
                  src={boardmembergodwin}
                  className='img-fluid rounded z-depth-2'
                />
              </div>
              {/*Author Data*/}
              <div className='col-12 col-md-10 d-flex justify-content-start'>
                <h5 className='font-weight-bold dark-grey-text mb-3'>
                  <strong>GODWIN A. APULLAH</strong>
                </h5>
                <br />
                <h5 className='font-weight-normal dark-grey-text mb-3'>
                  <div> : HEAD COACH DIVISION THREE</div>
                </h5>
              </div>
            </div>
          </div>
        </section>
        {/*/.Author box*/}
        <section>
          <div
            className='jumbotron p-5 text-center text-md-left author-box wow fadeIn bg-light text-dark'
            data-wow-delay='0.3s'
          >
            {/*Name*/}

            <hr />
            <div className='row'>
              {/*Avatar*/}
              <div className='col-12 col-md-2 mb-md-0 mb-4'>
                <img
                  src={boardmember2_blankavator}
                  className='img-fluid rounded z-depth-2'
                />
              </div>
              {/*Author Data*/}
              <div className='col-12 col-md-10 d-flex justify-content-start'>
                <h5 className='font-weight-bold dark-grey-text mb-3'>
                  <strong>ABDULAI</strong>
                </h5>
                <br />
                <h5 className='font-weight-normal dark-grey-text mb-3'>
                  <div> : ASSISTANT COACH DIVISION THREE</div>
                </h5>
              </div>
            </div>
          </div>
        </section>
        {/*/.Author box*/}
        <section>
          <div
            className='jumbotron p-5 text-center text-md-left author-box wow fadeIn bg-light text-dark'
            data-wow-delay='0.3s'
          >
            {/*Name*/}

            <hr />
            <div className='row'>
              {/*Avatar*/}
              <div className='col-12 col-md-2 mb-md-0 mb-4'>
                <img
                  src={boardmember2_blankavator}
                  className='img-fluid rounded z-depth-2'
                />
              </div>
              {/*Author Data*/}
              <div className='col-12 col-md-10 d-flex justify-content-start'>
                <h5 className='font-weight-bold dark-grey-text mb-3'>
                  <strong> HABIB BASHIRU</strong>
                </h5>
                <br />
                <h5 className='font-weight-normal dark-grey-text mb-3'>
                  <div> : COACH JUVENILE U-13</div>
                </h5>
              </div>
            </div>
          </div>
        </section>
        {/*/.Author box*/}
      </div>
      <Footer />
    </div>
  )
}

export default OurClub

import React from 'react'

import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit'

import newscard1 from '../../assets/pictures/individual/red_Ambassador.jpg'
import newscard2 from '../../assets/pictures/individual/player_Iven1.jpg'
import newscard3 from '../../assets/pictures/individual/player_defender1.jpg'

function DivisionThreeCard() {
  return (
    <>
      <div>
        <div className='container mt-5 text-dark'>
          <div className='row justify-content-start'>
            <div className='col-lg-4 col-md-12 mb-4'>
              {/* Card Regular */}
              <div className='card card-cascade'>
                {/* Card image */}
                <div className='view view-cascade overlay'>
                  <img
                    className='card-img-top'
                    src={newscard1}
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
                    FORWARD
                  </p>
                  <p className='fw-bold h1 mb-1'>APILIGU ASAKISO</p>
                  <span>
                    <MDBIcon outline floating color='warning'>
                      <p className='text-muted'>NxGen Rating </p>
                      <MDBIcon fas icon='star' /> <MDBIcon fas icon='star' />{' '}
                      <MDBIcon fas icon='star' /> <MDBIcon fas icon='star' />{' '}
                      <MDBIcon fas icon='star' />{' '}
                    </MDBIcon>
                  </span>
                  <p className='text-muted mb-0'>18</p>
                </div>
                <hr style={{ backgroundColor: 'hsl(0, 0%, 75%)' }} />
                <div className='card-body d-flex justify-content-around pt-0 pb-0 mt-0 mb-0'>
                  <span>
                    {/* <i className='fas fa-bed me-2 text-muted' /> */}
                    <strong className='me-1'>
                      <MDBBtn>APP</MDBBtn>
                    </strong>
                    <span className='text-muted'>
                      <MDBBtn
                        floating
                        outline
                        rounded
                        className='mx-2'
                        color='success'
                      >
                        41
                      </MDBBtn>
                    </span>
                    <strong className='me-1'>
                      <MDBBtn>Goals</MDBBtn>
                    </strong>
                    <span className='text-muted'>
                      <MDBBtn
                        floating
                        outline
                        rounded
                        className='mx-2'
                        color='success'
                      >
                        41
                      </MDBBtn>
                    </span>
                  </span>
                  <span>
                    {/* <i className='fas fa-bath me-2 text-muted' /> */}
                    <strong className='me-1'> NxGen Rating</strong>
                    <span className='text-muted'>
                      <MDBIcon outline floating color='warning'>
                        <MDBIcon fas icon='star' /> <MDBIcon fas icon='star' />{' '}
                        <MDBIcon fas icon='star' /> <MDBIcon fas icon='star' />{' '}
                        <MDBIcon fas icon='star' />{' '}
                      </MDBIcon>
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
                      <span className='text-muted'>11/12/2200</span>
                    </span>
                    <span>
                      {/* <i className='fas fa-bath me-2 text-muted' /> */}
                      <strong className='me-1'> Ends</strong>
                      <span className='text-muted'>22/2/2222</span>
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
                      <p className='fw-bold mb-1'>Biography</p>
                      <span className='text-muted mb-0 text-center'>
                        Born in Laval (Mayenne, France) on 18 June 1989,
                        Pierre-Emerick Aubameyang has triple nationality:
                        Spanish, French and Gabonese, but plays internationally
                        for Gabon. The striker has experience of playing in
                        several European countries. After being at several clubs
                        as a youth, including AC Milan, Aubameyang made his
                        senior debut in 2008/09 at Dijon in the French second
                        division, on loan at the time from the Italian outfit.
                        He caught the eye of a number of Ligue 1 teams, and
                        would have spells at Lille (2009/10), AS Monaco
                        (2010/11) and Saint Etienne (2011/13). His next port of
                        call was Borussia Dortmund in 2013, where he spent four
                        and a half seasons, scoring 141 goals to earn his
                        reputation as one of the sharpest shooters in the
                        continent, topping the Bundesliga goalscoring charts in
                        2017 with 31 goals. In the 2018 winter transfer window,
                        he left for Arsenal, which where he has been for the
                        last four years. He was top goalscorer in the
                        Premiership in 2019 with 22 goals. On an individual
                        level, he was been named African Player of the Year in
                        2015 and Bundesliga Player of the Year in 2016. His
                        various team titles include the French League Cup with
                        Saint Etienne (2013), the German Cup with Dortmund
                        (2017) and the FA Cup with Arsenal (2020).
                      </span>
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
                    <i className='fab fa-dribbble' />
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
    </>
  )
}

export default DivisionThreeCard

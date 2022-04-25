import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

import coverimage from '../assets/cover/sarifcteamphotovsarrowheads.jpg'

function SingleNewsPost() {
  return (
    <>
      <NavBar />

      {/* news page image background cover */}
      <div
        className=' mt-0 text-center bg-image shadow-1-strong'
        style={{
          backgroundImage:
            'url("http://localhost:3000/static/media/IMG_20211228_154707_633.1b8e0a6f.jpg")',
          height: 400,
          marginTop: 58,
        }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>LATEST NEWS</h1>
              <h4>
                Match Reports, Upcoming Matches, Training and General News
              </h4>
            </div>
          </div>
        </div>
      </div>

      {/*  news temps */}
      <main>
        <div className='container bg-light text-dark'>
          {/*Section: Blog v.4*/}
          <section className='section  pb-3  py-3 wow fadeIn'>
            {/*Grid row*/}
            <div className='row'>
              <div className='col-md-12'>
                {/* Card */}
                <div className='card card-cascade wider reverse'>
                  {/* Card image */}
                  <div className='view view-cascade overlay'>
                    <img
                      className='card-img-top'
                      src={coverimage}
                      alt='Card image cap'
                    />
                    <a href='#!'>
                      <div className='mask rgba-white-slight' />
                    </a>
                  </div>
                  {/*Post data*/}
                  <div className='card-body card-body-cascade text-center'>
                    <h2>
                      <a>
                        <strong>This is title of the news</strong>
                      </a>
                    </h2>
                    <p>
                      Written by <a>Abby Madison</a>, 26/08/2016
                    </p>
                  </div>
                  {/*Post data*/}
                </div>
                {/*Excerpt*/}
                <div className='excerpt mt-5 wow fadeIn' data-wow-delay='0.3s'>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas molestias excepturi sint
                    occaecati cupiditate non provident, similique sunt in culpa
                    qui officia deserunt mollitia animi, id est laborum et
                    dolorum fuga. Et harum quidem rerum facilis est et expedita
                    distinctio.
                  </p>
                  <p>
                    Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque nihil impedit quo minus id quod maxime placeat facere
                    possimus, omnis voluptas assumenda est, omnis dolor
                    repellendus. Temporibus autem quibusdam et aut officiis
                    debitis aut rerum necessitatibus saepe eveniet ut et
                    voluptates repudiandae sint et molestiae non recusandae.
                    Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                    reiciendis voluptatibus maiores alias consequatur aut
                    perferendis doloribus.
                  </p>

                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem.
                  </p>
                  <p>
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit, sed quia non numquam eius
                    modi tempora incidunt ut labore et dolore magnam aliquam
                    quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                    exercitationem ullam corporis suscipit laboriosam, nisi ut
                    aliquid ex ea commodi consequatur? Quis autem vel eum iure
                    reprehenderit qui in ea voluptate velit esse quam nihil
                    molestiae consequatur.
                  </p>
                  <div class='bg-light text-start text-primary'>
                    <div className='container p-1 pb-0'>
                      {/* Section: Social media */}

                      <section className='mb-1'>
                        {/* Facebook */}
                        <a
                          className='btn btn-primary btn-floating m-1'
                          style={{ backgroundColor: '#3b5998' }}
                          href='#!'
                          role='button'
                        >
                          <i className='fab fa-facebook-f' />
                        </a>
                        {/* Twitter */}
                        <a
                          className='btn btn-primary btn-floating m-1'
                          style={{ backgroundColor: '#55acee' }}
                          href='#!'
                          role='button'
                        >
                          <i className='fab fa-twitter' />
                        </a>

                        {/* Instagram */}
                        <a
                          className='btn btn-primary btn-floating m-1'
                          style={{ backgroundColor: '#ac2bac' }}
                          href='#!'
                          role='button'
                        >
                          <i className='fab fa-instagram' />
                        </a>
                        {/* Linkedin */}
                        <a
                          className='btn btn-primary btn-floating m-1'
                          style={{ backgroundColor: '#0082ca' }}
                          href='#!'
                          role='button'
                        >
                          <i className='fab fa-linkedin-in' />
                        </a>
                        <span className='btn btn-primary  m-1'>Read More</span>
                      </section>
                      {/* Section: Social media */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Grid row*/}
          </section>
        </div>
        {/*Carousel Wrapper*/}
      </main>
      <Footer />
    </>
  )
}

export default SingleNewsPost

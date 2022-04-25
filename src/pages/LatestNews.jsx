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
import coverimage from '../assets/cover/sarifcteamphotovsarrowheads.jpg'
function LatestNews() {
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
        <div className='container-fluid bg-light text-dark'>
          <hr className='mb-5 mt-3' />
          <section
            className='section extra-margins pb-3 mt-4 wow fadeIn'
            data-wow-delay='0.3s'
          >
            {/*Grid row*/}

            <div className='row'>
              {/*Grid column*/}
              <div className='col-lg-4 col-md-12 mb-4'>
                {/*Card Light*/}
                <div className='card'>
                  {/*Card image*/}
                  <div className='view overlay'>
                    <img
                      src='https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20%28147%29.jpg'
                      className='card-img-top'
                      alt
                    />
                    <a>
                      <div className='mask' />
                    </a>
                  </div>
                  {/*/.Card image*/}
                  {/*Card content*/}
                  <div className='card-body'>
                    {/*Title*/}
                    <h4 className='card-title'>Card title</h4>

                    <hr />
                    {/*Text*/}
                    <p className='card-text'>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <MDBBtn
                      outline
                      rounded
                      // className='justify-content'
                      href='/news/1'
                    >
                      Read More
                    </MDBBtn>

                    <span>
                      <span className='d-flex justify-content-center'>
                        <MDBCardFooter>
                          <small className='text-muted'>
                            Last updated 3 mins ago
                          </small>
                        </MDBCardFooter>
                      </span>
                      <span className='d-flex justify-content-center'>
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
                    </span>
                  </div>
                  {/*/.Card content*/}
                </div>
                {/*/.Card Light*/}
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className='col-lg-4 col-md-6 mb-4'>
                {/*Card Light*/}
                <div className='card'>
                  {/*Card image*/}
                  <div className='view overlay'>
                    <img
                      src='https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20%2850%29.jpg'
                      className='card-img-top'
                      alt
                    />
                    <a>
                      <div className='mask' />
                    </a>
                  </div>
                  {/*/.Card image*/}
                  {/*Card content*/}
                  <div className='card-body'>
                    {/*Title*/}
                    <h4 className='card-title'>Card title</h4>
                    <hr />
                    {/*Text*/}
                    <p className='card-text'>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a className='link-text'>
                      <h5>
                        Read more <i className='fas fa-chevron-right' />
                      </h5>
                      <span>
                        <span className='d-flex justify-content-center'>
                          <MDBCardFooter>
                            <small className='text-muted'>
                              Last updated 3 mins ago
                            </small>
                          </MDBCardFooter>
                        </span>
                        <span className='d-flex justify-content-center'>
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
                      </span>
                    </a>
                  </div>
                  {/*/.Card content*/}
                </div>
                {/*/.Card Light*/}
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className='col-lg-4 col-md-6 mb-4'>
                {/*Card Light*/}
                <div className='card'>
                  {/*Card image*/}
                  <div className='view overlay'>
                    <img
                      src='https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20%2897%29.jpg'
                      className='card-img-top'
                      alt
                    />
                    <a>
                      <div className='mask' />
                    </a>
                  </div>
                  {/*/.Card image*/}
                  {/*Card content*/}
                  <div className='card-body'>
                    {/*Title*/}
                    <h4 className='card-title'>Card title</h4>
                    <hr />
                    {/*Text*/}
                    <p className='card-text'>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a className='link-text'>
                      <h5>
                        Read more <i className='fas fa-chevron-right' />
                      </h5>
                      <span>
                        <span className='d-flex justify-content-center'>
                          <MDBCardFooter>
                            <small className='text-muted'>
                              Last updated 3 mins ago
                            </small>
                          </MDBCardFooter>
                        </span>
                        <span className='d-flex justify-content-center'>
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
                      </span>
                    </a>
                  </div>
                  {/*/.Card content*/}
                </div>
                {/*/.Card Light*/}
              </div>
              {/*Grid column*/}
            </div>
            <div className='row'>
              {/*Grid column*/}
              <div className='col-lg-4 col-md-12 mb-4'>
                {/*Card Light*/}
                <div className='card'>
                  {/*Card image*/}
                  <div className='view overlay'>
                    <img
                      src='https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20%28147%29.jpg'
                      className='card-img-top'
                      alt
                    />
                    <a>
                      <div className='mask' />
                    </a>
                  </div>
                  {/*/.Card image*/}
                  {/*Card content*/}
                  <div className='card-body'>
                    {/*Title*/}
                    <h4 className='card-title'>Card title</h4>
                    <hr />
                    {/*Text*/}
                    <p className='card-text'>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a className='link-text'>
                      <h5 className='bolder'>
                        Read more <i className='fas fa-chevron-right' />
                      </h5>
                    </a>

                    <span>
                      <span className='d-flex justify-content-center'>
                        <MDBCardFooter>
                          <small className='text-muted'>
                            Last updated 3 mins ago
                          </small>
                        </MDBCardFooter>
                      </span>
                      <span className='d-flex justify-content-center'>
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
                    </span>
                  </div>
                  {/*/.Card content*/}
                </div>
                {/*/.Card Light*/}
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className='col-lg-4 col-md-6 mb-4'>
                {/*Card Light*/}
                <div className='card'>
                  {/*Card image*/}
                  <div className='view overlay'>
                    <img
                      src='https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20%2850%29.jpg'
                      className='card-img-top'
                      alt
                    />
                    <a>
                      <div className='mask' />
                    </a>
                  </div>
                  {/*/.Card image*/}
                  {/*Card content*/}
                  <div className='card-body'>
                    {/*Title*/}
                    <h4 className='card-title'>Card title</h4>
                    <hr />
                    {/*Text*/}
                    <p className='card-text'>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a className='link-text'>
                      <h5>
                        Read more <i className='fas fa-chevron-right' />
                      </h5>
                      <span>
                        <span className='d-flex justify-content-center'>
                          <MDBCardFooter>
                            <small className='text-muted'>
                              Last updated 3 mins ago
                            </small>
                          </MDBCardFooter>
                        </span>
                        <span className='d-flex justify-content-center'>
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
                      </span>
                    </a>
                  </div>
                  {/*/.Card content*/}
                </div>
                {/*/.Card Light*/}
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className='col-lg-4 col-md-6 mb-4'>
                {/*Card Light*/}
                <div className='card'>
                  {/*Card image*/}
                  <div className='view overlay'>
                    <img
                      src='https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20%2897%29.jpg'
                      className='card-img-top'
                      alt
                    />
                    <a>
                      <div className='mask' />
                    </a>
                  </div>
                  {/*/.Card image*/}
                  {/*Card content*/}
                  <div className='card-body'>
                    {/*Title*/}
                    <h4 className='card-title'>Card title</h4>
                    <hr />
                    {/*Text*/}
                    <p className='card-text'>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a className='link-text'>
                      <h5>
                        Read more <i className='fas fa-chevron-right' />
                      </h5>
                      <span>
                        <span className='d-flex justify-content-center'>
                          <MDBCardFooter>
                            <small className='text-muted'>
                              Last updated 3 mins ago
                            </small>
                          </MDBCardFooter>
                        </span>
                        <span className='d-flex justify-content-center'>
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
                      </span>
                    </a>
                  </div>
                  {/*/.Card content*/}
                </div>
                {/*/.Card Light*/}
              </div>
              {/*Grid column*/}
            </div>
            <div className='row'>
              {/*Grid column*/}
              <div className='col-lg-4 col-md-12 mb-4'>
                {/*Card Light*/}
                <div className='card'>
                  {/*Card image*/}
                  <div className='view overlay'>
                    <img
                      src='https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20%28147%29.jpg'
                      className='card-img-top'
                      alt
                    />
                    <a>
                      <div className='mask' />
                    </a>
                  </div>
                  {/*/.Card image*/}
                  {/*Card content*/}
                  <div className='card-body'>
                    {/*Title*/}
                    <h4 className='card-title'>Card title</h4>
                    <hr />
                    {/*Text*/}
                    <p className='card-text'>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a className='link-text'>
                      <h5 className='bolder'>
                        Read more <i className='fas fa-chevron-right' />
                      </h5>
                    </a>

                    <span>
                      <span className='d-flex justify-content-center'>
                        <MDBCardFooter>
                          <small className='text-muted'>
                            Last updated 3 mins ago
                          </small>
                        </MDBCardFooter>
                      </span>
                      <span className='d-flex justify-content-center'>
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
                    </span>
                  </div>
                  {/*/.Card content*/}
                </div>
                {/*/.Card Light*/}
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className='col-lg-4 col-md-6 mb-4'>
                {/*Card Light*/}
                <div className='card'>
                  {/*Card image*/}
                  <div className='view overlay'>
                    <img
                      src='https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20%2850%29.jpg'
                      className='card-img-top'
                      alt
                    />
                    <a>
                      <div className='mask' />
                    </a>
                  </div>
                  {/*/.Card image*/}
                  {/*Card content*/}
                  <div className='card-body'>
                    {/*Title*/}
                    <h4 className='card-title'>Card title</h4>
                    <hr />
                    {/*Text*/}
                    <p className='card-text'>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a className='link-text'>
                      <h5>
                        Read more <i className='fas fa-chevron-right' />
                      </h5>
                      <span>
                        <span className='d-flex justify-content-center'>
                          <MDBCardFooter>
                            <small className='text-muted'>
                              Last updated 3 mins ago
                            </small>
                          </MDBCardFooter>
                        </span>
                        <span className='d-flex justify-content-center'>
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
                      </span>
                    </a>
                  </div>
                  {/*/.Card content*/}
                </div>
                {/*/.Card Light*/}
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className='col-lg-4 col-md-6 mb-4'>
                {/*Card Light*/}
                <div className='card'>
                  {/*Card image*/}
                  <div className='view overlay'>
                    <img
                      src='https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20%2897%29.jpg'
                      className='card-img-top'
                      alt
                    />
                    <a>
                      <div className='mask' />
                    </a>
                  </div>
                  {/*/.Card image*/}
                  {/*Card content*/}
                  <div className='card-body'>
                    {/*Title*/}
                    <h4 className='card-title'>Card title</h4>
                    <hr />
                    {/*Text*/}
                    <p className='card-text'>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a className='link-text'>
                      <h5>
                        Read more <i className='fas fa-chevron-right' />
                      </h5>
                      <span>
                        <span className='d-flex justify-content-center'>
                          <MDBCardFooter>
                            <small className='text-muted'>
                              Last updated 3 mins ago
                            </small>
                          </MDBCardFooter>
                        </span>
                        <span className='d-flex justify-content-center'>
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
                      </span>
                    </a>
                  </div>
                  {/*/.Card content*/}
                </div>
                {/*/.Card Light*/}
              </div>
              {/*Grid column*/}
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

export default LatestNews

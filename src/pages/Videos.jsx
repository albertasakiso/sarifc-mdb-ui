import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

function Videos() {
  return (
    <>
      <NavBar />
      <div>
        <div className='container my-4'>
          <p className='font-weight-bold'>
            Bootstrap embeds is a utility which helps you to insert a video or
            slideshow in the page keeping width of the parent and scales on any
            device.
          </p>
          <p>
            <strong>
              Detailed documentation and more examples you can find in our{' '}
              <a
                href='https://mdbootstrap.com/docs/standard/utilities/embeds/'
                target='_blank'
              >
                Bootstrap Video Docs
              </a>{' '}
            </strong>
          </p>
          <strong>
            <hr className='mt-5' />
            <p>
              Built with{' '}
              <a target='_blank' href='https://mdbootstrap.com/docs/standard/'>
                Material Design for Bootstrap
              </a>{' '}
              - free and powerful Bootstrap UI KIT
            </p>
            <a
              className='btn btn-primary me-2'
              href='https://mdbootstrap.com/docs/standard/getting-started/installation/'
              target='_blank'
              role='button'
            >
              Download MDB UI KIT <i className='fas fa-download' />
            </a>
            <a
              className='btn btn-danger me-2'
              target='_blank'
              href='https://mdbootstrap.com/docs/standard/'
              role='button'
            >
              Learn more
            </a>
            <a
              className='btn btn-success me-2'
              target='_blank'
              href='https://mdbootstrap.com/docs/standard/getting-started/'
              role='button'
            >
              Tutorials
            </a>
            <a
              className='btn btn-dark me-2'
              target='_blank'
              href='https://github.com/mdbootstrap/mdb-ui-kit'
              role='button'
            >
              GitHub <i className='fab fa-github ms-2' />
            </a>
            <hr className='mb-5' />
            <p className='font-weight-bold'>Basic example</p>
            <p>
              Let's wrap any embed like an
              <code>&lt;iframe&gt;</code> in a parent element with
              .embed-responsive and an aspect ratio. The .embed-responsive-item
              isn’t strictly required, but we encourage its use.
            </p>
            <div className='embed-responsive embed-responsive-16by9'>
              <iframe
                className='embed-responsive-item'
                src='https://www.youtube.com/embed/PjGkVCAo8Fw'
                allowFullScreen
              />
            </div>
          </strong>
        </div>
        <strong></strong>
      </div>
      <div>
        <div className='container my-4'>
          <p className='font-weight-bold'>
            Bootstrap embeds is a utility which helps you to insert a video or
            slideshow in the page keeping width of the parent and scales on any
            device.
          </p>
          <p>
            <strong>
              Detailed documentation and more examples you can find in our{' '}
              <a
                href='https://mdbootstrap.com/docs/jquery/utilities/embeds/'
                target='_blank'
              >
                Bootstrap Embeds Docs
              </a>{' '}
            </strong>
          </p>
          <strong>
            <hr />
            <p className='font-weight-bold'>Basic example</p>
            <p>
              Let's wrap any embed like an
              <code>&lt;iframe&gt;</code> in a parent element with
              .embed-responsive and an aspect ratio. The .embed-responsive-item
              isn’t strictly required, but we encourage its use.
            </p>
            <div className='embed-responsive embed-responsive-16by9'>
              <iframe
                className='embed-responsive-item'
                src='https://www.youtube.com/embed/A3PDXmYoF5U'
                allowFullScreen
              />
            </div>
          </strong>
        </div>
        <strong></strong>
      </div>

      <Footer />
    </>
  )
}

export default Videos

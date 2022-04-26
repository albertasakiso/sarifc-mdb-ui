import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

function Videos() {
  return (
    <>
      <NavBar />
      <div>
        <div className='container my-4'>
          <p className='font-weight-bold'>Basic example</p>
          <p>VIDEOS FROM OUR YOUTUBE CHANNEL</p>
          <div className='embed-responsive embed-responsive-16by9'>
            <p>WARM-UP VS ARROW HEADS</p>
            <iframe
              className='embed-responsive-item'
              src='https://www.youtube.com/watch?v=i_kjJ9Jjlcw'
              allowFullScreen
            />
          </div>
          <div className='embed-responsive embed-responsive-16by9'>
            <p>SARI FC COACH BAGS LICENCE 'D' </p>
            <iframe
              className='embed-responsive-item'
              src='https://www.youtube.com/watch?v=II-mZzaMnnw'
              allowFullScreen
            />
          </div>
          <div className='embed-responsive embed-responsive-16by9'>
            <p>Under 13 during training</p>
            <iframe
              className='embed-responsive-item'
              src='https://youtu.be/3UD6F77RPNw'
              allowFullScreen
            />
          </div>
          <div className='embed-responsive embed-responsive-16by9'>
            <p>U-13 Training</p>
            <iframe
              className='embed-responsive-item'
              src='https://youtu.be/5pd9X1Tsl7A'
              allowFullScreen
            />
          </div>
          <div className='embed-responsive embed-responsive-16by9'>
            <p>Dr. Do Good Tournament</p>
            <iframe
              className='embed-responsive-item'
              src='https://youtu.be/ukuBdMgdrqw'
              allowFullScreen
            />
          </div>
        </div>
        <strong></strong>
      </div>

      <Footer />
    </>
  )
}

export default Videos

import React, { useState } from 'react'

import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit'

import sari1 from '../assets/icons/sarifc_logo_new.png'
function History() {
  const [centredModal, setCentredModal] = useState(false)

  const toggleShow = () => setCentredModal(!centredModal)

  return (
    <>
      <NavBar />
      <MDBBtn onClick={toggleShow}>Vertically centered modal</MDBBtn>

      <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Modal title</MDBModalTitle>
              <MDBBtn
                className='btn-close'
                color='none'
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros.
              </p>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>
              <MDBBtn>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
      {/* Central Modal Fluid Success*/}
      <div
        className='modal fade'
        id='centralModalFluidSuccessDemo'
        tabIndex={-1}
        role='dialog'
        aria-labelledby='myModalLabel'
        aria-hidden='true'
      >
        <div
          className='modal-dialog modal-fluid modal-notify modal-success'
          role='document'
        >
          {/*Content*/}
          <div className='modal-content'>
            {/*Header*/}
            <div className='modal-header'>
              <p className='heading lead'>Modal Success</p>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true' className='white-text'>
                  ×
                </span>
              </button>
            </div>
            {/*Body*/}
            <div className='modal-body'>
              <div className='text-center'>
                <i className='fa fa-check fa-4x mb-3 animated rotateIn' />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Impedit iusto nulla aperiam blanditiis ad consequatur in
                  dolores culpa, dignissimos, eius non possimus fugiat. Esse
                  ratione fuga, enim, ab officiis totam.
                </p>
              </div>
              <ul className='list-group z-depth-0'>
                <li className='list-group-item justify-content-between'>
                  Cras justo odio
                  <span className='badge badge-primary badge-pill'>14</span>
                </li>
                <li className='list-group-item justify-content-between'>
                  Dapibus ac facilisis in
                  <span className='badge badge-primary badge-pill'>2</span>
                </li>
                <li className='list-group-item justify-content-between'>
                  Morbi leo risus
                  <span className='badge badge-primary badge-pill'>1</span>
                </li>
                <li className='list-group-item justify-content-between'>
                  Cras justo odio
                  <span className='badge badge-primary badge-pill'>14</span>
                </li>
                <li className='list-group-item justify-content-between'>
                  Dapibus ac facilisis in
                  <span className='badge badge-primary badge-pill'>2</span>
                </li>
                <li className='list-group-item justify-content-between'>
                  Morbi leo risus
                  <span className='badge badge-primary badge-pill'>1</span>
                </li>
              </ul>
            </div>
            {/*Footer*/}
            <div className='modal-footer'>
              <a role='button' className='btn btn-success'>
                Get it now
                <i className='fa fa-diamond ml-1' />
              </a>
              <a
                role='button'
                className='btn btn-outline-success waves-effect'
                data-dismiss='modal'
              >
                No, thanks
              </a>
            </div>
          </div>
          {/*/.Content*/}
        </div>
      </div>
      {/* Central Modal Fluid Success*/}

      <Footer />
    </>
  )
}

export default History

import React, { useState } from 'react'
// import './carousel.css'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBCollapse,
} from 'mdb-react-ui-kit'

import sarifc_logo from '../assets/icons/sarifc_logo_new.png'

function NavBar() {
  const [showBasic, setShowBasic] = useState(false)
  return (
    <MDBNavbar
      // fixed='top'
      expand='lg'
      primary
      bgColor='light'
      breakpoint='sm md lg xl'
      className='fw-bolder'
    >
      <MDBContainer fluid>
        <MDBBtn color='light'>
          <MDBNavbarBrand href='/'>
            <img src={sarifc_logo} height='35' alt='' loading='lazy' />
            SARI FOOTBALL CLUB
          </MDBNavbarBrand>
        </MDBBtn>
        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='fw-6 justify-content-center mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='/'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/ourclub' className='me-2' type='button'>
                Our Club
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/latestnews' className='me-2' type='button'>
                Latest News
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink href='/players' className='me-2' type='button'>
                Players
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink
                href='/resultsfixtures'
                className='me-2'
                type='button'
              >
                Results/Fixutres
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/videos' className='me-2' type='button'>
                Videos
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/pictures' className='me-2' type='button'>
                Pictures
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/leaguetable' className='me-2' type='button'>
                League Table
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/history' className='me-2' type='button'>
                History
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/honors' className='me-2' type='button'>
                Honors
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink href='/contactus' className='me-2' type='button'>
                Contact Us
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>

          {/* <form className='d-flex input-group w-auto'>
              <input
                type='search'
                className='form-control'
                placeholder='Type query'
                aria-label='Search'
              />
              <MDBBtn color='primary'>Search</MDBBtn>
            </form> */}
          <MDBBtn
            className='m-1'
            style={{ backgroundColor: '/3b5998' }}
            href='/'
          >
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn
            className='m-1'
            style={{ backgroundColor: '/55acee' }}
            href='/'
          >
            <MDBIcon fab icon='twitter' />
          </MDBBtn>
          <MDBBtn
            className='m-1'
            style={{ backgroundColor: '/ac2bac' }}
            href='/'
          >
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn
            className='m-1'
            style={{ backgroundColor: '/0082ca' }}
            href='/'
          >
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>
          <MDBBtn
            className='m-1'
            style={{ backgroundColor: '/ed302f' }}
            href='/'
          >
            <MDBIcon fab icon='youtube' />
          </MDBBtn>
          <MDBBtn
            className='m-1'
            style={{ backgroundColor: '/25d366' }}
            href='/'
          >
            <MDBIcon fab icon='whatsapp' />
          </MDBBtn>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  )
}

export default NavBar

import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
const Header = () => {
  return (
    <header>
      <Navbar bg='primary' variant='dark' expand='lg' CollapseOnSelect>
        <Navbar.Brand href='#home'>
          <img
            src='./img/logo_18.svg'
            width='30'
            height='30'
            className='d-inline-block align-top'
            alt=''
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link href='/signin'>
              <i className='fas fa-user'></i> Log in
            </Nav.Link>
            <Nav.Link href='/Aboutus'>
              {' '}
              <i className='fas fa-info'></i> About us
            </Nav.Link>
            <Nav.Link href='/cart'>
              <i className='fas fa-shopping-cart'></i> Cart
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header

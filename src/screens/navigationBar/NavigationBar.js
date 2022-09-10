import React from 'react'
import './navigation.css'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import {navigationLinks} from '../../helpers/navigationLinks'


function createLinks(){
  return navigationLinks.map((e, idx) =>(
    <Nav.Link key={idx} href={e.ref}>{e.name}</Nav.Link>
  ))
}

function NavigationBar() {
  return (
    <div id="home">
        <Navbar className='navigation__container' expand="md">
        <Navbar.Brand style={{marginLeft: '2rem'}} href="#home">Bartosz Oleksy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse style={{justifyContent: 'flex-end', marginLeft:'1rem', borderColor:'none'}}>
        <Nav className='links' style={{margin:'0 2rem'}}>
        {createLinks()}
        </Nav>
        </Navbar.Collapse>
        </Navbar>
    </div>
  )
}

export default NavigationBar
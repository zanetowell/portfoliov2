import React from 'react'
import { Link } from 'react-scroll'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';



function MyNav() {
  return (
    <Navbar bg="" variant='light' expand="lg" fixed='top' id='myNav' className='flex justify-between'>
      <Container>
        <Navbar.Brand id='name'><Link to='about-me' >Zane Towell</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to='about-me' >about</Link></Nav.Link>
            <Nav.Link><Link to='skills' >skills</Link></Nav.Link>
            <Nav.Link><Link to='projects' >projects</Link></Nav.Link>
            <Nav.Link><Link to='contact' >contact</Link></Nav.Link>
            <Nav.Link href='https://docs.google.com/document/d/e/2PACX-1vQ0PP-nZU4PzCAHGi6cxFY7saOU6HBi6fh524lBfj-zoCYvy1MkLCAfHPNM-oho0jajIYd3mT-I36KI/pub' target='_blank' rel='noreferrer'>resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default MyNav
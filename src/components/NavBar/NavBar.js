import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import {  MDBIcon } from 'mdb-react-ui-kit';

// import css
import './NavBar.css'

export default function NavBar() {
  return (
    <div id='nav'>
        <Navbar bg="transparent" expand="lg" style={{backgroundColor: 'lightgray'}}>
        <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="/" id='navtxt'>Home</Nav.Link>
              {/* <Nav.Link href="about" id='navtxt'>About Us</Nav.Link> */}
              <Nav.Link href="client" id='navtxt'>Hire</Nav.Link>
              {/* <Nav.Link href="projects" id='navtxt'>Add car</Nav.Link> */}
              <Nav.Link href="/" id='apptitle'>Hireo</Nav.Link>
              {/* <Nav.Link href="https://instagram.com/githaiga_sn?igshid=ZDdkNTZiNTM=" className='me-4 text-reset' style={{color :'black', width:'40px', height:'40px'}}>
              <MDBIcon color='secondary' fab icon='instagram' />
              </Nav.Link> */}
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  </div>
  )
}

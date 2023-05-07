import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './hire.jpeg';

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
              <Nav.Link href="about" id='navtxt'>About Us</Nav.Link>
              {/* <Nav.Link href="client" id='navtxt'>🚘 Hire</Nav.Link> */}

                <img src={logo} alt='logo' className='Navbar-logo' />

              <Nav.Link href="/" id='apptitle'>ireo</Nav.Link>
              <Nav.Link href="/dashboard" id='navtxt' className='one1'>👤 Admin</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  </div>
  )
}

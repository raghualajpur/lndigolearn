import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './index.css'
import NavDropdown from 'react-bootstrap/NavDropdown';


const Header= () =>{
  return (
    <>
      <Navbar expand="lg" className="bg-navs">
      <Container>
        <Navbar.Brand className='text-light' href="#home">Indigo Learn</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link className=' text-light' href="#home">ACCA</Nav.Link>
            <Nav.Link className=' text-light' href="#link">Placement Asistence</Nav.Link>
            <Nav.Link className=' text-light' href="#home">ACCA Prep Journey</Nav.Link>
            <Nav.Link className='text-light' href="#link">Why Choose Us</Nav.Link>
            <Nav.Link className='text-light' href="#link">Sign Up / Login</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Header
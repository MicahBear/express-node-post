import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
const NavBar = ()=> {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" >

        <Navbar.Brand href="#home" style={{color:"rgb(212, 211, 211)"}}>CRUD</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to="/" class="nav-item" style={{color:"rgb(212, 211, 211)"}}>View</Link></Nav.Link>
            <Nav.Link><Link to="/Insert" class="nav-item" style={{color:"rgb(212, 211, 211)"}}>Insert</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
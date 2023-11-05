import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

function Navbaar() {
  function handleclick(){
  navigate('/Contact');
  }
  const navigate = useNavigate();
  return (
    <Navbar expand="lg" className="container-fluid">
      <Container>
        <Navbar.Brand>Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href ="/">home </Nav.Link>
            <Nav.Link onClick={handleclick} >contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default Navbaar;
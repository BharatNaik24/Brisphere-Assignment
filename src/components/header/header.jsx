import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-white shadow p-3">
      <Container fluid>
        <Navbar.Brand href="/" className="font-bold">
          Brisphere
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#discover" className="font-bold large-font">
              Discover
            </Nav.Link>
            <Nav.Link href="#services" className="large-font">
              Services
            </Nav.Link>
            <Nav.Link href="#pricing" className="large-font">
              About Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

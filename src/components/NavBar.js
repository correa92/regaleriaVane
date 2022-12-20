import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import CarWidget from "./CardWidget";
import "./NavBar.css";
import img from "../img/logoRV.png";

const Logo = () => {
  return (
      <img
        alt="REGALERÍA VANE"
        src={img}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />
  );
};

function NavBar() {
  return (
    <Navbar bg="light" expand="lg" >
      <Container>
        <Navbar.Brand href="#home">
          <Logo/>
          {"  "}
          REGALERÍA VANE
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <NavDropdown title="Categoría" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Decoración</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Indumentaria</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Combos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Otros...</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#ofertas">Ofertas</Nav.Link>
            <Nav.Link href="#nosotros">Nosotros</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>

      <CarWidget/>
      
      
    </Navbar>
  );
}

export default NavBar;

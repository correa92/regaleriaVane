// importaciones desde bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";
import Img from "../../img/logos/logoRV.png";
import CarWidget from "../CarWidget/CarWidget";
import { NavLink, Link } from "react-router-dom";

const Logo = () => {
  return (
    <img
      alt="REGALERÍA VANE"
      src={Img}
      width="30"
      height="30"
      className="d-inline-block align-top"
    />
  );
};

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <Logo />
          {"  "}
          REGALERÍA VANE
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categoría" id="basic-nav-dropdown">
              <Nav.Link>
                <Link to="category/banio">Baño</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="category/cocina">Cocina</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="category/decoracion">Decoración</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="category/juguetes">Juguetes</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="category/libreria">Librería </Link>
              </Nav.Link>

              <NavDropdown.Divider />

              <Nav.Link>
                <Link to="category/otros">Otros...</Link>
              </Nav.Link>
            </NavDropdown>

            <Nav.Link>
              <NavLink to="category/offer">Ofertas</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="category/nosotros">Nosotros</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="category/contacto">Contacto</NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

      <Link to="cart">
        <CarWidget />
      </Link>
    </Navbar>
  );
}

export default NavBar;

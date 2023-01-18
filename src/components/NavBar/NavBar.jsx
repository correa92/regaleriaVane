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

function NavBar() {
  return (
    <div className="container_navBar">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="REGALERÍA VANE"
              src={Img}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            {"  "}
            REGALERÍA VANE
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Categoría" id="basic-nav-dropdown">
                <div className="container-links">
                  <Link to="/">Todos</Link>
                  <Link to="category/offer">Ofertas</Link>
                  <Link to="category/banio">Baño</Link>
                  <Link to="category/cocina">Cocina</Link>
                  <Link to="category/decoracion">Decoración</Link>
                  <Link to="category/juguetes">Juguetes</Link>
                  <Link to="category/libreria">Librería </Link>
                </div>
              </NavDropdown>
              <div className="container-nav">
                <NavLink to="/nosotros">Nosotros</NavLink>
                <NavLink to="/contacto">Contacto</NavLink>
              </div>
            </Nav>
            <Link to="/cart">
              <CarWidget />
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="container_mjsOffer">
        <h4>20% OFF en todos nuestros productos &#128525; </h4>
        <h4>40% OFF en productos seleccionados &#128526; </h4>
      </div>
    </div>
  );
}

export default NavBar;

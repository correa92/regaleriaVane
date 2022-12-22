import * as React from 'react';

// importaciones desde bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";
import Img from "../img/logoRV.png";

// importaciones desde MATERIAL UI
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

function CarWidget() {
  return (
   <div className='cw'>
    <IconButton aria-label="cart" href='#carrito'>
      <StyledBadge badgeContent={4} color={'primary'}>
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
   </div>
  );
}


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
              <NavDropdown.Item href="#decoracion">Decoración</NavDropdown.Item>
              <NavDropdown.Item href="#indumentaria">Indumentaria</NavDropdown.Item>
              <NavDropdown.Item href="#combos">Combos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#otros">Otros...</NavDropdown.Item>
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

import "./ItemDetail.css";
import CardActions from "@mui/material/CardActions";
import PaidIcon from "@mui/icons-material/Paid";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import Contador from "../Contador/Contador";
import { Link } from "react-router-dom";
import { contexto } from "../../Context/CartContext";
import { useContext } from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import Stack from "@mui/material/Stack";

export default function ItemDetail({ item }) {
  const { addItem } = useContext(contexto);

  let porcentajeDescuento = 0;

  if (item.offer === true) {
    porcentajeDescuento = 40;
  } else {
    porcentajeDescuento = 20;
  }

  const descuento = item.price - (item.price * porcentajeDescuento) / 100;
  const cuotas = (descuento / 3).toFixed(2);

  function onAdd(cantidadProducto) {
    addItem(item, descuento, cantidadProducto);
  }

  return (
    <div className="itemDetail">
      <div className="imgContainer">
        <img
          src={
            item.category
              ? require(`../../../img/${item.category}/${item.img}`)
              : undefined
          }
          alt={item.name}
        />
      </div>

      <div className="container_info">
        <div className="container_title_offer--Detail">
          <h3>{item.name}</h3>
          {item.offer === "true" ? (
            <LocalOfferIcon color="success" />
          ) : undefined}
        </div>

        <Typography
          variant="h5"
          component="div"
          sx={{
            borderRadius: "1px",
            textAlign: "length",
            fontWeight: 700,
            padding: 1,
          }}
        >
          Precio: $ {descuento} &#128523;
        </Typography>

        <Typography
          variant="h6"
          component="div"
          sx={{
            borderRadius: "1px",
            textAlign: "lenght",
            fontWeight: 500,
            padding: 1,
          }}
        >
          $ <strike>{item.price}</strike>{" "}
          <span className="precio_lista">{porcentajeDescuento}% OFF</span>
        </Typography>

        <p className="cuotas">
          <b>3</b> cuotas <b>SIN INTERES</b> de <b>$ {cuotas}</b>
        </p>

        <h5>Descripción:</h5>
        <p>{item.description}</p>
        <h5>{item.stock > 0 ? "En stock" : "Sin stock"}</h5>

        <Stack direction="column">
          <Contador stock={item.stock} fn={onAdd} />

          <CardActions
            className="container_button"
            sx={{ justifyContent: "length" }}
          >
            <Button
              variant="contained"
              startIcon={<ArrowCircleLeftIcon />}
              sx={{ background: "yellowgreen" }}
            >
              <Link to="/" style={{ color: "#fff" }}>
                Ir a tienda
              </Link>
            </Button>
            <Button variant="contained" startIcon={<PaidIcon />}>
              <Link to="/cart" style={{ color: "#fff" }}>
                {" "}
                Ir al carrito
              </Link>
            </Button>
          </CardActions>
        </Stack>
      </div>
    </div>
  );
}

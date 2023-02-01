import "./Item.css";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import Button from "@mui/material/Button";

export default function Item(props) {
  let porcentajeDescuento = 0;

  if (props.offer === true) {
    porcentajeDescuento = 40;
  } else {
    porcentajeDescuento = 20;
  }

  const descuento = props.price - (props.price * porcentajeDescuento) / 100;

  return (
    <Card
      sx={{
        maxWidth: 350,
        margin: 1.5,
        marginBottom: 2,
        boxShadow: "5px 5px 12px 0px rgba(0,0,0,0.62);",
        borderRadius: "20px",
      }}
    >
      <CardMedia
        component="img"
        height={300}
        src={require(`../../../img/${props.category}/${props.img}`)}
        alt={props.name}
      />
      <div className="container_title_offer">
        <h3>{props.name}</h3>
        {props.offer === true ? <LocalOfferIcon color="success" /> : undefined}
      </div>

      <div className="container_prices">
        <Typography
          variant="h5"
          component="div"
          sx={{
            borderRadius: "1px",
            textAlign: "center",
            fontWeight: 700,
          }}
        >
          $ {descuento}
        </Typography>

        <Typography
          variant="h6"
          component="div"
          sx={{
            borderRadius: "1px",
            textAlign: "center",
            fontWeight: 700,
          }}
        >
          $ <strike>{props.price}</strike>{" "}
          <span className="precio_lista">{porcentajeDescuento}% OFF</span>
        </Typography>
      </div>

      <CardActions sx={{ justifyContent: "space-evenly" }}>
        <Link to={`/item/${props.id}`}>
          <Button variant="contained">Ver producto</Button>
        </Link>
      </CardActions>
    </Card>
  );
}

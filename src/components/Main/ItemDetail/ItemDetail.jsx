import "./ItemDetail.css";
import CardActions from "@mui/material/CardActions";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PaidIcon from "@mui/icons-material/Paid";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import Contador from "../Contador/Contador"
;
export default function ItemDetail({ item }) {

   
  let porcentajeDescuento = 0;

  if (item.offer === "true") {
    porcentajeDescuento = 40;
  } else {
    porcentajeDescuento = 20;
  }

  // descuentos
  const descuento = item.price - (item.price * porcentajeDescuento) / 100;
  const cuotas = (descuento / 3).toFixed(2);

  const onAdd = (cantidad)=>{
    console.log(cantidad);
  };


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
        <p>
          {" "}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
          voluptatibus tenetur itaque quod, eos eligendi voluptatum nostrum,
          aspernatur ullam rem quam ipsum amet a possimus in iusto similique
          iste eius.
        </p>
        <h5>{item.stock > 0 ? "En stock" : "Sin stock"}</h5>
        
        
        <Contador stock={item.stock} fn={onAdd}/>

        <CardActions
          className="container_button"
          sx={{ justifyContent: "space-evenly" }}
        >

          <Button
            variant="contained"
            startIcon={<PaidIcon />}
            onClick={() => {
              console.log("comprando");
            }}
          >
            Comprar
          </Button>
        </CardActions>
      </div>
    </div>
  );
}

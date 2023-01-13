import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import IconButton from "@mui/material/IconButton";
import PaidIcon from "@mui/icons-material/Paid";
import { Typography } from "@mui/material";
import "./ItemDetail.css";

export default function ItemDetail({item}) {
  const porcentajeDescuento = 20;
  const descuento = item.price - (item.price * porcentajeDescuento) / 100;
  const cuotas =(item.price /12);

  return (
    <div className="itemDetail">
      <div className="imgContainer">
        <img
          src={ item.category ? require(`../../img/${item.category}/${item.img}`) : undefined}
          alt={item.name}
        />
      </div>

      <div className="container_info">
        <CardHeader title={item.name}  sx={{ textAlign: "center"}}/>

        <Typography
          variant="h6"
          component="div"
          sx={{
            borderRadius: "1px",
            textAlign: "lenght",
            fontWeight: 500,
            padding: 1
          }}>
          Precio de lista: <span className="precio_lista">$ <strike>{item.price}</strike></span> 
        </Typography>

        <Typography
          variant="h5"
          component="div"
          sx={{
            borderRadius: "1px",
            textAlign: "length",
            fontWeight: 700,
            padding: 1
          }}>
          PRECIO: $ {descuento}
        </Typography>

        <p className="cuotas"><b>12</b> cuotas <b>SIN INTERES</b> de <b>$ {cuotas}</b></p>

        <h5>Descripción:</h5>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
          voluptatibus tenetur itaque quod, eos eligendi voluptatum nostrum,
          aspernatur ullam rem quam ipsum amet a possimus in iusto similique
          iste eius!
        </p>
        <h5>STOCK: {item.stock > 0 ? "SI" : "NO"}</h5>
          
        <CardActions className="container_button" sx={{ justifyContent: "space-evenly" }}>
          <IconButton aria-label="buy">
            <PaidIcon />
          </IconButton>
          <IconButton>
            <AddShoppingCartIcon aria-label="addCar" />
          </IconButton>
        </CardActions>
      </div>
    </div>
  );
}

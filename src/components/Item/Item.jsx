import "./Item.css";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Props(props) {

  const porcentajeDescuento = 20;
  const descuento = props.price - (props.price * porcentajeDescuento) / 100;
  const cuotas =(props.price /12);

  return (
    <Card
      sx={{
        maxWidth: 350,
        margin: 1.5,
        marginBottom: 2,
        boxShadow: "5px 5px 12px 0px rgba(0,0,0,0.62);",
        borderRadius: "20px"
      }}
    >
      <CardMedia
        component="img"
        height={300} 
        src={require(`../../img/${props.category}/${props.img}`)}
        alt={props.name}
      />
      <CardHeader title={props.name}/>

      <CardActions>
      <Typography
          variant="h6"
          component="div"
          sx={{
            borderRadius: "1px",
            textAlign: "right",
            fontWeight: 700
          }}
        >
         Precio de lista: <span className="precio_lista">$ <strike>{props.price}</strike></span> 
        </Typography>
      </CardActions>

      <CardActions sx={{ justifyContent: "space-evenly" }}>
        <IconButton aria-label="add to favorites" >
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Link to={`/detail/${props.id}`}>
            <IconButton aria-label="addCar">
              <AddCircleIcon />
            </IconButton>
        </Link>

        <Typography
          variant="h5"
          component="div"
          sx={{
            borderRadius: "1px",
            textAlign: "right",
            fontWeight: 700,
          }}
        >
          $ {descuento}
        </Typography>
        
      </CardActions>
      
    </Card>
  );
}

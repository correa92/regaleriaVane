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

export default function ItemDetail({ item }) {
 
  return (
    <div className="itemDetail">
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
        // src={require(`../../img/${item.category}/${item.img}`)}
        alt={item.name}
      />
      <CardHeader title={item.name}/>
      <h5>Descripción:</h5>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, voluptatibus tenetur itaque quod, eos eligendi voluptatum nostrum, aspernatur ullam rem quam ipsum amet a possimus in iusto similique iste eius!</p>

      <CardActions sx={{ justifyContent: "space-evenly" }}>
        <IconButton aria-label="add to favorites" >
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Link to={`/detail/${item.id}`}>
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
          $ {item.price}
        </Typography>
      </CardActions>

    </Card>
    </div>
  );
}

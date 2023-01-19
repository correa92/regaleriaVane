import CardActions from "@mui/material/CardActions";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function Contador({ stock, fn }) {
  const [cantidad, setCantidad] = useState(1);

  function suma() {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  }

  function resta() {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  }

  // const aumenta = (cant) => {
  //   fn(cantidad);
  // };

  return (
    <CardActions>
      <Button variant="contained" onClick={resta}>
        <RemoveIcon aria-label="remove" />{" "}
      </Button>

      <p style={{ margin: "1rem" }}>{cantidad}</p>
      {cantidad === stock ? undefined : (
        <Button variant="contained" sx={{ margin: "0" }} onClick={suma}>
          <AddIcon />
        </Button>
      )}

      <Button
        variant="contained"
        startIcon={<AddShoppingCartIcon aria-label="addCar" />}
        onClick={() => {
          fn(cantidad)
        }}
      >
        Agregar
      </Button>
      
    </CardActions>
  );
}

import { useContext } from "react";
import { contexto } from "../../Context/CartContext";
import "./Cart.css";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import CardActions from "@mui/material/CardActions";
import PaidIcon from "@mui/icons-material/Paid";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function Cart() {
  const resultado = useContext(contexto);

  const { carrito, total, removeItem, clear } = resultado;

  return (
    <div className="container_carrito">
      <h3>CARRITO DE COMPRAS</h3>

      <TableContainer component={Paper} className="container_table">
        <Table
          sx={{ minWidth: "auto", maxWidth: 1000 }}
          aria-label="spanning table"
        >
          <TableHead className="tabla_carrito">
            <TableRow>
              <TableCell align="center" colSpan={3}>
                Detalle
              </TableCell>

              <TableCell align="right">Precio</TableCell>
              <TableCell align="right">Acción</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Producto</TableCell>
              <TableCell align="center">Precio Unitario</TableCell>
              <TableCell align="center">Cantidad</TableCell>
              <TableCell align="right">Subtotal</TableCell>
              <TableCell align="right">
                <CardActions sx={{ justifyContent: "right" }}>
                  <Button
                    variant="contained"
                    startIcon={<DeleteOutlineIcon />}
                    sx={{ background: "#eb2f06" }}
                    onClick={() => {
                      clear();
                    }}
                  >
                    Vaciar Carrito
                  </Button>
                </CardActions>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody className="tabla_carrito-body">
            {carrito.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell align="center">$ {row.price}</TableCell>
                <TableCell align="center">{row.cantidad}</TableCell>
                <TableCell align="right">$ {row.subtotal}</TableCell>
                <TableCell align="right">
                  <CardActions sx={{ justifyContent: "right" }}>
                    <Button
                      variant="contained"
                      startIcon={<DeleteIcon />}
                      sx={{ background: "#eb2f06" }}
                      onClick={() => {
                        removeItem(row);
                      }}
                    >
                      Eliminar
                    </Button>
                  </CardActions>
                </TableCell>
              </TableRow>
            ))}

            <TableRow className="tabla_resultado">
              <TableCell colSpan={2} />
              <TableCell align="center" colSpan={1}>
                Total
              </TableCell>
              <TableCell align="right" colSpan={1}>
                {" "}
                $ {total}
              </TableCell>
              <TableCell align="right" colSpan={1}>
                <CardActions sx={{ justifyContent: "right" }}>
                  {carrito.length === 0 ? undefined : (
                    <Button variant="contained" startIcon={<PaidIcon />}>
                      <Link to="/cart" style={{ color: "#fff" }}>
                        Comprar
                      </Link>
                    </Button>
                  )}
                </CardActions>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

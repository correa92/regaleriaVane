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
import { Link, useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { addDoc, serverTimestamp } from "firebase/firestore";
import { salesCollection } from "../../../firebaseConfig";
import { v4 } from "uuid";
import Alert from "../../Alert/Alert";
import Alert2 from "../../Alert2/Alert2";
import { Stack } from "@mui/material";

const Buttons = ({ login, cart, fn }) => {
  if (login && cart.length !== 0) {
    return (
      <Button variant="contained" startIcon={<PaidIcon />} onClick={fn}>
        COMPRAR
      </Button>
    );
  } else if (!login && cart.length !== 0) {
    return (
      <Button variant="contained" startIcon={<PaidIcon />}>
        <Link to="/validation" style={{ color: "#fff" }}>
          REGISTRAR
        </Link>
      </Button>
    );
  }
};

export default function Cart() {
  const resultado = useContext(contexto);
  const navigate = useNavigate();
  const { carrito, total, removeItem, user, clear, validationUser } = resultado;

  const handleCompra = () => {
    const compra = {
      cliente: {
        email: user.email,
        telefono: user.movil,
      },
      carrito,
      total,
      ticket_local: v4(),
      fecha: serverTimestamp(),
    };

    const pedido = addDoc(salesCollection, compra);

    pedido
      .then((result) => {
        Alert("COMPRA REGISTRADA", "success");
        Alert2(
          `Su compra se registró con el id: ${result.id} \n Gracias por su compra!`
        );
        clear();
        navigate("/");
      })
      .catch((er) => {
        Alert(er,"error")
      });
  };

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
              {carrito.length === 0 ? undefined : (
                <TableCell align="right">Acción</TableCell>
              )}
            </TableRow>

            <TableRow>
              <TableCell>Producto</TableCell>
              <TableCell align="center">Precio Unitario</TableCell>
              <TableCell align="center">Cantidad</TableCell>
              <TableCell align="right">Subtotal</TableCell>
              {carrito.length === 0 ? undefined : (
                <TableCell align="right">
                  <CardActions sx={{ justifyContent: "right" }}>
                    <Button
                      variant="contained"
                      startIcon={<DeleteOutlineIcon />}
                      sx={{ background: "#eb2f06" }}
                      onClick={() => {
                        clear("SE VACIÓ EL CARRITO");
                      }}
                    >
                      Vaciar Carrito
                    </Button>
                  </CardActions>
                </TableCell>
              )}
            </TableRow>
          </TableHead>

          <TableBody className="tabla_carrito-body">
            {carrito.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} align="center" sx={{ color: "red" }}>
                  <h3>EL CARRITO SE ENCUENTRA VACÍO</h3>
                </TableCell>
              </TableRow>
            ) : (
              carrito.map((row) => (
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
              ))
            )}

            <TableRow className="tabla_resultado">
              <TableCell colSpan={2} />
              <TableCell align="center" colSpan={1}>
                Total
              </TableCell>
              <TableCell align="right" colSpan={1}>
                {" "}
                $ {total}
              </TableCell>
              <TableCell align="right" colSpan={1}></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Stack>
        <CardActions sx={{ justifyContent: "right" }}>
          <Button
            variant="contained"
            startIcon={<ArrowCircleLeftIcon />}
            sx={{ background: "yellowgreen" }}
          >
            <Link to="/" style={{ color: "#fff" }}>
              Ir a tienda
            </Link>
          </Button>

          <Buttons login={validationUser} cart={carrito} fn={handleCompra} />
        </CardActions>
      </Stack>
    </div>
  );
}

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Stack } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useContext } from "react";
import { contexto } from "../Context/CartContext";
import Alert from "../Alert/Alert";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const resultado = useContext(contexto);
  const { login } = resultado;
  const navigate = useNavigate();

  const registrar = (e) => {
    e.preventDefault();
    const user = {
      email: e.target.form[0].value,
      password: e.target.form[2].value,
      movil: e.target.form[4].value,
    };
    login(user);
    Alert("Inicio sesión correctamente",'success');
    navigate("/cart");
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "35ch" },
          margin: "1rem",
        }}
        display="flex"
        justifyContent="center"
        autoComplete="on"
      >
        <Stack>
          <TextField
            variant="outlined"
            required
            id="form_email"
            label="Email"
            name="email"
          />

          <TextField
            variant="outlined"
            required
            id="form_password"
            type="password"
            label="Password"
            name="password"
            autoComplete="current-password"
          />

          <TextField
            variant="outlined"
            required
            id="form_movil"
            type="number"
            label="Teléfono"
            name="movil"
          />

          <Button
            type="submit"
            variant="contained"
            startIcon={<AccountCircleIcon />}
            sx={{ margin: "1rem" }}
            onClick={(e) => {
              registrar(e);
            }}
          >
            ingresar
          </Button>
        </Stack>
      </Box>
    </>
  );
}

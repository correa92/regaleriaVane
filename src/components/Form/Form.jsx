import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Stack } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useContext } from "react";
import { contexto } from "../Context/CartContext";
import Alert from "../Alert/Alert";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Form() {
  const resultado = useContext(contexto);
  const { login, validationUser } = resultado;
  const navigate = useNavigate();
  const [verificaEmail, setVerificaEmail] = useState(false);
  const [email, setEmail] = useState("");
  const [email2, setEmail2] = useState("");
  const [password, setPassword] = useState("");
  const [movil, setMovil] = useState("");

  const registrar = (e) => {
    e.preventDefault();

    if (email === email2 && email !== "") {
      const user = {
        email,
        password,
        movil,
      };
      login(user);
      Alert("Inicio sesión correctamente", "success");
      navigate("/cart");
    } else {
      setVerificaEmail(true);
    }
  };

  return (
    <>
      {validationUser ? (
        <h3 style={{ display: "grid", placeItems: "center", height: "200px" }}>
          YA SE ENCUENTRA LOGUEADO
        </h3>
      ) : (
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "35ch" },
            margin: "1rem",
          }}
          display="flex"
          justifyContent="center"
          autoComplete="off"
          noValidate
        >
          <Stack>
            <TextField
              variant="outlined"
              required={true}
              id="form_email"
              label="Email"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <TextField
              variant="outlined"
              required={true}
              error={verificaEmail}
              id="form_repetir-email"
              label="Repetir Email"
              name="repetir-email"
              onChange={(e) => setEmail2(e.target.value)}
            />
            {verificaEmail && (
              <p
                style={{
                  color: "red",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Verifique que el email sea el mismo
              </p>
            )}

            <TextField
              variant="outlined"
              required={true}
              id="form_password"
              type="password"
              label="Password"
              name="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <TextField
              variant="outlined"
              required={true}
              id="form_movil"
              type="number"
              label="Teléfono"
              name="movil"
              onChange={(e) => setMovil(e.target.value)}
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
      )}
    </>
  );
}

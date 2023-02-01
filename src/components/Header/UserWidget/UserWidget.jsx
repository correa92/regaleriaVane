import { useContext } from "react";
import { contexto } from "../../Context/CartContext";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Stack } from "@mui/material";

export default function UserWidget() {
  const resultado = useContext(contexto);
  const { validationUser } = resultado;
  return (
    <Stack
      direction="row"
      sx={{
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "3px",
        height: "100%",
      }}
    >
      <AccountCircleIcon sx={{margin:'5px'}} />
      {validationUser ? (
        <p style={{ margin: "0"}}>Activo</p>
      ) : (
        <p style={{ margin: "0"}}>Inactivo</p>
      )}
    </Stack>
  );
}

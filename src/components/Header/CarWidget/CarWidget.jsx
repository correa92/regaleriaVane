// importaciones desde MATERIAL UI
import "./CarWidget.css";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { contexto } from "../../Context/CartContext";
import { useContext } from "react";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function CarWidget() {
  const { cantidadTotal } = useContext(contexto);

  return (
    <div className="cw">
      <StyledBadge badgeContent={cantidadTotal} color="primary">
        <ShoppingCartIcon />
      </StyledBadge>
    </div>
  );
}

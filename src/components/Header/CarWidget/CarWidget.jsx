// importaciones desde MATERIAL UI
import "./CarWidget.css";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function CarWidget() {
  return (
    <div className="cw">
      <StyledBadge badgeContent={4} color="primary">
        <ShoppingCartIcon />
      </StyledBadge>
    </div>
  );
}

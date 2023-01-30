import { Typography } from "@mui/material";
import './WeContainer.css';

export default function WeContainer() {
  return (
    <div className="container_we">
      <Typography variant="h5" component="h5" align="center">
        ¿QUIÉNES SOMOS?
      </Typography>
      <Typography
        variant="overline"
        component="p"
        align="center"
        paragraph={true}
      >
        Somos un grupo de personas motivadas por brindar un servicio integral de
        excelencia, acompañando a cada cliente en toda su experiencia de compra:
        desde el primer clic hasta recibir su pedido. Nos encanta estar
        comunicados con cada cliente!
      </Typography>
      <Typography variant="h5" component="h5" align="center">
        NUESTROS PRODUCTOS
      </Typography>
      <Typography
        variant="overline"
        component="p"
        align="center"
        paragraph={true}
      >
        Utilizamos materiales de excelente calidad y probamos cada producto que
        comercializamos. Estamos en cada detalle y nos apasiona innovar.
      </Typography>
      <Typography variant="h5" component="h5" align="center">
        EMBALAJE
      </Typography>
      <Typography
        variant="overline"
        component="p"
        align="center"
        paragraph={true}
      >
        Nos tomamos el tiempo necesario para embalar, encargandonos de que tu
        paquete quede perfectamente protegido en todo el proceso de envio.
        Hacemos envíos a toda la Argentina.
      </Typography>
    </div>
  );
}

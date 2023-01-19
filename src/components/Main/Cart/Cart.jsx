import { useContext } from "react";
import {contexto} from "../../Context/CartContext";


export default function Cart() {

  const resultado = useContext(contexto);
 
console.log(resultado);
  return (
    <div>
      <h1>Estoy en carrito</h1>
      <p>{JSON.stringify(resultado)}</p>
    </div>
  );
}

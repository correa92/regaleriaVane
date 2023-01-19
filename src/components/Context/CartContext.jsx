import { createContext, useState } from "react";

export const contexto = createContext();

const Provider = contexto.Provider;

export default function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState([]);
  const [cantidad, setCantidad] = useState(0);
  const [total, setTotal] = useState(0);

  
  const defaultContextValue = {
    carrito,
    cantidad,
    total
    // agregarProducto
  };
  
  // function agregarProducto(producto) {
    
  //   setCarrito([producto])
  //   setCantidad(cantidad)
  //   setTotal(producto.precio * producto.cantidad);

  // }


  // function addItem(item, cantidad) {
  //   console.log("add item");
  // }

  // function removeItem(itemId) {
  //   console.log('remueve item');
  // }

  //   function clear() {
  //   console.log('remueve todo los items');
  //   }

  //   function isInCart(itemId) {
  //     console.log('true, false');
  //   }

  return <Provider value={defaultContextValue}>{children}</Provider>;
}

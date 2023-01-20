import { createContext, useState } from "react";
import Alert from "../Alert/Alert";

export const contexto = createContext();

const Provider = contexto.Provider;

export default function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState([]);
  const [cantidadTotal, setCantidadTotal] = useState(0);
  const [total, setTotal] = useState(0);

  const valoresContexto = {
    carrito,
    cantidadTotal,
    total,
    addItem,
    removeItem,
    clear,
  };

  function addItem(producto, descuento, cantidadProducto) {
    let contenido = false;

    // verifica si el carrito ya tiene el producto antes de agregarlo
    for (let i = 0; i < carrito.length; i++) {
      if (carrito[i].id === producto.id) {
        contenido = true;
      }
    }

    if (!contenido) {
      const productoAlCarrito = {
        id: producto.id,
        name: producto.name,
        price: descuento,
        cantidad: cantidadProducto,
        subtotal: descuento * cantidadProducto,
      };

      // setCarrito(carrito.concat(productoAlCarrito));
      setCarrito([...carrito, productoAlCarrito]);
      setCantidadTotal(cantidadTotal + cantidadProducto);
      setTotal(total + descuento * cantidadProducto);
      Alert("SE AGREGÓ AL CARRITO", "success");
    } else {
      Alert("EL PRODUCTO YA SE ENCUENTRA EN CARRITO", "warning");
    }
  }

  function removeItem(item) {
    const newCarrito = carrito.filter((producto) => producto.id !== item.id);
    setCarrito(newCarrito);
    setCantidadTotal(cantidadTotal - item.cantidad);
    setTotal(total - item.subtotal);
    Alert("PRODUCTO ELIMINADO DEL CARRITO", "success");
  }

  function clear() {
    setCarrito([]);
    setCantidadTotal(0);
    setTotal(0);
    Alert("SE VACIÓ EL CARRITO", "success");
  }

  return <Provider value={valoresContexto}>{children}</Provider>;
}
import { createContext } from "react";

export const contexto = createContext();
const { Provider } = contexto;

export default function CustomProvider({children}) {
  const defaultContextValue = {
    carrito: [],
    total: 0,
  };

  return <Provider value={defaultContextValue}>
    {children}
    </Provider>;
}

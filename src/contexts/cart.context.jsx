import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: {
    isOpen: null,
    items:[]
  },
  setCart: () => {}
});

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState({isOpen: false, items:[]});
  const value = {cart, setCart}
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

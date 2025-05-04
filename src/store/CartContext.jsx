import { useState } from "react";
import { createContext } from "react";

const CartContext = createContext({
  cart: [],
  addToCart: (item) => {},
  removeFromCart: (item) => {},
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    setCart((prevCart) => [item, ...prevCart]);
  };

  const handleRemoveFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cart: cart,
        handleAddToCart,
        handleRemoveFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;

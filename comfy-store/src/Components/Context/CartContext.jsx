import { createContext, useState, useContext } from "react";
import toast from "react-hot-toast";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);

      if (existing) {
        toast.success("quantity increased");
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
        );
      }

      toast.success("item Added to Cart");

      return [
        ...prev,
        {
          ...item,
          quantity: 1,
          cartId: crypto.randomUUID(),
        },
      ];
    });
  }

  function increaseQuantity(cartId) {
    setCart((prev) =>
      prev.map((item) => {
        if (item.cartId === cartId) {
          toast.success(`${item.title} quantity increased`);
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      }),
    );
  }

  function decreaseQuantity(cartId) {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.cartId === cartId) {
            toast.success(`${item.title} Qauntity Decreased`);
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((item) => item.quantity > 0),
    );
  }

  const removeFromCart = (cartId) => {
    toast.error("Item removed");
    setCart((prevCart) => prevCart.filter((item) => item.cartId !== cartId));
  };

  const clearCart = () => {
    toast.success("Cart cleared");
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  //   function addToCart(item) {
  //     setCart((prev) => [
  //       ...prev,
  //       {
  //         id: item.id,
  //         title: item.title,
  //         price: item.price,
  //         image: item.image,
  //         description: item.description,
  //         cartId: crypto.randomUUID(),
  //       },
  //     ]);
  //   }

  function addToCart(item) {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);

      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
        );
      }

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
      prev.map((item) =>
        cartId === item.cartId
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    );
  }

  function decreaseQuantity(cartId) {
    setCart((prev) =>
      prev
        .map((item) =>
          cartId === item.cartId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  const removeFromCart = (cartId) => {
    setCart((prevCart) => prevCart.filter((item) => item.cartId !== cartId));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

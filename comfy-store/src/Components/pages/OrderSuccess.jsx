import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { useEffect, useState } from "react";

export default function OrderSuccess() {
  const { cart, clearCart } = useCart();
  const [orderItems, setorderItems] = useState([]);
  const total = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  useEffect(() => {
    setorderItems(cart);
    setTimeout(() => {
      clearCart();
    }, 500); // 500ms delay
  }, []); // run only once

  return (
    <main className="min-h-screen bg-base-200 p-10 flex flex-col items-center">
      <div className="card bg-base-100 shadow-xl p-10 text-center">
        <h1 className="text-4xl font-bold text-green-600 mb-6">
          Order Placed Successfully!
        </h1>

        <p className="text-lg mb-6">
          Thank you for your purchase. Your order is being processed.
        </p>
        <div className="card bg-base-100 shadow-xl p-6 mb-10 w-full max-w-xl">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>

          {orderItems.map((item) => (
            <div key={item.cartId} className="mb-4">
              <p className="font-semibold">{item.title}</p>
              <p className="text-gray-600">
                {item.quantity} × ₹{item.price}
              </p>
            </div>
          ))}

          <h2 className="text-xl font-bold mt-4">Total: ₹{total}</h2>
        </div>

        <div className="flex flex-col gap-4">
          <Link to="/products" className="btn btn-primary">
            Continue Shopping
          </Link>

          <Link to="/" className="btn btn-outline">
            Go to Home
          </Link>
        </div>
      </div>
    </main>
  );
}

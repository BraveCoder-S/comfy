import { useCart } from "../Context/CartContext";
import { Link } from "react-router-dom";

export default function Checkout() {
  const { cart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="min-h-screen bg-base-200 p-10">
      <h1 className="text-4xl font-bold mb-10">Checkout</h1>

      {/* ORDER SUMMARY */}
      <div className="card bg-base-100 shadow-xl p-6 mb-10">
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>

        {cart.map((item) => (
          <div key={item.cartId} className="mb-4">
            <p className="font-semibold">{item.title}</p>
            <p className="text-gray-600">
              {item.quantity} × ₹{item.price}
            </p>
          </div>
        ))}

        <h2 className="text-xl font-bold mt-4">Total: ₹{total}</h2>
      </div>

      {/* USER DETAILS */}
      <div className="card bg-base-100 shadow-xl p-6 mb-10">
        <h2 className="text-2xl font-bold mb-4">Your Details</h2>

        <input
          type="text"
          placeholder="Full Name"
          className="input input-bordered w-full mb-4"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="input input-bordered w-full mb-4"
        />

        <textarea
          placeholder="Shipping Address"
          className="textarea textarea-bordered w-full mb-4"
        ></textarea>
      </div>

      {/* PLACE ORDER */}
      <Link to="/order-success" className="btn btn-success w-full text-lg">
        Place Order
      </Link>
    </main>
  );
}

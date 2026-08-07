import { useCart } from "../Context/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  return (
    <main className="min-h-screen bg-base-200 p-10">
      <h1 className="text-4xl font-bold mb-10">Your Cart</h1>

      {cart.length === 0 && <p>the cart was empty</p>}

      {cart.map((item) => (
        <div key={item.cartId} className="card bg-base-100 shadow-xl p-5 mb-5">
          <h2 className="text-xl font-bold">{item.title}</h2>
          <p className="text-gray-600">{item.description}</p>
          <p className="text-lg font-semibold">${item.price}</p>
          <button
            className="btn btn-error btn-sm"
            onClick={() => removeFromCart(item.cartId)}
          >
            Remove
          </button>
        </div>
      ))}
      <>
        <h2 className="text-xl font-bold mt-6">Total: ₹{total}</h2>
      </>
    </main>
  );
}

import { useCart } from "../Context/CartContext";

export default function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="min-h-screen bg-base-200 p-10">
      <h1 className="text-4xl font-bold mb-10">Your Cart</h1>

      {cart.length === 0 && <p>the cart was empty</p>}

      {cart.map((item) => (
        <div key={item.cartId} className="card bg-base-100 shadow-xl p-5 mb-5">
          <h2 className="text-xl font-bold">{item.title}</h2>
          <p className="text-gray-600">{item.description}</p>
          <p className="text-md font-semibold">
            Subtotal: ${item.price * item.quantity}
          </p>
          <div className="flex items-center gap-4 mt-3 mb-4">
            <button
              onClick={() => decreaseQuantity(item.cartId)}
              className="px-3 py-1 bg-gray-300 rounded"
            >
              –
            </button>

            <span className="text-lg font-semibold">{item.quantity}</span>

            <button
              onClick={() => increaseQuantity(item.cartId)}
              className="px-3 py-1 bg-gray-300 rounded"
            >
              +
            </button>
          </div>
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
        {cart.length > 0 && (
          <button
            className="btn btn-warning mt-6"
            onClick={() =>
              document.getElementById("clearCartModal").showModal()
            }
          >
            Clear Cart
          </button>
        )}
      </>

      <dialog id="clearCartModal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Clear Cart?</h3>
          <p className="py-4">This action cannot be undone.</p>

          <div className="modal-action">
            <button
              className="btn btn-error"
              onClick={() => {
                clearCart();
                document.getElementById("clearCartModal").close();
              }}
            >
              Yes, Clear
            </button>

            <button
              className="btn"
              onClick={() => document.getElementById("clearCartModal").close()}
            >
              Cancel
            </button>
          </div>
        </div>
      </dialog>
    </main>
  );
}

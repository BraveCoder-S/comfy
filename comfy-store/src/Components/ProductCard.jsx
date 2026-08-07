import { useCart } from "./Context/CartContext";

export default function ProductCard({ item }) {
  const { addToCart } = useCart();

  const { id, title, description, price, image } = item;

  return (
    <div key={id} className="card bg-base-100 shadow-xl p-5">
      <figure>
        <img src={image} alt={title} className="rounded-xl" />
      </figure>

      <div className="mt-5">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>

        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold">${price}</span>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => addToCart(item)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

import { useCart } from "./Context/CartContext";
export default function ProductCard({ item }) {
  const { addToCart } = useCart();
  const { id, title, description, price, image } = item;

  return (
    <div class="bg-base-100 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-5">
      <img
        src={image}
        alt={title}
        className="h-40 w-full object-cover rounded-lg mb-4"
      />
      <h2 className="text-lg font-semibold mb-1">{title}</h2>
      <p className="text-gray-500 text-sm mb-4">{description}</p>
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-primary">${price}</span>

        <button
          className="btn btn-primary btn-sm"
          onClick={() => addToCart(item)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

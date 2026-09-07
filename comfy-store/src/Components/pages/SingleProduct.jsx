import { useFilterContext } from "../Context/FilteredContext";
import { useCart } from "../Context/CartContext";
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";

export default function SingleProduct() {
  const { id } = useParams();
  const { products } = useFilterContext();
  const { addToCart } = useCart();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <h2 className="text-center mt-20">Product not found</h2>;
  }

  return (
    <main className="min-h-screen bg-base-200 px-5 py-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10">
        {/* LEFT: Image */}
        <div className="flex-1">
          <img
            src={product.image}
            alt={product.title}
            className="rounded-xl w-full"
          />
        </div>

        {/* RIGHT: Details */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
          <p className="text-2xl font-semibold mb-4">₹{product.price}</p>
          <p className="mb-6">{product.description}</p>

          <button
            onClick={() => addToCart(product)}
            className="btn btn-primary"
          >
            Add to Cart
          </button>
        </div>
        <Link to="/products" className="btn btn-outline btn-primary mb-5">
          ← Back to Products
        </Link>
      </div>
    </main>
  );
}

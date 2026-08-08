import { Link } from "react-router-dom";
import { useCart } from "./Context/CartContext";
export default function Navbar() {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);


  return (
    <div className="navbar bg-base-100 px-6 shadow-sm">
      <div className="flex-1">
        <a className="text-2xl font-bold">Comfy Store</a>
      </div>

      <div className="flex-none gap-4">
        <Link to="/" className="btn btn-ghost">
          Home
        </Link>
        <Link to="/products" className="btn btn-ghost">
          Products
        </Link>

        <Link to="/Cart" className="btn btn-ghost">
          Cart({totalItems})
        </Link>
      </div>
    </div>
  );
}

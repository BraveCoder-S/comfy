import { Link } from "react-router-dom";
import { useCart } from "./Context/CartContext";
export default function Navbar() {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar bg-base-100 shadow-sm px-6">
      {/* LEFT — LOGO */}
      <div className="flex-1">
        <Link to="/" className="text-3xl font-bold text-primary">
          Comfy Store
        </Link>
      </div>

      {/* CENTER — LINKS */}
      <div className="hidden md:flex gap-6 text-lg">
        <Link to="/" className="hover:text-primary">
          Home
        </Link>
        <Link to="/products" className="hover:text-primary">
          Products
        </Link>
      </div>

      {/* RIGHT — CART + LOGIN */}
      <div className="flex-none gap-4 flex items-center">
        {/* CART BUTTON */}
        <Link to="/cart" className="btn btn-ghost relative">
          Cart
          <span className="badge badge-primary absolute -top-2 -right-2">
            {totalItems}
          </span>
        </Link>

        {/* LOGIN BUTTON */}
        <Link to="/login" className="btn btn-primary">
          Login
        </Link>
      </div>
    </nav>
  );
}

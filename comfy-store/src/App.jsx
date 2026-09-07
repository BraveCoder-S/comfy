import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/pages/Home";
import Products from "./Components/pages/Products";
import Cart from "./Components/pages/Cart";
import { Toaster } from "react-hot-toast";
import HelloBox from "./HelloBox";
import SingleProduct from "./Components/pages/SingleProduct";
import OrderSuccess from "./Components/pages/OrderSuccess";
import Checkout from "./Components/pages/CheckOut";
export default function App() {
  return (
    <div className="bg-base-200 min-h-screen">
      <Toaster position="top-right" />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

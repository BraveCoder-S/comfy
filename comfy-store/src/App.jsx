import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/pages/Home";
import Products from "./Components/pages/Products";
import Cart from "./Components/pages/Cart";
import { Toaster } from "react-hot-toast";
import HelloBox from "./HelloBox";

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
      </Routes>
    </div>
  );
}

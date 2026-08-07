import { products } from "../../data/products";
import ProductCard from "../ProductCard";

export default function Products() {
  return (
    <main className="min-h-screen bg-base-200 px-10 py-20">
      <h1 className="text-4xl font-bold mb-10">Our Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
}

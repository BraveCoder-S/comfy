import FiltersSidebar from "../sidebar/FiltersSidebar";
import { products } from "../../data/products";
import ProductCard from "../ProductCard";
import { useFilterContext } from "../Context/FilteredContext";

export default function Products() {
  const { filteredProducts } = useFilterContext();
  return (
    <main className="min-h-screen bg-base-200 px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-10">Our Products</h1>

        <div className="flex flex-col md:flex-row gap-10">
          {/* LEFT: Sidebar */}
          <div className="w-full md:w-64">
            <FiltersSidebar />
          </div>

          {/* RIGHT: Products Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((item) => {
              return <ProductCard key={item.id} item={item} />;
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

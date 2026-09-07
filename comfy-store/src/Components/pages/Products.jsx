import FiltersSidebar from "../sidebar/FiltersSidebar";
import ProductCard from "../ProductCard";
import { useFilterContext } from "../Context/FilteredContext";

export default function Products() {
  const { filteredProducts, gridView, setGrid, setList } = useFilterContext();

  return (
    <main className="min-h-screen bg-base-200 px-5 py-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-10">Our Products</h1>

        {/* VIEW TOGGLE BUTTONS */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={setGrid}
            className={gridView ? "btn btn-primary" : "btn btn-outline"}
          >
            Grid
          </button>

          <button
            onClick={setList}
            className={!gridView ? "btn btn-primary" : "btn btn-outline"}
          >
            List
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          {/* LEFT: Sidebar */}
          <div className="w-full md:w-64">
            <FiltersSidebar />
          </div>

          {/* RIGHT: Products Grid */}
          <div
            className={
              gridView
                ? "flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                : "flex-1 flex flex-col gap-8"
            }
          >
            {filteredProducts.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

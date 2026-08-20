import { useFilterContext } from "../Context/FilteredContext";

const PriceFilter = () => {
  const { filters, updateFilters } = useFilterContext();

  // You will replace this with your max price later
  const maxPrice = 20000;

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Price</h3>

      <input
        type="range"
        name="price"
        min="0"
        max={maxPrice}
        value={filters.price}
        onChange={(e) => updateFilters("price", Number(e.target.value))}
        className="range range-primary"
      />

      <p className="mt-2">₹{filters.price}</p>
    </div>
  );
};

export default PriceFilter;

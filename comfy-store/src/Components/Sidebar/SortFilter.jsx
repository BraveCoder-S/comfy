import { useFilterContext } from "../Context/FilteredContext";

const SortFilter = () => {
  const { filters, updateFilters } = useFilterContext();
  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2">Sort By</h3>

      <select
        name="sort"
        value={filters.sort}
        onChange={(e) => updateFilters("sort", e.target.value)}
        className="select select-bordered w-full"
      >
        <option value="price-lowest">Price (Lowest)</option>
        <option value="price-highest">Price (Highest)</option>
        <option value="name-a">Name (A - Z)</option>
        <option value="name-z">Name (Z - A)</option>
      </select>
    </div>
  );
};

export default SortFilter;

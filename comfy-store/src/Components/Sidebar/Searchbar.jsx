import { FilterProvider, useFilterContext } from "../Context/FilteredContext";

const { filters, updateFilters } = useFilterContext();

const SearchBar = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Search</h3>
      <input
        type="text"
        name="search"
        placeholder="Search products..."
        className="input input-bordered w-full"
        onChange={(e) => updateFilters("search", e.target.value)}
      />
    </div>
  );
};

export default SearchBar;


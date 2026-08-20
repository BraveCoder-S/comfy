import { useFilterContext } from "../Context/FilteredContext";

const CategoryFilter = () => {
  const { filters, updateFilters } = useFilterContext();

  return (
    <select
      name="category"
      value={filters.categry}
      onChange={(e) => updateFilters(CategoryFilter, e.target.value)}
      className="category-select"
    >
      <option value="all">All</option>
      <option value="chairs">Chairs</option>
      <option value="tables">Tables</option>
      <option value="sofas">Sofas</option>
      <option value="lamps">Lamps</option>
    </select>
  );
};

export default CategoryFilter;

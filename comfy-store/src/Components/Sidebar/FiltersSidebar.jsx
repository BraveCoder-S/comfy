import CategoryFilter from "./CategoryFilter";
import ClearFilters from "./ClearFilters";
import CompanyFilter from "./CompanyFilter";
import PriceFilter from "./PriceFilter";
import SearchBar from "./SearchBar";
import ShippingFilter from "./ShippingFilter";

const FiltersSidebar = () => {
  return (
    <aside className="w-full lg:w-64 space-y-8">
      <SearchBar />
      <CategoryFilter />
      <CompanyFilter />
      <PriceFilter />
      <ShippingFilter />
      <ClearFilters />
      {/* Other filters will come here */}
    </aside>
  );
};

export default FiltersSidebar;

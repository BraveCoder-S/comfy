import CategoryFilter from "./CategoryFilter";
import ClearFilters from "./ClearFilters";
import CompanyFilter from "./CompanyFilter";
import PriceFilter from "./PriceFilter";
import SearchBar from "./SearchBar";
import ShippingFilter from "./ShippingFilter";
import SortFilter from "./SortFilter";

const FiltersSidebar = () => {
  return (
    <aside className="w-full md:w-64 flex flex-col gap-6">
      <SearchBar />
      <CategoryFilter />
      <CompanyFilter />
      <PriceFilter />
      <ShippingFilter />
      <ClearFilters />
      <SortFilter />
      {/* Other filters will come here */}
    </aside>
  );
};

export default FiltersSidebar;

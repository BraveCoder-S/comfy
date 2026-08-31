import { FilterProvider, useFilterContext } from "../Context/FilteredContext";

const ShippingFilter = () => {
  const { filters, updateFilters } = useFilterContext()

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Free Shipping</h3>

      <label className="flex items-center gap-3 cursor-pointer">
        <input
          type="checkbox"
          name="shipping"
          checked={filters.shipping}
          onChange={(e) => updateFilters("shipping", e.target.checked)}
        />
        <span className="text-sm">Only show free shipping</span>
      </label>
    </div>
  );
};

export default ShippingFilter;

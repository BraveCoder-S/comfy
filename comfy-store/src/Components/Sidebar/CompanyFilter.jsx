import { useFilterContext } from "../Context/FilteredContext";

const CompanyFilter = () => {
  const companies = ["all", "marcos", "liddy", "ikea", "caressa"];
  const { filters, updateFilters } = useFilterContext();

  console.log(companies);

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Company</h3>

      <select
        name="company"
        value={filters.company}
        onChange={(e) => {
          updateFilters("company", e.target.value);
        }}
        className="company-select"
      >
        {companies.map((company) => {
          return (
            <option key={company} value={company}>
              {company}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default CompanyFilter;

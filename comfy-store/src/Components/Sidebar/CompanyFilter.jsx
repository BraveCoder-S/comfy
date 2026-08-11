const CompanyFilter = () => {
  const companies = ["all", "marcos", "liddy", "ikea", "caressa"];

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Company</h3>

      <select className="select select-bordered w-full capitalize">
        {companies.map((company) => {
          <option key={company} value={company}></option>;
          {
            company;
          }
        })}
      </select>
    </div>
  );
};

export default CompanyFilter;

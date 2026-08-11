const SearchBar = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Search</h3>
      <input
        type="text"
        placeholder="Search products..."
        className="input input-bordered w-full"
      />
    </div>
  );
};

export default SearchBar;

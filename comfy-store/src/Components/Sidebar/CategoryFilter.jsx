const CategoryFilter = () => {
  const categories = ["all", "chairs", "tables", "sofas", "lamps"];

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Category</h3>

      <div className="flex flex-col gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            className="btn btn-outline btn-sm capitalize"
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;

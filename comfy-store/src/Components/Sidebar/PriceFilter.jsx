const PriceFilter = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Price</h3>

      <input
        type="range"
        min="0"
        max="1000"
        className="range range-primary w-full"
      />

      <div className="text-sm mt-2">₹0 - ₹1000</div>
    </div>
  );
};

export default PriceFilter;

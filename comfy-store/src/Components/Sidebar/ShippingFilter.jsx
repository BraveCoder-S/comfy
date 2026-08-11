const ShippingFilter = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Free Shipping</h3>

      <label className="flex items-center gap-3 cursor-pointer">
        <input
          type="checkbox"
          className="checkbox checkbox-primary"
        />
        <span className="text-sm">Only show free shipping</span>
      </label>
    </div>
  );
};

export default ShippingFilter;

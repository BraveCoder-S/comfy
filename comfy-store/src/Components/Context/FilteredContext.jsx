import { useContext, createContext, useState, useEffect } from "react";
import { products } from "../../data/products";

const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [filteredProducts, setfilteredProducts] = useState(products);
  const [filters, setFilters] = useState({
    search: "",
    category: "all",
    company: "all",
    price: 0,
    shipping: false,
    sort: "price-lowest",
  });
  function updateFilters(name, value) {
    setFilters({ ...filters, [name]: value });
  }

  useEffect(() => {
    let tempProducts = [...products];

    // 1. SEARCH FILTER

    if (filters.search) {
      tempProducts = tempProducts.filter((product) => {
        return product.name
          ?.toLowerCase()
          .includes(filters.search.toLowerCase());
      });
    }

    // 2. CATEGORY FILTER

    if (filters.category !== "all") {
      tempProducts = tempProducts.filter((product) => {
        return product.category === filters.category;
      });
    }

    // 3. COMPANY FILTER

    if (filters.company !== "all") {
      tempProducts = tempProducts.filter((product) => {
        return product.company === filters.company;
      });
    }

    // 4. PRICE FILTER

    tempProducts = tempProducts.filter(
      (product) => product.price <= filters.price,
    );

    // 5. SHIPPING FILTER
    if (filters.shipping) {
      tempProducts = tempProducts.filter((product) => {
        return product.shipping === true;
      });
    }

    // 6. SORT FILTER
    switch (filters.sort) {
      case "price-lowest":
        tempProducts = tempProducts.filter((a, b) => a.price - b.price);
        break;

      case "price-highest":
        tempProducts = tempProducts.filter((a, b) => b.price - a.price);
        break;

      case "name-a":
        tempProducts = tempProducts.filter((a, b) =>
          a.name.localeCompare(b.name),
        );
        break;

      case "name-b":
        tempProducts = tempProducts.filter((a, b) =>
          b.name.localeCompare(a.name),
        );
        break;
    }

    setfilteredProducts(tempProducts);
  }, [filters]);

  return (
    <FilterContext.Provider
      value={{ filteredProducts, filters, updateFilters }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export function useFilterContext() {
  return useContext(FilterContext);
}

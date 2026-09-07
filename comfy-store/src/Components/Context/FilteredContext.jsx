import { useContext, createContext, useState, useEffect } from "react";
import { products } from "../../data/products";

const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [filteredProducts, setfilteredProducts] = useState(products);
  const [filters, setFilters] = useState({
    search: "",
    category: "all",
    company: "all",
    price: Math.max(...products.map((p) => p.price)),
    shipping: false,
    sort: "price-lowest",
  });
  const [debounce, setDebounce] = useState(filters.search);
  // ⭐ VIEW TOGGLE STATE
  const [gridView, setGridView] = useState(true);

  function updateFilters(name, value) {
    setFilters({ ...filters, [name]: value });
  }
  function setGrid() {
    setGridView(true);
  }

  function setList() {
    setGridView(false);
  }

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounce(filters.search);

      return () => clearTimeout(handler);
    }, 300);
  }, [filters.search]);

  useEffect(() => {
    let tempProducts = [...products];

    // 1. SEARCH FILTER

    // SEARCH FILTER
    if (debounce.trim() !== "") {
      tempProducts = tempProducts.filter((product) =>
        product.title?.toLowerCase().includes(debounce.toLowerCase()),
      );
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
        tempProducts = tempProducts.sort((a, b) => a.price - b.price);
        break;

      case "price-highest":
        tempProducts = tempProducts.sort((a, b) => b.price - a.price);
        break;

      case "name-a":
        tempProducts = tempProducts.sort((a, b) =>
          a.title.localeCompare(b.title),
        );
        break;

      case "name-b":
        tempProducts = tempProducts.sort((a, b) =>
          b.title.localeCompare(a.title),
        );
        break;
    }

    setfilteredProducts(tempProducts);
  }, [filters]);

  return (
    <FilterContext.Provider
      value={{
        products,
        filteredProducts,
        filters,
        updateFilters,
        debounce,
        gridView,
        setGrid,
        setList,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export function useFilterContext() {
  return useContext(FilterContext);
}

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
  });
  function updateFilters(name, value) {
    setFilters({ ...filters, [name]: value });
  }

  useEffect(() => {
    let tempProducts = [...products];

    if (filters.search) {
      tempProducts = tempProducts.filter((product) => {
        return product.name.toLowerCase().includes(filters.search.toLowerCase());
      });
    }

    if (filters.category !== "all") {
      tempProducts = tempProducts.filter((product) => {
        return product.category === filters.category;
      });
    }

    if (filters.company !== "all") {
      tempProducts = tempProducts.filter((product) => {
        return product.company === filters.company;
      });
    }

    tempProducts = tempProducts.filter(
      (product) => product.price <= filters.price,
    );

   
    if(filters.shipping){
      tempProducts = tempProducts.fillter((product)=>{
        return product.shipping===true
      })
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

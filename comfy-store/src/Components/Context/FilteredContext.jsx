import { useContext, createContext, useState } from "react";
import { products } from "../../data/products";

const FilterContext = createContext();

export function FilterProvider({ childern }) {
  return (
    <FilterContext.Provider value={{ filteredProducts }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilterContext() {
  return useContext(FilterContext);
}

import { createContext, useEffect, useState } from "react";

export const CategoriesContext = createContext({
    categories: [],
});

export const CategoriesProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);
    const value = {categories}

    useEffect(() => {
      const getCategories = async() => {
        const response = await fetch("http://localhost:8000/all-categories");
        const categories = await response.json();
        setCategories(categories);
        // console.log(response);
        // console.log(categories);
      }

      getCategories();
    }, [])

    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}
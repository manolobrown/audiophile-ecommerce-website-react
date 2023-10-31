import { createContext, useState } from "react";

//import CATEGORIES from "../categories-data.json";
const CATEGORIES = [
  {
    id: 1,
    title: "Headphones",
    url: "#",
    imgUrl: `${require("../assets/shared/desktop/image-category-thumbnail-headphones.png")}`,
  },
  {
    id: 2,
    title: "Speakers",
    url: "#",
    imgUrl: `${require("../assets/shared/desktop/image-category-thumbnail-speakers.png")}`,
  },
  {
    id: 3,
    title: "Earphones",
    url: "#",
    imgUrl: `${require("../assets/shared/desktop/image-category-thumbnail-earphones.png")}`,
  },
];
export const CategoriesContext = createContext({
  categories: [],
});

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState(CATEGORIES);
  const value = { categories };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};

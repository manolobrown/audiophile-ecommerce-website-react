import { createContext, useState } from "react";

//import CATEGORIES from "../categories-data.json";
const CATEGORIES = [
  {
    id: 1,
    title: "Headphones",
    url: "/category/headphones",
    imgUrl: `${require("../assets/shared/desktop/image-category-thumbnail-headphones.png")}`,
    classList:
      "max-w-[45%] mx-auto absolute top-[-45px] sm:max-w-[65%] xl:top-[-75px]",
  },
  {
    id: 2,
    title: "Speakers",
    url: "/category/speakers",
    imgUrl: `${require("../assets/shared/desktop/image-category-thumbnail-speakers.png")}`,
    classList:
      "max-w-[45%] mx-auto absolute top-[-45px] sm:max-w-[65%] xl:top-[-75px]",
  },
  {
    id: 3,
    title: "Earphones",
    url: "/category/earphones",
    imgUrl: `${require("../assets/shared/desktop/image-category-thumbnail-earphones.png")}`,
    classList:
      "max-w-[45%] mx-auto absolute top-[-45px] sm:max-w-[75%] xl:top-[-75px]",
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

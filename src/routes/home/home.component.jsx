import { useContext } from "react";
import { CategoriesContext } from "../../context/categories.context";
import Category from "../../components/category/category.component";

import CallToAction from "../../components/call-to-action/call-to-action.component";

const imageHeaders = [
  {
    mobile: `${require("../../assets/home/mobile/image-header.jpg")}`,
    tablet: `${require("../../assets/home/tablet/image-header.jpg")}`,
    desktop: `${require("../../assets/home/desktop/image-hero.jpg")}`,
  },
];

const Home = () => {
  const { categories } = useContext(CategoriesContext);
  return (
    <div>
      <CallToAction />
      <div className="pt-[84px]">
        <Category categories={categories} />
      </div>
    </div>
  );
};

export default Home;

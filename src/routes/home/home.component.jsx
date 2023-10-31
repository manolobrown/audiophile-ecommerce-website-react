import { useContext } from "react";
import { CategoriesContext } from "../../context/categories.context";
import Category from "../../components/category/category.component";
import mobileHeader from "../../assets/home/mobile/image-header.jpg";

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
      <div className="relative">
        <img className="mt-[-100px]" src={imageHeaders[0]["mobile"]} alt="" />
        <div className="absolute bottom-[112px] text-center">
          <div className="text-[14px] text-white/[.5] tracking-[10px] mb-4">
            NEW PRODUCT
          </div>
          <h1 className="mb-7 text-white text-[38px] font-bold leading-10 tracking-[1.29px] uppercase">
            XX99 Mark II HeadphoneS
          </h1>
          <p className="mb-7 text-[15px] leading-[25px] text-white/[.75] max-w-[328px] mx-auto">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <a
            href="#"
            className="flex items-center text-white justify-center bg-[#D87D4A] max-w-[160px] min-h-[48px] uppercase mx-auto"
          >
            See Product
          </a>
        </div>
      </div>
      <div className="pt-[84px]">
        <Category categories={categories} />
      </div>
    </div>
  );
};

export default Home;

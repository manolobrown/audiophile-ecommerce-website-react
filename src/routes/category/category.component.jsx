import { useContext, useEffect } from "react";
import { DataContext } from "../../context/data.context";
import { CategoriesContext } from "../../context/categories.context";
import Categories from "../../components/category/category.component";
import { useParams } from "react-router-dom";
import Button from "../../components/button/button.component";

const Category = () => {
  let params = useParams();
  const data = useContext(DataContext);
  const { categories } = useContext(CategoriesContext);
  useEffect(() => {
    document.body.classList.add("category-page");
    return () => {
      document.body.classList.remove("category-page");
    };
  }, []);
  console.log(data);
  let filteredCategories = data.filter(
    (category) => category.category === params.category
  );
  console.log(filteredCategories);
  filteredCategories.sort();
  filteredCategories.reverse();
  return (
    <div className="bg-white pb-[120px] xl:pb-160px">
      <div className="bg-black mb-[64px] sm:mb-[120px]">
        <h1 className="text-[28px] text-white uppercase tracking-[2px] text-center py-[32px] sm:text-[40px] sm:tracking-[1.43px] leading-[44px] sm:pt-[105px] sm:pb-[97px] font-bold">
          {params.category}
        </h1>
      </div>
      {filteredCategories.map((product) => (
        <div
          className="container flex flex-col gap-y-6 items-center mb-[120px] text-center last:mb-0 xl:flex-row xl:text-left xl:gap-[125px] xl:odd:flex-row-reverse xl:mb-[160px]"
          key={product.id}
        >
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet={require(`../../${product.categoryImage.mobile}`)}
            />

            <source
              media="(max-width: 1199px)"
              srcSet={require(`../../${product.categoryImage.tablet}`)}
            />
            <img
              className="object-cover rounded-[8px] mb-2"
              srcSet={require(`../../${product.categoryImage.desktop}`)}
              alt=""
            />
          </picture>

          <div className="flex flex-col gap-y-6 items-center xl:items-start xl:max-w-[445px] xl:gap-y-[18px]">
            {product.new ? (
              <h3 className="uppercase text-[#D87D4A] font-normal tracking-[10px] m-0">
                New Product
              </h3>
            ) : (
              ""
            )}
            <h2 className="text-[28px] tracking-[1px] md:text-[40px] md:tracking-[1.43px] md:max-w-[max-content] md:mx-auto xl:mx-0 xl:mb-[14px]">
              {product.name}
            </h2>
            <p className="text-[15px] opacity-50 leading-[25px] md:max-w-[572px] md:mx-auto xl:max-w-full xl:mx-0 xl:mb-[22px]">
              {product.description}
            </p>
            <Button url={`/product/${product.slug}`} buttonType="buttonOne">
              See Product
            </Button>
          </div>
        </div>
      ))}
      <div className="container xl:mt-[230px]">
        <Categories categories={categories} />
      </div>
    </div>
  );
};

export default Category;

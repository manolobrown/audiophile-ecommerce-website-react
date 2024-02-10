import { useContext, useEffect } from "react";
import { DataContext } from "../../context/data.context";
import { useParams } from "react-router-dom";
import Button from "../../components/button/button.component";

const Category = () => {
  let params = useParams();
  const data = useContext(DataContext);
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
    <div className="bg-white pb-[120px]">
      <div className="bg-black mb-[64px]">
        <h1 className="text-[28px] text-white uppercase tracking-[2px] text-center py-[32px]">
          {params.category}
        </h1>
      </div>
      {filteredCategories.map((product) => (
        <div
          className="container flex flex-col gap-y-6 items-center mb-[120px] text-center last:mb-0"
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
          {product.new ? (
            <h3 className="uppercase text-[#D87D4A] font-normal tracking-[10px] m-0">
              New Product
            </h3>
          ) : (
            ""
          )}
          <h2 className="text-[28px] tracking-[1px]">{product.name}</h2>
          <p className="text-[15px] opacity-50 leading-[25px]">
            {product.description}
          </p>
          <Button buttonType="buttonOne">See Product</Button>
        </div>
      ))}
    </div>
  );
};

export default Category;

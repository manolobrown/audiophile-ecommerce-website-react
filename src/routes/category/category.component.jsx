import { useContext, useEffect } from "react";
import { DataContext } from "../../context/data.context";
import { useParams } from "react-router-dom";

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
  return (
    <div className="bg-white">
      <div className="bg-black">
        <h1 className="text-[28px] text-white uppercase tracking-[2px] text-center py-[32px]">
          {params.category}
        </h1>
      </div>
      {filteredCategories.map((product) => (
        <div className="container" key={product.id}>
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
              className="object-cover rounded-[8px]"
              srcSet={require(`../../${product.categoryImage.desktop}`)}
              alt=""
            />
          </picture>
        </div>
      ))}
    </div>
  );
};

export default Category;

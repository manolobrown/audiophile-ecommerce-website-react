import { useContext } from "react";
import { DataContext } from "../../context/data.context";
import { useParams } from "react-router-dom";

const Category = () => {
  let params = useParams();
  const data = useContext(DataContext);
  console.log(data);
  let filteredCategories = data.filter(
    (category) => category.category === params.category
  );
  console.log(filteredCategories);
  return <div>Hello World {params.category}</div>;
};

export default Category;

import CategoryItem from "../category-item/category-item.component";

const Category = ({ categories }) => {
  return (
    <div className="flex flex-col items-center gap-y-[68px] sm:flex-row sm:gap-x-[10px]">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Category;

import { ReactComponent as RightArrow } from "../../assets/shared/desktop/icon-arrow-right.svg";
import Button from "../button/button.component";

const CategoryItem = ({ category }) => {
  const { id, imgUrl, title, url, classList } = category;
  return (
    <div
      className="bg-[#F1F1F1] rounded-lg flex flex-col items-center sm:max-w-[327px] gap-y-[15px] p-5 relative w-full h-[165px] justify-end xl:max-w-[350px] xl:h-[204px]"
      key={id}
    >
      <img className={classList} src={imgUrl} alt={title} />
      <h2 className="text-[15px] font-bold uppercase xl:text-[18px] xl:tracking-[1.25px]">
        {title}
      </h2>

      <Button url={url} buttonType="buttonThree">
        Shop <RightArrow />
      </Button>
    </div>
  );
};

export default CategoryItem;

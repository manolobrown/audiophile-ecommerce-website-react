import { ReactComponent as RightArrow } from "../../assets/shared/desktop/icon-arrow-right.svg";
import Button from "../button/button.component";

const CategoryItem = ({ category }) => {
  const { id, imgUrl, title, url } = category;
  return (
    <div
      className="bg-[#F1F1F1] rounded-lg flex flex-col items-center sm:max-w-[327px] gap-y-[15px] p-5 relative w-full h-[165px] justify-end"
      key={id}
    >
      <img
        className="max-w-[45%] mx-auto absolute top-[-45px]"
        src={imgUrl}
        alt={title}
      />
      <h2 className="text-[15px] font-bold uppercase">{title}</h2>

      <Button url={url} buttonType="buttonThree">
        Shop <RightArrow />
      </Button>
    </div>
  );
};

export default CategoryItem;

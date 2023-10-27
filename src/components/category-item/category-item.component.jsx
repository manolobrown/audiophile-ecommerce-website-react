import { ReactComponent as RightArrow } from "../../assets/shared/desktop/icon-arrow-right.svg";

const CategoryItem = ({ category }) => {
  const { id, imgUrl, title, url } = category;
  return (
    <div
      className="bg-[#F1F1F1] rounded-lg flex flex-col items-center max-w-[327px] gap-y-[15px] p-5 relative w-full h-[165px] justify-end"
      key={id}
    >
      <img
        className="max-w-[45%] mx-auto absolute top-[-45px]"
        src={imgUrl}
        alt={title}
      />
      <h2 className="text-[15px] font-bold uppercase">{title}</h2>
      <a
        className="flex items-center gap-x-[13.3px] text-[13px] font-bold uppercase text-[#979797]"
        href={url}
      >
        Shop <RightArrow />
      </a>
    </div>
  );
};

export default CategoryItem;

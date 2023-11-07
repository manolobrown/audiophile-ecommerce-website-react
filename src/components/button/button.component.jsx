const BUTTON_TYPE_CLASSES = {
  buttonOne:
    "flex items-center text-white justify-center bg-[#D87D4A] max-w-[160px] min-h-[48px] uppercase mx-auto text-[13px] tracking-[1px] xl:mx-0 hover:bg-[#FBAF85]",
  buttonTwo:
    "flex items-center text-black justify-center bg-transparent max-w-[160px] min-h-[48px] uppercase mx-auto text-[13px] tracking-[1px] border border-black xl:mx-0 hover:text-white hover:bg-black",
  buttonThree:
    "flex items-center gap-x-[13.3px] text-[13px] font-bold uppercase text-[#979797] hover:text-[#D87D4A]",
};

const Button = ({ children, url, buttonType, ...otherProps }) => {
  return (
    <a
      href={url}
      className={`${buttonType ? BUTTON_TYPE_CLASSES[buttonType] : ""}`}
      {...otherProps}
    >
      {children}
    </a>
  );
};

export default Button;

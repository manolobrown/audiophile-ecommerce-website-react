import Button from "../button/button.component";
const CallToAction = () => {
  return (
    <div className="relative xl:mb-[200px]">
      <picture>
        <source
          media="(max-width: 767px)"
          srcSet={require("../../assets/home/mobile/image-header.jpg")}
        />

        <source
          media="(max-width: 1199px)"
          srcSet={require("../../assets/home/tablet/image-header.jpg")}
        />
        <img
          className="mt-[-100px] sm:mt-0"
          srcSet={require("../../assets/home/desktop/image-hero.jpg")}
          alt=""
        />
      </picture>
      <div className="absolute inset-0 text-center flex items-end justify-center mb-[112px] sm:items-center sm:mb-0 xl:justify-start xl:max-w-[1110px] xl:mx-auto xl:text-left">
        <div className="max-w-[396px] px-7 sm:px-0">
          <div className="text-[14px] text-white/[.5] tracking-[10px] mb-4">
            NEW PRODUCT
          </div>
          <h1 className="mb-7 text-white text-[38px] font-bold leading-10 tracking-[1.29px] uppercase sm:text-[56px] sm:tracking-[2px] sm:leading-[56px]">
            XX99 Mark II HeadphoneS
          </h1>
          <p className="mb-7 text-[15px] leading-[25px] text-white/[.75] font-medium xl:max-w-[349px]">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>

          <Button url="#" buttonType="buttonOne">
            See Product
          </Button>
        </div>
      </div>
    </div>
  );
};
export default CallToAction;

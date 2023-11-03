const CallToAction = () => {
  return (
    <div className="relative">
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
          className="mt-[-100px]"
          srcSet={require("../../assets/home/desktop/image-hero.jpg")}
          alt=""
        />
      </picture>
      <div className="absolute bottom-[112px] text-center">
        <div className="text-[14px] text-white/[.5] tracking-[10px] mb-4">
          NEW PRODUCT
        </div>
        <h1 className="mb-7 text-white text-[38px] font-bold leading-10 tracking-[1.29px] uppercase">
          XX99 Mark II HeadphoneS
        </h1>
        <p className="mb-7 text-[15px] leading-[25px] text-white/[.75] max-w-[328px] mx-auto">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <a
          href="#"
          className="flex items-center text-white justify-center bg-[#D87D4A] max-w-[160px] min-h-[48px] uppercase mx-auto"
        >
          See Product
        </a>
      </div>
    </div>
  );
};
export default CallToAction;

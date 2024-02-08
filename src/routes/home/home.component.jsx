import { useContext } from "react";
import { CategoriesContext } from "../../context/categories.context";
import Category from "../../components/category/category.component";

import CallToAction from "../../components/call-to-action/call-to-action.component";

import Button from "../../components/button/button.component";

const imageHeaders = [
  {
    mobile: `${require("../../assets/home/mobile/image-header.jpg")}`,
    tablet: `${require("../../assets/home/tablet/image-header.jpg")}`,
    desktop: `${require("../../assets/home/desktop/image-hero.jpg")}`,
    circles: `${require("../../assets/home/desktop/pattern-circles.svg")}`,
  },
];

const Home = () => {
  const { categories } = useContext(CategoriesContext);
  return (
    <div>
      <CallToAction />
      <div className="pt-[84px] mb-[120px] container mx-auto sm:mb-[96px] sm:pt-[130px] xl:mb-[168px] xl:pt-0">
        <Category categories={categories} />
      </div>
      <div className="container mx-auto">
        <div
          style={{
            "--image-url": `url(${require("../../assets/home/desktop/pattern-circles.svg")})`,
          }}
          className="bg-[#D87D4A] text-white text-center p-[55px] rounded-[8px] flex flex-col gap-6 items-center relative bg-[image:var(--image-url)] bg-contain bg-no-repeat mb-6 sm:pb-16 sm:pt-16 xl:flex-row xl:pb-0 xl:pl-[117.49px] xl:pt-[96px] xl:items-start xl:text-left xl:gap-x-[138.28px] xl:overflow-hidden xl:mb-[48px]"
        >
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet={require("../../assets/home/mobile/image-speaker-zx9.png")}
            />

            <source
              media="(max-width: 1199px)"
              srcSet={require("../../assets/home/tablet/image-speaker-zx9.png")}
            />

            <img
              src={require("../../assets/home/desktop/image-speaker-zx9.png")}
              alt=""
              className="max-w-[172px] mb-2 sm:max-w-[197px] sm:mb-16 xl:max-w-[410px] xl:mb-0 xl:relative xl:bottom-[-15px]"
            />
          </picture>

          <div className="flex flex-col gap-6 items-center xl:items-start xl:pt-[37px]">
            <h2 className="uppercase text-[36px] tracking-[1.29px] leading-10 font-bold max-w-[min-content] sm:text-[56px] sm:tracking-[2px] sm:leading-[58px]">
              ZX9 Speaker
            </h2>
            <p className="sm:max-w-[349px] sm:mx-auto sm:opacity-75">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Button buttonType="buttonFour">See Product</Button>
          </div>
        </div>
        <div
          style={{
            "--image-url": `url(${require("../../assets/home/mobile/image-speaker-zx7.jpg")})`,
            "--image-url-tablet": `url(${require("../../assets/home/tablet/image-speaker-zx7.jpg")})`,
            "--image-url-desktop": `url(${require("../../assets/home/desktop/image-speaker-zx7.jpg")})`,
          }}
          className="bg-[#D87D4A] text-white text-left p-[24px] rounded-[8px] flex flex-col gap-9 relative bg-[image:var(--image-url)] bg-cover bg-no-repeat min-h-[320px] justify-center mb-6 sm:bg-[image:var(--image-url-tablet)] xl:bg-[image:var(--image-url-desktop)] xl:px-[95px] xl:gap-8 xl:mb-12"
        >
          <h2 className="uppercase text-[#000] text-[28px] tracking-[2px] leading-10 font-bold">
            ZX7 SPEAKER
          </h2>

          <Button buttonType="buttonTwoAlt">See Product</Button>
        </div>
        <div className="flex flex-col gap-6 mb-[120px] sm:flex-row sm:gap-[11px] sm:mb-[96px] xl:gap-x-[30px] xl:mb-[200px]">
          <div className="rounded-[8px] sm:w-1/2">
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet={require("../../assets/home/mobile/image-earphones-yx1.jpg")}
              />

              <source
                media="(max-width: 1199px)"
                srcSet={require("../../assets/home/tablet/image-earphones-yx1.jpg")}
              />
              <img
                className="object-cover rounded-[8px]"
                srcSet={require("../../assets/home/desktop/image-earphones-yx1.jpg")}
                alt=""
              />
            </picture>
          </div>
          <div className="bg-[#F1F1F1] text-black text-left p-[24px] rounded-[8px] flex flex-col gap-9 relative min-h-[200px] justify-center sm:w-1/2 xl:gap-8 xl:px-[95px]">
            <h2 className="uppercase text-[#000] text-[28px] tracking-[2px] leading-10 font-bold">
              YX1 EARPHONES
            </h2>

            <Button buttonType="buttonTwoAlt">See Product</Button>
          </div>
        </div>

        <div className=" text-black text-center flex flex-col gap-8 relative justify-center mb-[120px] sm:gap-0 xl:flex-row-reverse xl:text-left xl:gap-x-[125px] xl:mb-[200px]">
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet={require("../../assets/shared/mobile/image-best-gear.jpg")}
            />

            <source
              media="(max-width: 1199px)"
              srcSet={require("../../assets/shared/tablet/image-best-gear.jpg")}
            />
            <img
              className="object-cover rounded-[8px] sm:mb-16 xl:mb-0"
              srcSet={require("../../assets/shared/desktop/image-best-gear.jpg")}
              alt=""
            />
          </picture>

          <div className="flex flex-col gap-8 justify-center sm:gap-0">
            <h2 className="uppercase text-[#000] text-[28px] tracking-[1px] leading-10 font-bold sm:text-[40px] sm:leading-[44px] sm:tracking-[1.43px] sm:max-w-[573px] sm:mx-auto sm:mb-8">
              Bringing you the <span className="text-[#D87D4A]">best</span>{" "}
              audio&nbsp;gear
            </h2>

            <p className="sm:max-w-[573px] sm:mx-auto">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

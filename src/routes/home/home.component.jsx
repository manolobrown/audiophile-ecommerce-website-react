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
      <div className="pt-[84px] mb-[120px] container mx-auto">
        <Category categories={categories} />
      </div>
      <div className="container mx-auto">
        <div
          style={{
            "--image-url": `url(${require("../../assets/home/desktop/pattern-circles.svg")})`,
          }}
          className="bg-[#D87D4A] text-white text-center p-[55px] rounded-[8px] flex flex-col gap-6 items-center relative bg-[image:var(--image-url)] bg-contain bg-no-repeat mb-6"
        >
          <img
            src={require("../../assets/home/mobile/image-speaker-zx9.png")}
            alt=""
            className="max-w-[172px] mb-2"
          />

          <h2 className="uppercase text-[36px] tracking-[1.29px] leading-10 font-bold max-w-[min-content]">
            ZX9 Speaker
          </h2>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Button buttonType="buttonFour">See Product</Button>
        </div>
        <div
          style={{
            "--image-url": `url(${require("../../assets/home/mobile/image-speaker-zx7.jpg")})`,
          }}
          className="bg-[#D87D4A] text-white text-left p-[24px] rounded-[8px] flex flex-col gap-9 relative bg-[image:var(--image-url)] bg-cover bg-no-repeat min-h-[320px] justify-center mb-6"
        >
          <h2 className="uppercase text-[#000] text-[28px] tracking-[2px] leading-10 font-bold">
            ZX7 SPEAKER
          </h2>

          <Button buttonType="buttonTwoAlt">See Product</Button>
        </div>
        <div className="rounded-[8px] mb-6">
          <img
            src={require("../../assets/home/mobile/image-earphones-yx1.jpg")}
            alt=""
            className="object-cover rounded-[8px]"
          />
        </div>
        <div className="bg-[#F1F1F1] text-black text-left p-[24px] rounded-[8px] flex flex-col gap-9 relative bg-[image:var(--image-url)] bg-cover bg-no-repeat min-h-[200px] justify-center mb-[120px]">
          <h2 className="uppercase text-[#000] text-[28px] tracking-[2px] leading-10 font-bold">
            YX1 EARPHONES
          </h2>

          <Button buttonType="buttonTwoAlt">See Product</Button>
        </div>

        <div className=" text-black text-center flex flex-col gap-8 relative justify-center mb-[120px]">
          <img
            src={require("../../assets/shared/mobile/image-best-gear.jpg")}
            alt=""
            className="object-cover rounded-[8px]"
          />
          <h2 className="uppercase text-[#000] text-[28px] tracking-[1px] leading-10 font-bold">
            Bringing you the <span className="text-[#D87D4A]">best</span> audio
            gear
          </h2>

          <p>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

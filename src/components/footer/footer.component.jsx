import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/shared/desktop/logo.svg";

import { ReactComponent as FacebookLogo } from "../../assets/shared/desktop/icon-facebook.svg";
import { ReactComponent as TwitterLogo } from "../../assets/shared/desktop/icon-twitter.svg";
import { ReactComponent as InstagramLogo } from "../../assets/shared/desktop/icon-instagram.svg";

const Footer = () => {
  return (
    <>
      <div className="bg-white">
        <div className="container">
          <div className=" text-black text-center flex flex-col gap-8 relative justify-center pb-[120px] sm:gap-0 xl:flex-row-reverse xl:text-left xl:gap-x-[125px] xl:pb-[200px]">
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

      <div className="bg-[#101010]">
        <div className="container mx-auto bg-[#101010] text-center text-white flex items-center flex-col gap-12 pt-[52px] pb-[38px] relative before:block before:absolute before:bg-[#D87D4A] before:w-[101px] before:h-[4px] before:top-0 sm:items-start sm:text-left sm:pt-[60px] sm:pb-[46px]">
          <div className="flex flex-col gap-12 xl:flex-row xl:gap-0 xl:justify-between xl:w-full">
            <Logo />
            <div className="flex flex-col uppercase font-bold gap-4 text-[13px] leading-6 tracking-[2px] sm:flex-row">
              <Link to="/">Home</Link>
              <Link to="/category/headphones">Headphones</Link>
              <Link to="/category/speakers">Speakers</Link>
              <Link to="/category/earphones">Earphones</Link>
            </div>
          </div>

          <p className="text-[15px] opacity-50 leading-6 sm:mb-[33px] xl:max-w-[540px] xl:mb-0">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>

          <div className="flex flex-col gap-12 sm:flex-row justify-between sm:w-full xl:items-end">
            <p className="text-[15px] opacity-50 leading-6">
              Copyright 2021. All Rights Reserved
            </p>
            <div className="flex gap-4 justify-center xl:relative xl:top-[-70px]">
              <Link to="/">
                <FacebookLogo />
              </Link>
              <Link to="/">
                <TwitterLogo />
              </Link>
              <Link to="/">
                <InstagramLogo />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

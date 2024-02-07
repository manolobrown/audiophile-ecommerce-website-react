import { Fragment, useContext, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/shared/desktop/logo.svg";
import { ReactComponent as CartLogo } from "../../assets/shared/desktop/icon-cart.svg";
import { ReactComponent as Hamburger } from "../../assets/shared/tablet/icon-hamburger.svg";
import { ReactComponent as FacebookLogo } from "../../assets/shared/desktop/icon-facebook.svg";
import { ReactComponent as TwitterLogo } from "../../assets/shared/desktop/icon-twitter.svg";
import { ReactComponent as InstagramLogo } from "../../assets/shared/desktop/icon-instagram.svg";

import { CategoriesContext } from "../../context/categories.context";

import Category from "../../components/category/category.component";

import { Transition } from "@headlessui/react";

const Layout = () => {
  const { categories } = useContext(CategoriesContext);
  const [isShowing, setIsShowing] = useState(false);
  return (
    <Fragment>
      <div className="bg-transparent flex items-center justify-between py-8 px-6 absolute w-full top-0 left-0 right-0 z-30 after:block after:absolute after:bg-white after:opacity-[.10] after:bottom-0 after:h-[1px] after:left-0 after:right-0 sm:justify-start sm:gap-[42px] sm:after:left-[20px] sm:after:right-[20px]">
        <Hamburger onClick={() => setIsShowing((isShowing) => !isShowing)} />

        <Link to="/">
          <Logo />
        </Link>

        <div className="hidden">
          <Link to="/">Home</Link>
          <Link to="/headphones">Headphones</Link>
          <Link to="/speakers">Speakers</Link>
          <Link to="/earphones">Earphones</Link>
        </div>

        <CartLogo className="sm:ml-auto" />
      </div>
      <Transition
        show={isShowing}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="pt-[84px] absolute bg-white w-full top-[89px] z-20 pb-[35px] rounded-b-lg">
          <div className="container mx-auto">
            <Category categories={categories} />
          </div>
        </div>
        <div className="fixed w-full h-full inset-0 bg-black/[.4] z-10"></div>
      </Transition>
      <Outlet />
      <div className="container mx-auto bg-[#101010] text-center text-white flex items-center flex-col gap-12 pt-[52px] pb-[38px] relative before:block before:absolute before:bg-[#D87D4A] before:w-[101px] before:h-[4px] before:top-0 sm:items-start sm:text-left sm:pt-[60px] sm:pb-[46px]">
        <Logo />
        <div className="flex flex-col uppercase font-bold gap-4 text-[13px] leading-6 tracking-[2px] sm:flex-row">
          <Link to="/">Home</Link>
          <Link to="/headphones">Headphones</Link>
          <Link to="/speakers">Speakers</Link>
          <Link to="/earphones">Earphones</Link>
        </div>

        <p className="text-[15px] opacity-50 leading-6 sm:mb-[33px]">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>

        <div className="flex flex-col gap-12 sm:flex-row justify-between sm:w-full">
          <p className="text-[15px] opacity-50 leading-6">
            Copyright 2021. All Rights Reserved
          </p>
          <div className="flex gap-4">
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
    </Fragment>
  );
};

export default Layout;

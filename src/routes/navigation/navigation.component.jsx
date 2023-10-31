import { Fragment, useContext, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/shared/desktop/logo.svg";
import { ReactComponent as CartLogo } from "../../assets/shared/desktop/icon-cart.svg";
import { ReactComponent as Hamburger } from "../../assets/shared/tablet/icon-hamburger.svg";

import { CategoriesContext } from "../../context/categories.context";

import Category from "../../components/category/category.component";

import { Transition } from "@headlessui/react";

const Navigation = () => {
  const { categories } = useContext(CategoriesContext);
  const [isShowing, setIsShowing] = useState(false);
  return (
    <Fragment>
      <div className="bg-black flex items-center justify-between py-8 px-6 relative z-30">
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

        <CartLogo />
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
          <Category categories={categories} />
        </div>
        <div className="fixed w-full h-full inset-0 bg-black/[.4] z-10"></div>
      </Transition>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

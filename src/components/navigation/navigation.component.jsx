import { Link } from "react-router-dom";
import { useContext, useState } from "react";

import { ReactComponent as CartIcon } from "../../assets/shared/desktop/icon-cart.svg";
import { ReactComponent as Logo } from "../../assets/shared/desktop/logo.svg";
import { ReactComponent as Hamburger } from "../../assets/shared/tablet/icon-hamburger.svg";

import { Transition } from "@headlessui/react";

import { CategoriesContext } from "../../context/categories.context";
import { CartContext } from "../../context/cart.context";

import Category from "../../components/category/category.component";
import CartModal from "../cart-modal/cart-modal.component";

const Navigation = () => {
  const { categories } = useContext(CategoriesContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const [isShowing, setIsShowing] = useState(false);

  const toggleCart = () => {
    setIsCartOpen((isCartOpen) => !isCartOpen);
  };
  return (
    <>
      <div className="header bg-transparent flex items-center justify-between py-8 px-6 absolute w-full top-0 left-0 right-0 z-30 after:block after:absolute after:bg-white after:opacity-[.10] after:bottom-0 after:h-[1px] after:left-0 after:right-0 sm:justify-start sm:gap-[42px] sm:after:left-[20px] sm:after:right-[20px] xl:container xl:px-0 xl:after:inset-x-0 xl:justify-between">
        <Hamburger
          className="xl:hidden"
          onClick={() => setIsShowing((isShowing) => !isShowing)}
        />

        <Link to="/">
          <Logo />
        </Link>

        <div className="hidden xl:flex xl:text-white xl:tracking-[2px] xl:uppercase xl:gap-x-[34px] xl:text-[13px] xl:leading-[25px]">
          <Link className="hover:text-[#D87D4A]" to="/">
            Home
          </Link>
          <Link className="hover:text-[#D87D4A]" to="/category/headphones">
            Headphones
          </Link>
          <Link className="hover:text-[#D87D4A]" to="/category/speakers">
            Speakers
          </Link>
          <Link className="hover:text-[#D87D4A]" to="/category/earphones">
            Earphones
          </Link>
        </div>

        <CartIcon onClick={toggleCart} className="sm:ml-auto xl:ml-0" />
      </div>
      {isCartOpen && <CartModal />}
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
    </>
  );
};

export default Navigation;

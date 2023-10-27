import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/shared/desktop/logo.svg";
import { ReactComponent as CartLogo } from "../../assets/shared/desktop/icon-cart.svg";
import { ReactComponent as Hamburger } from "../../assets/shared/tablet/icon-hamburger.svg";

import Category from "../../components/category/category.component";

const categories = [
  {
    id: 1,
    title: "Headphones",
    url: "#",
    imgUrl: `${require("../../assets/shared/desktop/image-category-thumbnail-headphones.png")}`,
  },
  {
    id: 2,
    title: "Speakers",
    url: "#",
    imgUrl: `${require("../../assets/shared/desktop/image-category-thumbnail-speakers.png")}`,
  },
  {
    id: 3,
    title: "Earphones",
    url: "#",
    imgUrl: `${require("../../assets/shared/desktop/image-category-thumbnail-earphones.png")}`,
  },
];

const Navigation = () => {
  return (
    <Fragment>
      <div className="bg-black flex items-center justify-between py-8 px-6">
        <Hamburger />

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
      <div className="pt-[84px]">
        <Category categories={categories} />
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

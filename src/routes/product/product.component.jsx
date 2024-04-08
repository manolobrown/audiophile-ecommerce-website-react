import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../context/data.context";
import { CategoriesContext } from "../../context/categories.context";
import Categories from "../../components/category/category.component";
import { useParams } from "react-router-dom";
import Button from "../../components/button/button.component";
import CartQuantity from "../../components/cart-quantity/cart-quantity.component";
import { CartContext } from "../../context/cart.context";

const Product = () => {
  let params = useParams();
  const data = useContext(DataContext);
  const { categories } = useContext(CategoriesContext);
  const { addItemToCart, cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  useEffect(() => {
    document.body.classList.add("product-page");
    return () => {
      document.body.classList.remove("product-page");
    };
  }, [cartItems]);
  let getProduct = data.filter((product) => product.slug === params.slug);
  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const featuresDescription = getProduct[0].features.split("\n\n");
  const productName = getProduct[0].name.split(" ");

  const addToCart = () => {
    addItemToCart(getProduct[0]);
  };

  return (
    <div className="bg-white pb-[120px] xl:pb-[160px]">
      <div className="container">
        <div className="pt-4 pb-6">
          <Button onClick={goBack} buttonType="buttonText">
            Go Back
          </Button>
        </div>

        <div className="flex flex-col gap-y-6 items-start mb-[88px] md:flex-row md:gap-x-[69px] md:items-center md:mb-[120px]">
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet={require(`../../${getProduct[0].image.mobile}`)}
            />

            <source
              media="(max-width: 1199px)"
              srcSet={require(`../../${getProduct[0].image.tablet}`)}
            />
            <img
              className="object-cover rounded-[8px]"
              srcSet={require(`../../${getProduct[0].image.desktop}`)}
              alt=""
            />
          </picture>

          <div className="flex flex-col gap-y-6 md:gap-y-8 xl:max-w-[445px]">
            {getProduct[0].new ? (
              <h3 className="uppercase text-[#D87D4A] font-normal tracking-[10px] m-0 md:tracking-[8.57px] md:text-[12px] mb-[-15px] xl:text-[14px]">
                New Product
              </h3>
            ) : (
              ""
            )}
            <h2 className="uppercase text-[28px] font-bold tracking-[1px] xl:mx-0 xl:mb-[14px] xl:text-[40px] xl:tracking-[1.43px] xl:leading-[44px]">
              {productName.map((name, index) => (
                <span key={index} className="block">
                  {name}
                </span>
              ))}
            </h2>
            <p className="text-[15px] opacity-50 leading-[25px] md:max-w-[572px] md:mx-auto xl:max-w-full xl:mx-0 xl:mb-[22px]">
              {getProduct[0].description}
            </p>
            <div className="text-[18px tracking-[1.29px] font-bold">
              {USDollar.format(getProduct[0].price)}
            </div>
            <div className="flex gap-x-4">
              <CartQuantity />
              <Button buttonType="buttonOneAlt" onClick={addToCart}>
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
        <div className="xl:flex xl:gap-x-[125px] xl:mb-[160px]">
          <div className="mb-[88px] md:mb-[120px] xl:mb-0 xl:max-w-[635px]">
            <h2 className="text-2xl font-bold tracking-[0.86px] leading-[36px] uppercase mb-6 md:text-[32px] md:tracking-[1.14px] xl:mb-8">
              Features
            </h2>
            {featuresDescription.map((description, index) => (
              <p
                className="text-[15px] leading-[25px] mb-6 last:mb-0 opacity-50"
                key={index}
              >
                {description}
              </p>
            ))}
          </div>
          <div className="mb-[88px] md:mb-[153px] md:flex md:gap-x-[167px] xl:mb-0 xl:flex-col">
            <h2 className="text-2xl font-bold tracking-[0.86px] leading-[36px] uppercase mb-6 md:text-[32px] md:tracking-[1.14px] xl:mb-8">
              In the Box
            </h2>
            <ul className="flex flex-col gap-y-2">
              {Object.values(getProduct[0].includes).map((feature, index) => (
                <li
                  className="text-[15px] leading-[25px] flex gap-x-6"
                  key={index}
                >
                  <span className="text-[#D87D4A] font-bold">
                    {feature.quantity}x
                  </span>
                  <span className="opacity-50">{feature.item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-y-5 mb-[120px] md:flex-row md:gap-x-[17.67px] xl:gap-x-[30px] xl:mb-[160px]">
          <div className="flex flex-col justify-between">
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet={require(`../../${getProduct[0].gallery.first.mobile}`)}
              />

              <source
                media="(max-width: 1199px)"
                srcSet={require(`../../${getProduct[0].gallery.first.tablet}`)}
              />
              <img
                className="object-cover rounded-[8px]"
                srcSet={require(`../../${getProduct[0].gallery.first.desktop}`)}
                alt=""
              />
            </picture>
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet={require(`../../${getProduct[0].gallery.second.mobile}`)}
              />

              <source
                media="(max-width: 1199px)"
                srcSet={require(`../../${getProduct[0].gallery.second.tablet}`)}
              />
              <img
                className="object-cover rounded-[8px]"
                srcSet={require(`../../${getProduct[0].gallery.second.desktop}`)}
                alt=""
              />
            </picture>
          </div>
          <div>
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet={require(`../../${getProduct[0].gallery.third.mobile}`)}
              />

              <source
                media="(max-width: 1199px)"
                srcSet={require(`../../${getProduct[0].gallery.third.tablet}`)}
              />
              <img
                className="object-cover rounded-[8px]"
                srcSet={require(`../../${getProduct[0].gallery.third.desktop}`)}
                alt=""
              />
            </picture>
          </div>
        </div>
        <div className="mb-[165px]">
          <h2 className="text-2xl font-bold tracking-[0.86px] leading-[36px] uppercase mb-10 text-center md:text-[32px] md:tracking-[1.14px] md:mb-[56px]">
            You May Also Like
          </h2>
          <div className="md:flex md:flex-row md:gap-x-[11px]">
            {Object.values(getProduct[0].others).map((product) => (
              <div
                className="text-[15px] leading-[25px] flex flex-col text-center gap-y-8 mb-14 last:mb-0 items-center"
                key={product.name}
              >
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet={require(`../../${product.image.mobile}`)}
                  />

                  <source
                    media="(max-width: 1199px)"
                    srcSet={require(`../../${product.image.tablet}`)}
                  />
                  <img
                    className="object-cover rounded-[8px]"
                    srcSet={require(`../../${product.image.desktop}`)}
                    alt=""
                  />
                </picture>
                <h3 className="uppercase font-bold text-[24px] tracking-[1.71px]">
                  {product.name}
                </h3>
                <Button url={`/product/${product.slug}`} buttonType="buttonOne">
                  See Product
                </Button>
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <Categories categories={categories} />
        </div>
      </div>
    </div>
  );
};

export default Product;

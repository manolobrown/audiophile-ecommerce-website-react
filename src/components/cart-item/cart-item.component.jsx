import CartQuantity from "../cart-quantity/cart-quantity.component";

const CartItem = ({ cartItem }) => {
  const { name, price, quantity, slug, id } = cartItem;
  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-x-4">
        <img
          className="rounded-lg w-[64px] h-[64px] object-cover"
          src={require(`../../assets/cart/image-${slug}.jpg`)}
          alt="earphones"
        />
        <div>
          <h4 className="text-[#000] font-bold">{name}</h4>
          <p className=" text-black/50 font-bold">{USDollar.format(price)}</p>
        </div>
      </div>
      <CartQuantity quantity={quantity} updateCart={true} productId={id} />
    </div>
  );
};

export default CartItem;

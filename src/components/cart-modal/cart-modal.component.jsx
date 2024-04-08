import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

const CartModal = () => {
  const { cartItems, cartItemsCount, cartItemsTotal, clearCart } =
    useContext(CartContext);
  const clearCartItems = () => {
    clearCart();
  };
  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="absolute z-10 top-[89px] w-full h-full bg-black/40 p-6">
      <div className="bg-white rounded-lg p-7">
        <div className="flex justify-between items-center mb-8">
          <strong className="uppercase">
            Cart <span>({cartItemsCount})</span>
          </strong>
          <Button buttonType="buttonText" onClick={clearCart}>
            <span className="underline">Remove all</span>
          </Button>
        </div>
        <div className="flex flex-col gap-y-4 mb-8">
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))}
        </div>
        <div className="flex justify-between items-center mb-6">
          <span className="text-black/50">Total</span>
          <span className="text-black font-bold">
            {USDollar.format(cartItemsTotal)}
          </span>
        </div>
        <Button buttonType="buttonOneAlt" otherClasses="max-w-full">
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default CartModal;

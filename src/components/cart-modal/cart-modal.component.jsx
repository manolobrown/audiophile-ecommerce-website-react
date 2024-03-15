import Button from "../button/button.component";
import CartQuantity from "../cart-quantity/cart-quantity.component";
const cartModal = () => {
  return (
    <div className="absolute z-10 top-[89px] w-full h-full bg-black/40 p-6">
      <div className="bg-white rounded-lg p-7">
        <div className="flex justify-between items-center mb-8">
          <strong className="uppercase">
            Cart <span>(0)</span>
          </strong>
          <Button buttonType="buttonText">
            <span className="underline">Remove all</span>
          </Button>
        </div>
        <div className="flex flex-col gap-y-4 mb-8">
          <div className="flex justify-between items-center">
            <div className="flex gap-x-4">
              <img
                className="rounded-lg w-[64px] h-[64px] object-cover"
                src={require("../../assets/cart/image-xx99-mark-two-headphones.jpg")}
                alt="earphones"
              />
              <div>
                <h4 className="text-[#000] font-bold">XX99 Mark II</h4>
                <p className=" text-black/50 font-bold">$299.00</p>
              </div>
            </div>
            <CartQuantity />
          </div>
        </div>
        <div className="flex justify-between items-center mb-6">
          <span className="text-black/50">Total</span>
          <span className="text-black font-bold">$5,396</span>
        </div>
        <Button buttonType="buttonOneAlt" otherClasses="max-w-full">
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default cartModal;

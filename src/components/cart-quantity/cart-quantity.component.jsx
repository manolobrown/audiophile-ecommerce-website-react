import { useState } from "react";

const CartQuantity = () => {
  const [counter, setCounter] = useState(1);
  //increase counter
  const increase = () => {
    setCounter((count) => count + 1);
  };

  //decrease counter
  const decrease = () => {
    if (counter > 1) {
      setCounter((count) => count - 1);
    }
  };
  return (
    <div className="flex items-center bg-[#F1F1F1] w-full max-w-[120px] flex-[0_0_100%] justify-center gap-x-5 text-[13px] font-bold tracking-[1px] min-h-[32px]">
      <button className="opacity-[25%]" onClick={decrease}>
        -
      </button>
      <span>{counter}</span>
      <button className="opacity-[25%]" onClick={increase}>
        +
      </button>
    </div>
  );
};

export default CartQuantity;

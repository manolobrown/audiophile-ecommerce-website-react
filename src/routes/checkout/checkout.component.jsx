import { useContext, useEffect } from "react";
import Button from "../../components/button/button.component";

const Checkout = () => {
  useEffect(() => {
    document.body.classList.add("checkout-page");
    return () => {
      document.body.classList.remove("checkout-page");
    };
  }, []);
  return (
    <div className="bg-white pb-[120px] xl:pb-[160px]">
      <div className="container">
        <div className="pt-4 pb-6">
          <Button url="" buttonType="buttonText">
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Checkout;

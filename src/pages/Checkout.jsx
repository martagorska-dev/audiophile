import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import {
  clearCart,
  getCart,
  getTotalCartPrice,
} from "../features/cart/CartSlice";
import { createOrder } from "../services/apiShop";
import { SHIPPING, VAT } from "../utils/constants";
import ButtonGoBack from "../ui/ButtonGoBack";
import Form from "../features/checkout/Form";
import Summary from "../features/checkout/Summary";
import OrderConfirmation from "../features/checkout/OrderConfirmation";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClick() {
    setIsModalOpen(false);
    dispatch(clearCart());
    navigate("/");
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      paymentMethod: "e-Money",
    },
  });

  const cart = useSelector(getCart);
  const firstProduct = cart.length > 0 ? cart.at(0) : null;
  const totalCartPrice = useSelector(getTotalCartPrice);
  const vat = totalCartPrice * VAT;
  const grandTotalCartPrice = totalCartPrice + SHIPPING + vat;

  async function onSubmit(data) {
    const newOrder = {
      ...data,
      cart,
      id: Date.now(),
    };
    await createOrder(newOrder);
    setIsModalOpen(true);
  }

  return (
    <>
      <div className="bg-background-100 px-6 pb-24 pt-16 sm:px-10 sm:pb-28 sm:pt-24 lg:py-36">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto grid grid-cols-1 grid-rows-[auto,auto] gap-8 lg:max-w-[1110px] lg:grid-cols-[auto,350px] lg:items-start"
        >
          <ButtonGoBack style="absolute top-28 lg:top-40 sm:top-32 text-gray-200" />
          <Form
            register={register}
            errors={errors}
            watch={watch}
            setValue={setValue}
          />
          <Summary
            cart={cart}
            totalCartPrice={totalCartPrice}
            vat={vat}
            grandTotalCartPrice={grandTotalCartPrice}
          />
        </form>
      </div>
      <OrderConfirmation
        isModalOpen={isModalOpen}
        onClick={handleClick}
        cart={cart}
        firstProduct={firstProduct}
        grandTotalCartPrice={grandTotalCartPrice}
      />
    </>
  );
}

export default Checkout;

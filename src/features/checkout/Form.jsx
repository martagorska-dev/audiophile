import { useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import {
  validateEmail,
  validatePhone,
  validateCode,
  formatPhoneNumber,
  formatCode,
} from "../../utils/helpers";
import Input from "./Input";
import Radio from "./Radio";

function Form({ register, errors, watch, setValue }) {
  const [, setFormattedPhone] = useState("");
  const [, setFormattedCode] = useState("");
  const { isTablet } = useMediaQuery();

  const paymentMethod = watch("paymentMethod");

  const handlePhoneChange = (e) => {
    const phoneValue = e.target.value;
    const formattedValue = formatPhoneNumber(phoneValue);

    setFormattedPhone(formattedValue);
    setValue("phone", formattedValue);
  };

  const handleCodeChange = (e) => {
    const codeValue = e.target.value;
    const formattedValue = formatCode(codeValue);

    setFormattedCode(formattedValue);
    setValue("code", formattedValue);
  };

  return (
    <section className="rounded-lg bg-white p-6 sm:p-8 lg:px-12 lg:pb-12 lg:pt-14">
      {isTablet ? (
        <h4 className="mb-10">Checkout</h4>
      ) : (
        <h3 className="mb-10">Checkout</h3>
      )}
      <p className="custom-subtitle mb-4 text-primary-100">Billing details</p>
      <div className="mb-8 grid grid-cols-1 gap-x-4 gap-y-6 sm:mb-14 sm:grid-cols-2">
        <Input
          register={register}
          errors={errors}
          id="name"
          type="text"
          placeholder="Jan Kowalski"
        >
          Name
        </Input>
        <Input
          register={register}
          errors={errors}
          id="email"
          type="email"
          placeholder="jankowalski@gmail.com"
          validate={validateEmail}
        >
          Email Address
        </Input>
        <Input
          register={register}
          errors={errors}
          id="phone"
          type="text"
          placeholder="123-456-789"
          onChange={handlePhoneChange}
          validate={validatePhone}
        >
          Phone Number
        </Input>
      </div>
      <p className="custom-subtitle mb-4 text-primary-100">Shipping info</p>
      <div className="mb-8 grid grid-cols-1 gap-x-4 gap-y-6 sm:mb-14 sm:grid-cols-2">
        <Input
          register={register}
          errors={errors}
          id="address"
          type="text"
          placeholder="Mikołaja Kopernika 1/2"
          style="sm:col-span-2"
        >
          Address
        </Input>
        <Input
          register={register}
          errors={errors}
          id="code"
          type="text"
          placeholder="00-000"
          onChange={handleCodeChange}
          validate={validateCode}
        >
          ZIP Code
        </Input>
        <Input
          register={register}
          errors={errors}
          id="city"
          type="text"
          placeholder="Warszawa"
        >
          City
        </Input>
        <Input
          register={register}
          errors={errors}
          id="country"
          type="text"
          placeholder="Polska"
        >
          Country
        </Input>
      </div>
      <p className="custom-subtitle mb-4 text-primary-100">Payment Details</p>
      <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
        <div className="text-[12px] font-bold tracking-[-.21px]">
          Payment Method
        </div>
        <div className="flex flex-col gap-4">
          <Radio register={register} value="e-Money" />
          <Radio register={register} value="Cash on Delivery" />
        </div>
      </div>
      {paymentMethod === "e-Money" && (
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Input
            register={register}
            errors={errors}
            id="e-Money-number"
            type="text"
            placeholder="123456789"
          >
            e-Money Number
          </Input>
          <Input
            register={register}
            errors={errors}
            id="e-Money-PIN"
            type="text"
            placeholder="1234"
          >
            e-Money PIN
          </Input>
        </div>
      )}
      {paymentMethod === "Cash on Delivery" && (
        <div className="mt-6 flex w-full items-center gap-8">
          <img
            src="/assets/checkout/icon-cash-on-delivery.svg"
            alt="Cash on delivery icon"
          />
          <p>
            The &apos;Cash on Delivery&apos; option enables you to pay in cash
            when our delivery courier arrives at your residence. Just make sure
            your address is correct so that your order will not be cancelled.
          </p>
        </div>
      )}
    </section>
  );
}

export default Form;

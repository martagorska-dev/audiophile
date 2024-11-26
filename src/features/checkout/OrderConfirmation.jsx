import { useState } from "react";
import { formatPrice } from "../../utils/helpers";
import Modal from "../../ui/Modal";
import ButtonOrange from "../../ui/ButtonOrange";
import OrderConfirmationProduct from "./OrderConfirmationProduct";

function OrderConfirmation({
  isModalOpen,
  onClick,
  cart,
  firstProduct,
  grandTotalCartPrice,
}) {
  const [seeAllProducts, setSeeAllProducts] = useState(false);

  function handleSeeAllProducts() {
    setSeeAllProducts(!seeAllProducts);
  }

  return (
    isModalOpen && (
      <div className="mx-6 flex items-center justify-center">
        <Modal
          onClick={onClick}
          style="absolute top-28 mx-6 w-auto p-8 text-left sm:w-[540px] sm:p-12"
        >
          <img
            src="/assets/checkout/icon-order-confirmation.svg"
            alt="Order confirmation icon"
            className="mb-8"
          />
          <h3 className="mb-6">
            Thank you<br></br> for your order
          </h3>
          <p className="mb-8">
            You will receive an email confirmation shortly.
          </p>
          <div className="mb-12 grid grid-cols-1 overflow-hidden rounded-lg sm:grid-cols-[auto_198px]">
            <div className="bg-background-100 p-6">
              <ul className="mb-4 flex flex-col gap-4">
                {seeAllProducts ? (
                  cart.map((product) => (
                    <OrderConfirmationProduct
                      key={product.id}
                      product={product}
                    />
                  ))
                ) : (
                  <OrderConfirmationProduct product={firstProduct} />
                )}
              </ul>
              {cart.length > 1 && (
                <button onClick={handleSeeAllProducts} className="w-full">
                  <p className="border-t border-gray-50 pt-3 text-center text-[12px] font-bold tracking-[-.21px]">
                    {seeAllProducts
                      ? `see less`
                      : `and ${cart.length - 1} other item(s)`}
                  </p>
                </button>
              )}
            </div>
            <div className="flex flex-col justify-center gap-2 bg-background-200 px-6 py-4 text-white sm:justify-end sm:pb-10 sm:pl-8">
              <p className="font-normal uppercase">Grand total</p>
              <span>{formatPrice(grandTotalCartPrice)}</span>
            </div>
          </div>
          <ButtonOrange onClick={onClick} widthFull={true}>
            Back to home
          </ButtonOrange>
        </Modal>
      </div>
    )
  );
}

export default OrderConfirmation;

import { formatPrice } from "../../utils/helpers";
import { SHIPPING } from "../../utils/constants";
import SummaryProduct from "./SummaryProduct";
import ButtonOrange from "../../ui/ButtonOrange";

function Summary({ cart, totalCartPrice, vat, grandTotalCartPrice }) {
  return (
    <section className="flex flex-col rounded-lg bg-white p-6 sm:p-8">
      <h6 className="mb-8">Summary</h6>
      {cart.length === 0 && (
        <div className="mb-8 text-center">Your cart is empty</div>
      )}
      {cart.length > 0 && (
        <ul className="mb-8 flex flex-col gap-6">
          {cart.map((product) => (
            <SummaryProduct key={product.id} product={product} />
          ))}
        </ul>
      )}
      <div className="mb-2 flex justify-between">
        <div className="uppercase text-gray-200">Total</div>
        <h6>{formatPrice(totalCartPrice)}</h6>
      </div>
      <div className="mb-2 flex justify-between">
        <div className="uppercase text-gray-200">Shipping</div>
        <h6>{formatPrice(SHIPPING)}</h6>
      </div>
      <div className="mb-6 flex justify-between">
        <div className="uppercase text-gray-200">Vat (included)</div>
        <h6>{formatPrice(vat)}</h6>
      </div>
      <div className="mb-8 flex justify-between">
        <div className="uppercase text-gray-200">Grand total</div>
        <h6 className="text-primary-100">{formatPrice(grandTotalCartPrice)}</h6>
      </div>
      <ButtonOrange widthFull={true} disabled={cart.length === 0}>
        Continue & pay
      </ButtonOrange>
    </section>
  );
}

export default Summary;

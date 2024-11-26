import { useSelector } from "react-redux";
import { getCart, getTotalCartPrice, getTotalCartQuantity } from "./CartSlice";
import CartProduct from "./CartProduct";
import ClearCart from "./ClearCart";
import Modal from "../../ui/Modal";
import ButtonLinkOrange from "../../ui/ButtonLinkOrange";
import { formatPrice } from "../../utils/helpers";

function Cart({ onIsCartOpen }) {
  const cart = useSelector(getCart);
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  return (
    <Modal
      onClick={onIsCartOpen}
      style="w-full absolute right-0 top-20 p-6 text-center sm:w-[377px] md:p-8"
    >
      {cart.length === 0 && <div>Your cart is empty</div>}
      {cart.length > 0 && (
        <div className="flex flex-col">
          <div className="mb-8 flex justify-between">
            <h6>Total({totalCartQuantity})</h6>
            <ClearCart />
          </div>
          <ul className="mb-8 flex flex-col gap-6">
            {cart.map((product) => (
              <CartProduct key={product.id} product={product} />
            ))}
          </ul>
          <div className="mb-6 flex justify-between">
            <div className="uppercase text-gray-200">Total</div>
            <h6>{formatPrice(totalCartPrice)}</h6>
          </div>
          <ButtonLinkOrange to="/checkout" widthFull={true}>
            Checkout
          </ButtonLinkOrange>
        </div>
      )}
    </Modal>
  );
}

export default Cart;

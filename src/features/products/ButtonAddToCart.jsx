import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  changeProductQuantity,
  getCurrentQuantityById,
} from "../cart/CartSlice";
import ButtonQuantity from "./ButtonQuantity";

function ButtonAddToCart({ product }) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const { id, slug, name, price } = product;
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;

  function handleIncreaseQuantity() {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }

  function handleDecreaseQuantity() {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  }

  function handleAddToCart() {
    if (isInCart) {
      dispatch(changeProductQuantity({ id, quantity }));
      setQuantity(1);
      return;
    }

    const newProduct = {
      id,
      image: `/assets/cart/image-${slug}.jpg`,
      name: name.trim().split(" ").slice(0, -1).join(" "),
      unitPrice: price,
      quantity: quantity,
      totalPrice: price * quantity,
    };
    dispatch(addProduct(newProduct));
    setQuantity(1);
  }

  return (
    <div className="flex gap-4">
      <ButtonQuantity
        quantity={quantity}
        onDecreaseQuantity={handleDecreaseQuantity}
        onIncreaseQuantity={handleIncreaseQuantity}
      />
      <button
        onClick={handleAddToCart}
        className={`custom-subtitle flex h-[48px] w-[160px] items-center justify-center bg-primary-100 text-white transition-colors hover:bg-primary-50`}
      >
        Add to cart
      </button>
    </div>
  );
}

export default ButtonAddToCart;

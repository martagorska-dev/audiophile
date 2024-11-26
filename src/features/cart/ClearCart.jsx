import { useDispatch } from "react-redux";
import { clearCart } from "./CartSlice";

function ClearCart() {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(clearCart())} className="text-gray-200">
      Remove All
    </button>
  );
}

export default ClearCart;

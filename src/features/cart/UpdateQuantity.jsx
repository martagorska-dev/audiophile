import { useDispatch } from "react-redux";
import { decreaseProductQuantity, increaseProductQuantity } from "./CartSlice";

function UpdateQuantity({ id, quantity }) {
  const dispatch = useDispatch();

  return (
    <div className="custom-subtitle flex h-[32px] w-[96px] items-center justify-center gap-3 bg-background-100">
      <button
        onClick={() => dispatch(decreaseProductQuantity(id))}
        className="opacity-25 hover:text-primary-100"
      >
        -
      </button>
      <span className="w-6 text-center">{quantity}</span>
      <button
        onClick={() => dispatch(increaseProductQuantity(id))}
        className="opacity-25 hover:text-primary-100"
      >
        +
      </button>
    </div>
  );
}

export default UpdateQuantity;

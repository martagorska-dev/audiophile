import { formatPrice } from "../../utils/helpers";
import UpdateQuantity from "./UpdateQuantity";

function CartProduct({ product }) {
  const { id, image, name, unitPrice, quantity } = product;

  return (
    <li key={id} className="flex justify-between">
      <div className="flex gap-4">
        <img
          src={image}
          alt={`${name} image`}
          className="h-16 w-16 rounded-lg"
        />
        <div className="text-left">
          <div className="font-bold">{name}</div>
          <div className="custom-subtitle text-gray-200">
            {formatPrice(unitPrice)}
          </div>
        </div>
      </div>
      <UpdateQuantity id={id} quantity={quantity} />
    </li>
  );
}

export default CartProduct;

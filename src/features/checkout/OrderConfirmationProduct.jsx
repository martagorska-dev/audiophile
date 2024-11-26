import { formatPrice } from "../../utils/helpers";

function OrderConfirmationProduct({ key, product }) {
  const { image, name, unitPrice, quantity } = product;

  return (
    <li key={key} className="flex justify-between">
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
      <div className="text-gray-200">x{quantity}</div>
    </li>
  );
}

export default OrderConfirmationProduct;

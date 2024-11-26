function ButtonQuantity({ quantity, onDecreaseQuantity, onIncreaseQuantity }) {
  return (
    <div className="custom-subtitle flex h-[48px] w-[120px] items-center justify-center gap-6 bg-background-100">
      <button
        onClick={onDecreaseQuantity}
        className="opacity-25 hover:text-primary-100"
      >
        -
      </button>
      <span className="w-6 text-center">{quantity}</span>
      <button
        onClick={onIncreaseQuantity}
        className="opacity-25 hover:text-primary-100"
      >
        +
      </button>
    </div>
  );
}

export default ButtonQuantity;

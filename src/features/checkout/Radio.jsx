function Radio({ register, value }) {
  return (
    <label className="custom-input flex items-center gap-4">
      <input
        type="radio"
        value={value}
        {...register("paymentMethod", {
          required: "Please select payment method",
        })}
      />
      <span className="custom-radio"></span>
      <span>{value}</span>
    </label>
  );
}

export default Radio;

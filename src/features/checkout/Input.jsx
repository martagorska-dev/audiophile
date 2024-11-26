function Input({
  register,
  errors,
  id,
  type,
  placeholder,
  onChange,
  validate,
  children,
  style,
}) {
  return (
    <div className={`flex flex-col ${style ? style : ""}`}>
      <div className="flex justify-between">
        <label
          htmlFor={id}
          className={`custom-label ${errors[id] ? "error" : ""}`}
        >
          {children}
        </label>
        {errors[id] && (
          <p className="custom-error-message">{errors[id].message}</p>
        )}
      </div>
      <input
        id={id}
        {...register(id, {
          required: `${children} is required`,
          validate: validate,
        })}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className={`custom-input ${errors[id] ? "error" : ""}`}
      />
    </div>
  );
}

export default Input;

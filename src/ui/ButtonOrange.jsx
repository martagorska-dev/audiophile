function ButtonOrange({ onClick, widthFull, disabled, children }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${widthFull ? "w-full" : "w-[160px]"} custom-subtitle flex h-[48px] items-center justify-center bg-primary-100 text-white transition-colors hover:bg-primary-50 disabled:cursor-not-allowed disabled:bg-primary-50`}
    >
      {children}
    </button>
  );
}

export default ButtonOrange;

function Overlay({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="fixed inset-0 z-30 bg-black bg-opacity-40"
    ></div>
  );
}

export default Overlay;

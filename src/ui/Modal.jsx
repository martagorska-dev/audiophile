import Overlay from "./Overlay";

function Modal({ onClick, style, children }) {
  return (
    <>
      <Overlay onClick={onClick} />
      <div className={`${style} z-40 rounded-lg bg-white`}>{children}</div>
    </>
  );
}

export default Modal;

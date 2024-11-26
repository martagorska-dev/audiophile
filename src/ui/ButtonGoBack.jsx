import { useMoveBack } from "../hooks/useMoveBack";

function ButtonGoBack({ style }) {
  const moveBack = useMoveBack();

  return (
    <button onClick={moveBack} className={style}>
      Go Back
    </button>
  );
}

export default ButtonGoBack;

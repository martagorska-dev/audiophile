import { useRouteError } from "react-router-dom";
import ButtonGoBack from "./ButtonGoBack";

function Error({ customErrorMessage }) {
  const error = useRouteError();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8">
      <div className="text-center">
        <h2>Something went wrong</h2>
        <p>{customErrorMessage || error.data || error.message}</p>
      </div>
      <ButtonGoBack style="text-gray-200" />
    </div>
  );
}

export default Error;

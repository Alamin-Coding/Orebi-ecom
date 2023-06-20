import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="text-center flex flex-col justify-center items-center gap-3 p-8 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link className="text-green-700 border border-green-700 py-2 px-4 inline-block" to={"/"}>Back to Home</Link>
    </div>
  );
}
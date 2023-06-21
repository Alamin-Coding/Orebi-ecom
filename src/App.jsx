import ErrorPage from "./error-page";
import Root from "./routes/Root";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./routes/contact";
import Home from "./routes/Home";
import About from "./routes/about";
import Shop from "./routes/shop";
import Journal from "./routes/journal";
import SingleProduct from "./routes/singleProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "journal",
        element: <Journal />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "product/:id",
        element: <SingleProduct />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

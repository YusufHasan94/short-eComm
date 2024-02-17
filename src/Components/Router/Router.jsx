import { createBrowserRouter } from "react-router-dom";
import App from "../../App.jsx";
import Home from "../Home/Home.jsx";
import ProductDetails from "../ProductDetails/ProductDetails.jsx";
import Product from "../Product/Product.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product-details/:id",
        element: <ProductDetails />,
      },
    ],
  },
]);

export default router;

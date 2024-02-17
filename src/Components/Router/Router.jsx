import { createBrowserRouter } from "react-router-dom";
import App from "../../App.jsx";
import Home from "../Home/Home.jsx";
import Login from "../Login/Login.jsx";

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
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;

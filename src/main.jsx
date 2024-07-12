
import  React from "react";
import  ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
// import Contact from "./routes/contact";
import {Introduction,Quickstart,Introductiontomarscode,Introtollm} from "../docs/components";
import ErrorPage from "../component/error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
    // loader: rootLoader,
    children: [
      {
        path: "*",
        element: <Introduction />,
      },
      {
        path: "/",
        element: <Introduction />,
      },
      {
        path: "/introduction",
        element: <Introduction />,
      },
      {
        path: "/quickstart",
        element: <Quickstart />,
      },
      {
        path: "/introductiontomarscode",
        element: <Introductiontomarscode />,
      },
      {
        path: "/introtollm",
        element: <Introtollm />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    </React.StrictMode>
);


import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/js/bootstrap";
import "./mgv.css";

import App from "./App";
import ErrorPage from "./error-page";
import Home from "./components/home.jsx";
import CreateAccount from "./components/create_account.jsx";
import Deposit from "./components/deposit.jsx";
import Withdraw from "./components/withdraw.jsx";
import AllData from "./components/all_data.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "create-account/",
        element: <CreateAccount />,
      },
      {
        path: "deposit/",
        element: <Deposit />,
      },
      {
        path: "withdraw/",
        element: <Withdraw />,
      },
      {
        path: "all-data/",
        element: <AllData />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import Layout from "./components/Layout";
import ProductList from "./pages/ProductList";
import ProductAdd from "./pages/ProductAdd";
import Order from "./pages/Order";
import Dashboard from "./pages/Dashboard";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Toaster } from "react-hot-toast";
import ProductEdit from "./pages/ProductEdit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        loader: () => redirect("/dashboard"),
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "product/list",
        element: <ProductList />,
      },
      {
        path: "product/add",
        element: <ProductAdd />,
      },
      {
        path: "product/edit/:productId",
        element: <ProductEdit />,
      },
      {
        path: "order",
        element: <Order />,
      },
      {
        path: "*",
        loader: () => redirect("/dashboard"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <Toaster />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

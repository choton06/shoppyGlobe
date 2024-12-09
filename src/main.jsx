import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import NotFound from "./Component/NotFound.jsx";
import ProductList from "./Component/ProductList.jsx";
import Loading from "./Component/Loading.jsx";

const About = lazy(() => import("./Component/About.jsx"));
const Contact = lazy(() => import("./Component/Contact.jsx"));
const CheckoutPage = lazy(() => import("./Component/CheackOutPage.jsx"));
const CartItem = lazy(() => import("./Component/CartIem.jsx"));
const Cart = lazy(() => import("./Component/Cart.jsx"));
const ProductDetails = lazy(() => import("./Component/ProductDetails.jsx"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ProductList />,
      },
      {
        path: "/productDetails/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <ProductDetails />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Loading />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<Loading />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<Loading />}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/cart-item/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <CartItem />
          </Suspense>
        ),
      },
      {
        path: "/checkout",
        element: (
          <Suspense fallback={<Loading />}>
            <CheckoutPage />
          </Suspense>
        ),
      },
    ],
    errorElement: <NotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);


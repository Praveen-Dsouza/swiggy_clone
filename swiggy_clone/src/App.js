import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Support from "./components/Support";
import Offers from "./components/Offers";
import Checkout from "./components/Checkout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Navbar/>,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "offers-near-me",
        element: <Offers />,
      },
      {
        path: "support",
        element: <Support />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
    ],
    errorElement: <PageNotFound/>
  }
]);

function App() {
  return (
    <div className="">
      <React.StrictMode>
        <RouterProvider router={appRouter} />
      </React.StrictMode>
    </div>
  );
}

export default App;

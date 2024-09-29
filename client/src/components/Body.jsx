import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Search from "./Search";
import Desc from "./Desc";

const Body = () => {
  const Layout = () => {
    return (
      <div className="">
        <Header />
        <Outlet />
      </div>
    );
  };

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, // Using Layout as the wrapper for pages
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/search",
          element: <Search />,
        },
        {
          path: "/desc",
          element: <Desc />,
        },
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;

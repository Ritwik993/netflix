import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);

const Body = () => {
  return (
    <div className="p-0 m-0 w-screen overflow-x-hidden box-border">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;

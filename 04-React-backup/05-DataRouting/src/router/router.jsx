import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path:'/contact',
    element:<Contact/>
  },
  {
    path:'/about',
    element:<About/>
  }
]);

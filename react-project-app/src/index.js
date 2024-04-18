import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import reportWebVitals from "./reportWebVitals";
import { Home } from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About } from "./pages/About";
import { Casestudy } from "./pages/CaseStudy";
import { Contact } from "./pages/Contact";
import { Services } from "./pages/Services";
import { Error404 } from "./pages/404";
import { Blog } from "./pages/Blog";
import { Clothing } from "./pages/Clothing";

const root = ReactDOM.createRoot(document.getElementById("root"));
let allRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about-us",
    element: <About />,
  },
  {
    path: "case-study",
    element: <Casestudy />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "services",
    element: <Services />,
  },
  {
    path: "blogs",
    element: <Blog />,
  },
  {
    path: "shops",
    element: <Clothing />,
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={allRoutes} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

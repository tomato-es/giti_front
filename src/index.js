import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./page/Home";
import Result from "./page/Result";
import { createGlobalStyle } from "styled-components";
import Loading from "./page/Loading";
import { RecoilRoot } from "recoil";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    appearance: none;
    -webkit-appearance: none;
  }

  input{
    appearance: none;
    -webkit-appearance: none;
    -webkit-border-radius: 0;
  }

  body, html {
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    background-color: rgb(14,17,22);
    -webkit-appearance: none;

  }
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/loading",
    element: <Loading></Loading>,
  },
  {
    path: "/result",
    element: <Result></Result>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

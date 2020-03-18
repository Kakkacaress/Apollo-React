import React from "react";
import { render } from "react-dom";
import "./styles/index.css";
import App from "./components/App";
import ThemeProvider from "./helpers/themes/ThemeProvider.helper";

const ROOT = document.getElementById("root");
render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  ROOT
);

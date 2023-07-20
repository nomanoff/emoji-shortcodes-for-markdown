import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { AppProvider } from "./contextapi";
import ReactGA from "react-ga4";

ReactGA.initialize("G-F4WVHCE0FP");

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

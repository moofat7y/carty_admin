import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "@material-tailwind/react";
import "./styles/index.css";
import { Provider } from "react-redux";
import store from "./redux/store.jsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ThemeProvider>
      <Toaster />
      <App />
    </ThemeProvider>
  </Provider>
);

import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import allReducers from "./reducers";
import { createStore } from "redux";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);
const store1 = createStore(allReducers);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

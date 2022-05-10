import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./config/store";
import ClickPage from "./containers/clickPage";

import "./styles/main.scss";

ReactDOM.render(
  <Provider store={store}>
    <ClickPage />
  </Provider>,
  document.getElementById("root")
);

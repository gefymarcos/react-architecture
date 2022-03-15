import { ApolloProvider } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import apolloClient from "./config/apollo";
import { store } from "./config/store";
import ClickPage from "./containers/clickPage";

import "./styles/main.scss";

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={apolloClient}>
      <ClickPage />
    </ApolloProvider>
  </Provider>,
  document.getElementById("root")
);

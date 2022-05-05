import { ApolloProvider } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom";
import apolloClient from "./config/apollo";
import ClickPage from "./containers/clickPage";

import "./styles/main.scss";

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <ClickPage />
  </ApolloProvider>,
  document.getElementById("root")
);

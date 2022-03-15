import { ApolloClient, InMemoryCache } from "@apollo/client/core";

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://graphql-weather-api.herokuapp.com/",
  headers: {
    authorization: localStorage.getItem("token") || "",
    "client-name": "Space Explorer [web]",
    "client-version": "1.0.0"
  }
});

export default apolloClient;

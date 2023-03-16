import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";

import App from "./App";

import "./styles/style.css";
import client from "./service";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const host = import.meta.env.VITE_API_HOST;
// const token = import.meta.env.VITE_API_TOKEN;

// const authLink = setContext((_, { headers }) => {
//   return {
//     headers: { ...headers, authorization: token ? `Bearer ${token}` : "" },
//   };
// });

// const httpLink = createHttpLink({ uri: host });
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: host,
  // link: authLink.concat(httpLink),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

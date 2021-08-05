import { ApolloClient, InMemoryCache } from "@apollo/client";

// const token =
//   typeof window === "undefined" ? null : localStorage.getItem("login-token");
export const client = new ApolloClient({
  uri: "http://127.0.0.1:8000/graphql",
  credentials: "include",
  ssrMode: true,
  cache: new InMemoryCache(),
  // headers: {
  //   authorization: token ? `Bearer ${token}` : "",
  // },
});

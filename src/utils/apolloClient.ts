import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// const authLink = setContext(() => {
//   console.log("lksjdf");
//   const token =
//     typeof window === "undefined" ? null : localStorage.getItem("login-token");
//   return {
//     headers: {
//       authorization: token ? `JWT ${token}` : "",
//     },
//   };
// });

const link = createHttpLink({
  uri: "http://127.0.0.1:8000/graphql",
  credentials: "include",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("login-token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `JWT ${token}` : "",
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(link),
  ssrMode: true,
  cache: new InMemoryCache(),
});

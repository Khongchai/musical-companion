import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import getAuthToken from "./getAuthToken";

const link = createHttpLink({
  uri:
    process.env.NODE_ENV === "production"
      ? "https://musical-companion.herokuapp.com/graphql"
      : "http://localhost:8000/graphql",
  credentials: "include",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = getAuthToken();
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

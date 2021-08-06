import { ApolloProvider } from "@apollo/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import * as React from "react";
import "../../public/fonts/style.css";
import theme from "../../theme";
import Navbar from "../components/Navbar";
import { client } from "../utils/apolloClient";

function MyApp({ Component, pageProps }: any) {
  return (
    <ChakraProvider theme={theme}>
      <ApolloProvider client={client}>
        <Navbar />
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Component {...pageProps} />
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default MyApp;

import { ApolloProvider } from "@apollo/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import * as React from "react";
import "../../public/fonts/style.css";
import theme from "../../theme";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../css/accompaniment-loader.css";
import "../css/loader.css";
import "../css/smart-soloist-image.css";
import { client } from "../utils/apolloClient";

function MyApp({ Component, pageProps }: any) {
  return (
    <ChakraProvider theme={theme}>
      <ApolloProvider client={client}>
        <Navbar />
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Component {...pageProps} />
        <Footer />
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default MyApp;

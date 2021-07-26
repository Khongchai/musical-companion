import * as React from "react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "../../theme";
import Navbar from "../components/Navbar";
import "../../public/fonts/style.css";

function MyApp({ Component, pageProps }: any) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;

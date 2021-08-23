// theme.js
// 1. import `extendTheme` function
import { extendTheme, ThemeConfig } from "@chakra-ui/react";
// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const colors = {
  mainGrey: "#6D6D6D",
  mainRed: "#D2042D",
  mainBlack: "#1A202C",
};

// 3. extend the theme
const fonts = {
  body: "Selawik",
  heading: "Castellar, Selawik",
};
export default extendTheme({
  config,
  fonts,
  colors,
});

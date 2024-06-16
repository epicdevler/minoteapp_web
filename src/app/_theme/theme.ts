// theme.js

// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";

// 2. Add your color mode config
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
  fonts: {
    heading: "var(--font-rubik)",
    body: "var(--font-rubik)",
  },
  colors : {
    primary: '#0058CB',
  }
};

// 3. extend the theme
const theme = extendTheme({ config });

export default theme;

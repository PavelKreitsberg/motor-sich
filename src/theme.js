import { createTheme } from "styled-breakpoints";

const themeStyles = {
  colors: {
    bcgDark: "#051934",
    bcgLight: "#ffffff",
    bcgGrey: "#edeff3",
    textLight: "#ffffff",
    textDark: "",
    accentColor: "#fd1541",
    accentSecond: "#0A7273",
  },
  fontSizes: {
    sm: "16px",
    md: "24px",
    xl: "32px",
    xxl: "40px",
  },
};

const themeBreakpoints = createTheme({
  mobile: "320px",
  tablet: "768px",
  pcSizeS: "912px",
  pc: "1280px",
});

export const theme = { ...themeStyles, ...themeBreakpoints };

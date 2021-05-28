import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  // base colors
  primary: "#F74873",
  primary_1: "#FC6D3F",    // orange
  secondary: "#CDCDD2",  // gray
  optional: "#F98244",   // button

  // colors
  black: "#1E1F20",
  white: "#FFFFFF",

  // linear-gradient colors
  gradient1: "#F98244",
  gradient2: "#F74873",
  gradient3: "#ff1f56",

  // optional secondary colors
  lightGray: "#F5F5F6",
  lightGray2: "#F6F6F7",
  lightGray3: "#EFEFF1",
  lightGray4: "#F8F8F9",
  transparent: "transparent",
  darkgray: '#898C95',
};
export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 30,
  padding: 10,
  padding2: 12,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height
};
const appTheme = { COLORS, SIZES };

export default appTheme;

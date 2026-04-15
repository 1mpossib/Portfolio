import { theme as antdTheme } from "antd";
import { lightColors } from "../tokens/colors/light";
import { darkColors } from "../tokens/colors/dark";

export const lightTheme = {
  algorithm: antdTheme.defaultAlgorithm,
  token: {
    ...lightColors,
  },
};

export const darkTheme = {
  algorithm: antdTheme.darkAlgorithm,
  token: {
    ...darkColors,
  },
};

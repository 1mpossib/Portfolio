import { theme as antdTheme } from "antd";
import { lightColors } from "../tokens/colors/light";
import { darkColors } from "../tokens/colors/dark";
import { commonComponentTokens } from "../tokens/components";

export const lightTheme = {
  algorithm: antdTheme.defaultAlgorithm,
  token: {
    ...lightColors,
  },
  components: {
    ...commonComponentTokens,
  },
};

export const darkTheme = {
  algorithm: antdTheme.darkAlgorithm,
  token: {
    ...darkColors,
  },
  components: {
    ...commonComponentTokens,
  },
};

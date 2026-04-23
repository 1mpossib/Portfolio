import { type ThemeConfig } from "antd";

export const commonComponentTokens: ThemeConfig["components"] = {
  Typography: {
    titleMarginTop: 0,
    titleMarginBottom: 0,
  },
  Button: {
    borderRadius: 8,
    borderRadiusLG: 8,
    borderRadiusSM: 4,
    fontWeight: 400,
  },
  Card: {
    paddingLG: 24,
    borderRadiusLG: 12,
  },
  Divider: {
    marginLG: 16,
  },
};

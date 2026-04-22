import { Button } from "antd";
import { useTheme } from "../../context/themeContext";
import { SunOutlined, MoonOutlined } from "@ant-design/icons";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      shape="circle"
      onClick={toggleTheme}
      icon={theme === "dark" ? <MoonOutlined /> : <SunOutlined />}
    />
  );
}

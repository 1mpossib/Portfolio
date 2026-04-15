import { ConfigProvider } from "antd";
import { lightTheme, darkTheme } from "./theme/theme";
import { useTheme } from "./context/themeContext";
import { Button } from "antd";

function App() {
  const { theme, toggleTheme } = useTheme();

  const selectedTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <ConfigProvider theme={selectedTheme}>
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          gap: 6,
        }}
      >
        <p>Hello Vite!</p>
        <Button onClick={toggleTheme}>Toggle Theme</Button>
      </div>
    </ConfigProvider>
  );
}

export default App;

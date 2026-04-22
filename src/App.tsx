import { ConfigProvider } from "antd";
import { lightTheme, darkTheme } from "./theme/theme";
import { useTheme } from "./context/themeContext";
import "./App.css";
import MainLayout from "./layout/MainLayout";

function App() {
  const { theme } = useTheme();
  const selectedTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <ConfigProvider theme={selectedTheme}>
      <MainLayout>
        <p>Hello Vite!</p>
      </MainLayout>
    </ConfigProvider>
  );
}

export default App;

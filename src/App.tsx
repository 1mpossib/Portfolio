import { ConfigProvider } from "antd";
import { lightTheme, darkTheme } from "./theme/theme";
import { useTheme } from "./context/themeContext";
import { Layout } from "antd";
import "./App.css";
import ThemeToggle from "./components/ThemeToggle";

const { Content } = Layout;

function App() {
  const { theme, toggleTheme } = useTheme();

  const selectedTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <ConfigProvider theme={selectedTheme}>
      <Layout style={{ height: "100vh", padding: "10px" }}>
        <Content>
          <div
            style={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <p>Hello Vite!</p>
            <ThemeToggle />
          </div>
        </Content>
      </Layout>
    </ConfigProvider>
  );
}

export default App;

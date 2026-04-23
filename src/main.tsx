import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./context/themeContext.tsx";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
);

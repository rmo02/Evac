import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { AppRoutes } from "./routes/app.routes";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <div className="App">
          <AppRoutes />
        </div>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;

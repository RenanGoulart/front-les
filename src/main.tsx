import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import AppRoutes from "./routes/Routes";
import { theme } from "./styles/theme";
import GlobalStyle from "./styles/global";
import ClientProvider from "./hooks/useClient";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ClientProvider>
      <ThemeProvider theme={theme}>
        <AppRoutes />
        <GlobalStyle />
      </ThemeProvider>
    </ClientProvider>
  </React.StrictMode>,
);

import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppRoutes from "./routes/Routes";
import { theme } from "./styles/theme";
import GlobalStyle from "./styles/global";
import ClientProvider from "./hooks/useClient";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ClientProvider>
        <ThemeProvider theme={theme}>
          <AppRoutes />
          <GlobalStyle />
        </ThemeProvider>
      </ClientProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);

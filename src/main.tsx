import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import { queryClient } from "./lib/queryClient";
import AppRoutes from "./routes/Routes";
import { theme } from "./styles/theme";
import GlobalStyle from "./styles/global";
import ClientProvider from "./contexts/useClient";
import CartProvider from "./contexts/useCart";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ClientProvider>
        <CartProvider>
          <ThemeProvider theme={theme}>
            <AppRoutes />
            <GlobalStyle />
            <ToastContainer />
          </ThemeProvider>
        </CartProvider>
      </ClientProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);

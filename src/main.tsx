import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from './routes/Routes.tsx'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme.ts'
import GlobalStyle from './styles/global.ts'
import ClientProvider from './hooks/useClient.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClientProvider>
      <ThemeProvider theme={theme}>
        <AppRoutes />
        <GlobalStyle />
      </ThemeProvider>
    </ClientProvider>
  </React.StrictMode>,
)

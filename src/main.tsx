import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider } from "@material-ui/styles"
import GlobalTheme from "./Theme/GlobalTheme"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={GlobalTheme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>
)

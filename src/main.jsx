import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import { ThemeContextProvider } from "./context/ThemeContext.jsx";
import GlobalStyles from "./styles/GlobalStyles.js";
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <ThemeContextProvider>
    <BrowserRouter>
    <GlobalStyles />
      <App />
    </BrowserRouter>
  </ThemeContextProvider>
)

import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import './index.css';

const theme = {
  colors: {
    black: "black",
    gray: "gray",
    white: "white",
    green: "green",
    red: "red",
    accent: "tomato",
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme= { theme }>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

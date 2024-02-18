'use client'
import { Box, ThemeProvider, createTheme } from "@mui/material";
import React from "react";

const green = "#00BD56";

const theme = createTheme({
  palette: {
    primary: {
      main: green,
      light: green,
    },
  },
  typography: {
    h1: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: "bold",
    },
    h2: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: "bold",
    },
  },
});

const WelcomeSection = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      
        {children}
     
    </ThemeProvider>
  );
};

export default WelcomeSection;

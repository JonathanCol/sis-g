"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import { Box, Toolbar, IconButton, Typography, Button,  } from "@mui/material";
import Stack from "@mui/material/Stack";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import MenuServices from "./MenuServices";

const navItems = ["Home", "Servicios", "Acerca de", "Contacto"];

const theme = createTheme();

theme.typography.h6 = {
  fontSize: '20px',
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 500
}

const BoxTheme = () => {
  return (
    <ThemeProvider theme={theme}>

    
    <Box sx={{ display: "flex" }}>
      <AppBar sx={{ bgcolor: "#fff" }}>
        <Toolbar sx={{ marginLeft: "3rem", marginRight: "3rem" }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "#00BD56" }}
          >
            Sisket
          </Typography>
          <Box sx={{ display: "flex" }}>
            <Stack direction="row" spacing={4}>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, color: "#111" }}
              >
                Home
              </Typography>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, color: "#111" }}
              >
                Acerca de
              </Typography>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, color: "#000" }}
              >
                Contacto
              </Typography>
              <MenuServices />
              <Button
                variant="outlined"
                sx={{ color: '#00BD56', backgroundColor: '#00BD56', borderColor: 'green' }}
              >
                Login
              </Button>
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
  );
};

export default BoxTheme;

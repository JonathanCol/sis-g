"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import { Box, Toolbar, IconButton, Typography, Button,  } from "@mui/material";
import Stack from "@mui/material/Stack";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import MenuServicios from "./MenuServicios";
import Link from "next/link";

const navItems = ["Home", "Servicios", "Acerca de", "Contacto"];

const theme = createTheme();

theme.typography.h6 = {
  fontSize: '20px',
  fontFamily: "'Poppins', sans-serif",
  fontWeight: "bold"
}

const BoxTheme = () => {
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ display: "flex" }}>
      <AppBar sx={{ bgcolor: "#F2EEEE", boxShadow: 0 }}>
        <Toolbar sx={{marginLeft: "15rem"}}>
          <Typography
            variant="h6"
            sx={{color: "#00BD56", flexGrow: 1 }}
          >
            <Link href = "/">
            SIS-G
            </Link>
          </Typography>
          
            <Stack direction="row" gap={5} justifyContent="center" alignItems="center">
              <Link href="/aboutUs/aboutUs">
              <Typography
                variant="h6"
                sx={{ color: "#393E46" }}
              >
                Acerca de
              </Typography>
              </Link>
              <Typography
                variant="h6"
                sx={{ color: "#393E46" }}
              >
                Contacto
              </Typography>
              <MenuServicios/>
              <Button variant="contained" sx={{borderRadius: 8, fontFamily: "'Poppins', sans-serif"}}>Login</Button>  
            </Stack>
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
  );
};

export default BoxTheme;

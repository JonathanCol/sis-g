"use client";
import { Box, Button, Grid, Typography} from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from "react";
import Image from "next/image";
import AppBarMenu from "../AppBar/AppBar";

const green  = "#00BD56"

const theme = createTheme({
  palette: {
    primary: {
      main: green,
      light: green,
    }
  },
  typography:{
    h1:{
      fontFamily: "'Poppins', sans-serif",
      fontWeight: "bold"
    },
    h2:{
      fontFamily: "'Poppins', sans-serif",
      fontWeight: "bold"
    }
  }
});

const WelcomeSection = () => {
  return (
    <ThemeProvider theme ={theme}>

    
    <Box
      sx={{
        mt: 6,
        display: "flex",
        backgroundColor: "#F2EEEE",
        width: "100%",
        height: 800,
      }}
    >
      <AppBarMenu />
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="center"
        direction="row"
      >
        <Grid item xs={6} container justifyContent={"center"}>
          <Image
            src="/4356046-removebg-preview.png"
            width={500}
            height={500}
            alt="imagen bienvenida"
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h2" color={"#00BD56"}>
            ¡Hola!
          </Typography>
          <Typography variant="h1" color={"#111"}>
            Bienvenido a Sisket
          </Typography>
          <Typography variant="body2" color={"#111"}>
            Lorem ipsum dolor sit amet consectetur. Nisl donec tortor volutpat
            id pharetra ultricies mauris. Eget augue at egestas et consequat
            quis ultricies. At vel aenean posuere neque a fermentum donec eros
            ut. Nullam mi egestas sed facilisis.
          </Typography>
          <Button variant="contained" color="primary">Details</Button>
        </Grid>
      </Grid>
    </Box>
    </ThemeProvider>
  );
};

export default WelcomeSection;

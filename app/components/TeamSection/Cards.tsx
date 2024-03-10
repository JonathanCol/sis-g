'use client'
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Grid, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";


const theme = createTheme();

theme.typography.h5 = {
  fontSize: '20px',
  fontFamily: "'Poppins', sans-serif",
  fontWeight: "bold"
}

export default function Cards() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box mb={10}>
          <Grid container direction={"row"} justifyContent="center" alignItems={"center"} spacing={2}>
            <Grid item md={2}>
              <Card >
                <CardMedia
                  component="img"
                  alt="perfil team"
                  image="/images/fotoPerfilMujer.jpg"
                />
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography gutterBottom variant="h5" component="div">
                    Maritza Garcia Sanchez
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Front end Developer
                  </Typography>
                </CardContent>
              </Card>

            </Grid>

            <Grid item md={2}>
              <Card>
                <CardMedia
                  component="img"
                  alt="perfil team"
                  image="/images/fotoPerfilHombre.jpg"
                />
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography gutterBottom variant="h5" component="div">
                    Jonathan Cediel Perdomo
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Back end developer
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  );
}

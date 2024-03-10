import React from "react";
import { Box, Button, Grid, Typography, createTheme, ThemeProvider } from "@mui/material";
import Image from "next/image";

const theme = createTheme();
theme.typography.h2 = {
  fontSize: "20px",
  fontFamily: "'Poppins', sans-serif",
  fontWeight: "bold",
};

const TextImage = ({ text, boxColor, sourceImage }) => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: boxColor, padding: 4 }}>
        <Grid container spacing={2} alignItems="center" justifyContent="center" direction="row">
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              <Typography variant="h2" color="black" align="center" gutterBottom>
                {text[0]}
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center" paragraph>
                {text[1]}
              </Typography>
              <Button variant="contained" color="primary" href="/ContactUs">
                Contáctenos
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
              <Image src={sourceImage} width={400} height={150} alt="imagen bienvenida" style={{ borderRadius: "10px" }} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default TextImage;

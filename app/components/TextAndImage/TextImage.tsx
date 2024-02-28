import { ThemeProvider } from "@emotion/react";
import {
  Box,
  Grid,
  Typography,
  createTheme,
} from "@mui/material";
import React from "react";
import Image from "next/image";

const theme = createTheme();

theme.typography.h2 = {
  fontSize: "20px",
  fontFamily: "'Poppins', sans-serif",
  fontWeight: "bold",
};

const TextImage = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="center"
          direction="row"
          mt={10}
        >
          <Grid item md={4}>
            <Typography variant="h2" color={"#111"}>
            NUESTRA HISTORIA 
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur. Nisl donec tortor volutpat
              id pharetra ultricies mauris. 
            </Typography>
          </Grid>
          <Grid item md={4}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Image
                src="/4356046-removebg-preview.png"
                width={400}
                height={400}
                alt="imagen bienvenida"
              />
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default TextImage;

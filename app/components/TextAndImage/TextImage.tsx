
import {
  Box,
  Grid,
  Typography,
  createTheme,
  ThemeProvider
} from "@mui/material";
import React from "react";
import Image from "next/image";


interface tiposProps  {
  text: string[],
  boxColor: string,
  sourceImage: string

}
const theme = createTheme();

theme.typography.h2 = {
  fontSize: "20px",
  fontFamily: "'Poppins', sans-serif",
  fontWeight: "bold",
};


const TextImage = ({text, boxColor, sourceImage}: tiposProps) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{backgroundColor: boxColor}}>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="center"
          direction="row"
          mt={10}
        >
          <Grid item md={2}>
            <Typography variant="h2" color="black">
            {text[0]}
            </Typography>
            <Typography variant="body2" color="text.secondary">
           {text[1]}
            </Typography>
          </Grid>
          <Grid item md={2}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Image
                src= {sourceImage}
                width={400}
                height={400}
                alt="imagen bienvenida"
              />
            </Box>
          </Grid>
        </Grid>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default TextImage;

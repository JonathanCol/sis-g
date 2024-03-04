import { ThemeProvider } from '@emotion/react';
import { Grid, Typography, createTheme } from '@mui/material'
import React from 'react'

const textArray = [];
const theme = createTheme();

const TitleSubTitle = ({textArray}) => {
  return (
    <>
    <ThemeProvider theme={theme}>
   <Grid
      container
      spacing={2}
      alignItems="center"
      justifyContent="center"
      direction="column"
      mt={10}
      mb={10}
    >
    <Grid item md={4} alignContent={"center"}>
        <Typography variant="h3" color={"#111"}>
        {textArray[0]}
        </Typography>
      </Grid>
      <Grid item md={4} alignContent={"center"}>
        <Typography variant="body2" color={"#111"}>
          {textArray[1]}
        </Typography>
      </Grid>
      </Grid>
      </ThemeProvider>
    </>
    
  )
}

export default TitleSubTitle;
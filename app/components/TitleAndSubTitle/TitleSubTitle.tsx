import { Grid, Typography, createTheme, useMediaQuery, } from "@mui/material";
import { useTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import {
  Box
} from "@mui/material";

const textArray = [];
const theme = createTheme();

const TitleSubTitle = ({ textArray }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));


  return (
    <>
      <ThemeProvider theme={theme}>
        <Box >
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
            direction="column"
            mt={5}
            mb={2}
            px={1}
          >
            <Grid item md={4} alignContent={"center"}>
              <Typography variant="h3" color={"#111"} id={"servicios_SIS_G"}>
                {textArray[0]}
              </Typography>
            </Grid>
            <Grid item md={4} alignContent={"center"}>
              <Typography variant="body2" color="text.secondary">
                {textArray[1]}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default TitleSubTitle;

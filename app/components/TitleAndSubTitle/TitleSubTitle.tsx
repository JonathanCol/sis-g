import { Grid, Typography, createTheme, useMediaQuery} from "@mui/material";
import { useTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";

const textArray = [];
const theme = createTheme();

const TitleSubTitle = ({ textArray }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
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
            <Typography variant="body2" color="text.secondary">
              {textArray[1]}
            </Typography>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default TitleSubTitle;

import { ThemeProvider } from "@emotion/react";
import { Box, Grid, Typography, createTheme } from "@mui/material";

const theme = createTheme();

theme.typography.h2 = {
  fontSize: "20px",
  fontFamily: "'Poppins', sans-serif",
  fontWeight: "bold",
};

const TitleSection = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            my: 6,
            display: "flex",
            backgroundColor: "#FFF",
            width: "100%"
          }}
        >
          <Grid
            container
            direction={"row"}
            justifyContent="center"
            alignItems={"center"}
          >
            <Grid container justifyContent={"center"} alignItems={"center"}>
              <Grid>
                <Typography gutterBottom variant="h3" component="div" color={"#00BD56"}
                  fontWeight={700}>
                  Equipo
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default TitleSection;

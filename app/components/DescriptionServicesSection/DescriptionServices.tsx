import { ThemeProvider } from "@emotion/react";
import { Box, Grid, Icon, SvgIcon, Typography, createTheme } from "@mui/material";
import React from "react";
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import AssignmentIcon from '@mui/icons-material/Assignment';




const theme = createTheme();

theme.typography.h2 = {
  fontSize: "20px",
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 700,
};
const DescriptionServices = () => {
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction="row"
        mt={5}
        mb={10}
      >
        <Grid item md={2} sx={{ textAlign: "center" }}>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            direction="column"
            mt={5}
            mb={10}
          >
            <AssignmentIcon sx={{color: "#00BD56", fontSize: 100}} />
            <Typography variant="h2" color={"#111"} mt={3}>
              Solicitud
            </Typography>
            <Typography variant="body2" color={"#111"} mt={2}>
              Herramienta de registro de tickets
            </Typography>
          </Grid>
        </Grid>
        <Grid item md={2} sx={{ textAlign: "center" }}>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            direction="column"
            mt={5}
            mb={10}
          >
           <AppRegistrationIcon sx={{color: "#00BD56", fontSize: 100}}/>
            <Typography variant="h2" color={"#111"} mt={3}>
              Historial
            </Typography>
            <Typography variant="body2" color={"#111"} mt={2}>
              Herramienta de muestra tickets
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default DescriptionServices;

import {
  Box,
  Button,
  Grid,
  Link,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import React from "react";

const theme = createTheme();

theme.typography.h2 = {
  fontSize: "20px",
  fontFamily: "'Poppins', sans-serif",
  fontWeight: "bold",
};
theme.typography.h3 = {
    fontSize: "40px",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "bold",
  };

const FormContact = () => {
  return (
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
            Contáctenos
          </Typography>
        </Grid>
        <Grid item md={4} alignContent={"center"}>
          <Typography variant="body2" color={"#111"}>
            Escribamos para saber más información de esta herramienta completa
          </Typography>
        </Grid>
        <Grid
          container
          spacing={2}
          direction={"row"}
          justifyContent={"center"}
          mt={10}
        >
          <Grid item md={2}>
            <TextField
              id="outlined-basic"
              label="Tu Nombre"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item md={2}>
            <TextField
              id="outlined-basic"
              label="Asunto"
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          direction={"row"}
          justifyContent={"center"}
          mt={2}
        >
          <Grid item md={2}>
            <TextField
              id="outlined-basic"
              label="Correo"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item md={2}>
            <TextField
              id="outlined-basic"
              label="Télefono"
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container direction={"row"} justifyContent={"center"} mt={2}>
          <Grid item md={4}>
            <TextField
              id="outlined-basic"
              label="Mensaje"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
            />
          </Grid>
        </Grid>
        <Box mt={10} mb={10}>
          <Button
            variant="contained"
            sx={{ borderRadius: 8, fontFamily: "'Poppins', sans-serif",fontWeight: "bold"  }}
          >
            <Typography variant="body2" color={"#111"}>
            Contáctenos
          </Typography>
          </Button>
        </Box>
      </Grid>
    </ThemeProvider>
  );
};

export default FormContact;

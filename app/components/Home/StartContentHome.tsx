import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";

const StartContentHome = () => {
  return (
    <>
      <Box
        sx={{
          mt: 6,
          display: "flex",
          backgroundColor: "#F2EEEE",
          width: "100%",
          height: 800,
        }}
      >
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="center"
          direction="row"
        >
          <Grid item xs={6} container justifyContent={"center"}>
            <Image
              src="/4356046-removebg-preview.png"
              width={500}
              height={500}
              alt="imagen bienvenida"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h2" color={"#00BD56"}>
              ¡Hola!
            </Typography>
            <Typography variant="h1" color={"#111"}>
              Bienvenido a SIS_G
            </Typography>
            <Typography variant="body2" color={"#111"}>
              SIS_G es una herramienta de registro de incidencias, en forma de tickets que proporciona a las empresas un fácil uso y 
              de manera óptima busca organizar los problemas que se presentan en la comunicación con el cliente. 
            </Typography>
            <Box mt={5}>
            <Button variant="contained" color="primary">
              Sobre Nosotros
            </Button>
            </Box>
            
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default StartContentHome;

import { Box, Button, Grid, Typography, useMediaQuery, Hidden } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import "../../../public/css/home_SIS_G.css";

const StartContentHome = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  console.log(isSmallScreen);

  return (
    <>
      <Box id="home_box_SIS_G">
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="center"
          direction="row"
        >
          <Hidden smDown>
            <Grid item xs={5} container justifyContent={"center"}>
              <Image
                src="/images/4356046-removebg-preview.png"
                width={500}
                height={500}
                alt="imagen bienvenida"
              />
            </Grid>
          </Hidden>
          <Grid item xs={10} sm={6} justifyContent={"center"}>
            <Typography
              variant={isSmallScreen ? "h3" : "h2"}
              color={"#00BD56"}
              fontWeight={700}
            >
              ¡Hola!
            </Typography>
            <Typography
              variant={isSmallScreen ? "h3" : "h2"}
              color={"#111"}
              fontWeight={700}
              marginX={1}
              marginY={2}
            >
              Bienvenido a SIS_G
            </Typography>
            <Typography
              variant="body2"
              color={"#111"}
              className="text-home_SIS_G"
            >
              SIS_G es una herramienta de registro de incidencias, en forma de
              tickets que proporciona a las empresas un fácil uso y de manera
              óptima busca organizar los problemas que se presentan en la
              comunicación con el cliente.
            </Typography>
            <Box mt={5} mx={1}>
              <Button variant="contained" color="primary">
                Comuníquese con nosotros
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default StartContentHome;

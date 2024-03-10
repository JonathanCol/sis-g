import React from "react";
import { Container, Typography, Link, Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { X } from "@mui/icons-material";
import "../../../public/css/home_SIS_G.css";

const Footer = () => {
  return (
    <footer className={"footer_SIS_G"}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Enlaces
            </Typography>
            <Typography>
              <Link href="#">Inicio</Link>
            </Typography>
            <Typography>
              <Link href="/AboutUs">Nosotros</Link>
            </Typography>
            <Typography>
              <Link href="/ContactUs">Contacto</Link>
            </Typography>
            <Typography>
              <Link href="#servicios_SIS_G">Servicios</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Redes Sociales
            </Typography>
            <Typography>
              <FacebookIcon sx={{ color: "#00BD56" }} />
              <Link href="#">Facebook</Link>
            </Typography>
            <Typography>
              <X sx={{ color: "#00BD56" }} />
              <Link href="#">Twitter</Link>
            </Typography>
            <Typography>
              <InstagramIcon sx={{ color: "#00BD56" }} />
              <Link href="#">Instagram</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Información de contacto
            </Typography>
            <Typography>Dirección: 123 Calle Principal, Ciudad</Typography>
            <Typography>Teléfono: +123456789</Typography>
            <Typography>Email: info@example.com</Typography>
          </Grid>
        </Grid>
        <Typography
          variant="body2"
          align="center"
          color="inherit"
          gutterBottom
          my={5}
        >
          © {new Date().getFullYear()} Nombre de tu empresa. Todos los derechos
          reservados.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;

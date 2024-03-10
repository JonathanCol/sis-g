import React from "react";
import { ThemeProvider } from "@emotion/react";
import {
  Grid,
  Typography,
  createTheme,
  Card,
  CardContent
} from "@mui/material";
import {
  Assignment as AssignmentIcon,
  AppRegistration as AppRegistrationIcon,
  PeopleAlt as PeopleAltIcon
} from "@mui/icons-material";

const theme = createTheme();

theme.typography.h2 = {
  fontSize: "20px",
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 700
};

const DescriptionServices = () => {
  const features = [
    {
      title: "Solicitud",
      description:
        "Genera solicitudes de soporte técnico para reportar problemas, solicitar ayuda o realizar consultas técnicas. Facilita la comunicación entre los usuarios y el equipo de soporte para resolver problemas de manera eficiente.",
      icon: <AssignmentIcon sx={{ color: "#00BD56", fontSize: 65 }} />
    },
    {
      title: "Historial",
      description:
        "Mantén un registro detallado de todos los tickets de soporte técnico generados, incluyendo su estado actual, detalles del problema y seguimiento de las acciones realizadas. Permite un seguimiento transparente y eficaz del progreso de cada solicitud.",
      icon: <AppRegistrationIcon sx={{ color: "#00BD56", fontSize: 65 }} />
    },
    {
      title: "Administración",
      description:
        "Administra y prioriza los tickets de soporte técnico de manera eficiente. Asigna tareas a los miembros del equipo, establece plazos y seguimientos, y gestiona la resolución de problemas de manera efectiva para garantizar una atención rápida y satisfactoria.",
      icon: <PeopleAltIcon sx={{ color: "#00BD56", fontSize: 65 }} />
    }
  ];

  const numRows = Math.ceil(Math.sqrt(features.length));

  const rows = Array.from(Array(numRows), (_, index) => {
    const startIndex = index * (index + 1) / 2;
    return features.slice(startIndex, startIndex + index + 1);
  });

  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={3} justifyContent="center" paddingBottom={6}>
        {rows.map((row, rowIndex) =>
          <Grid container item xs={12} justifyContent="center" key={rowIndex}>
            {row.map((feature, index) =>
              <Grid item key={index} mx={2} my={1} style={{ maxWidth: 550 }}>
                <Card>
                  <CardContent style={{ textAlign: "center" }}>
                    {feature.icon}
                    <Typography
                      variant="h5"
                      component="div"
                      style={{ textAlign: "center" }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      style={{ textAlign: "center" }}
                    >
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            )}
          </Grid>
        )}
      </Grid>
    </ThemeProvider>
  );
};

export default DescriptionServices;

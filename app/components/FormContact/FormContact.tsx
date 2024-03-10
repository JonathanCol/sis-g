import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import TitleSubTitle from "../TitleAndSubTitle/TitleSubTitle";

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

const textBody = ["Contáctenos", "Escribamos para saber más información de esta herramienta completa"];

const FormContact = () => {
  const [showWarning, setShowWarning] = useState(false);
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSendClick = () => {
    if (!name || !subject || !email || !phone || !message) {
      setShowWarning(true); 
    } else {
      console.log("Formulario enviado!");
      setShowWarning(false);
    }
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    if (/^\d*$/.test(inputValue)) { 
      setPhone(inputValue);
    }
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    if (/^[a-zA-Z\s]*$/.test(inputValue)) { 
      setName(inputValue);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: "#FFF" }}>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="center"
          direction="column"
          mt={10}
          mb={5}
        >
          <TitleSubTitle textArray={textBody} />
          <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="center"
            mt={5}
          >
            <Grid item md={2}>
              <TextField
                id="name"
                label="Tu Nombre"
                variant="outlined"
                fullWidth
                required
                value={name}
                onChange={handleNameChange}
                error={showWarning && !name}
              />
            </Grid>
            <Grid item md={2}>
              <TextField
                id="subject"
                label="Asunto"
                variant="outlined"
                fullWidth
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                error={showWarning && !subject}
              />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="center"
            mt={2}
          >
            <Grid item md={2}>
              <TextField
                id="email"
                label="Correo"
                variant="outlined"
                fullWidth
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={showWarning && !email}
              />
            </Grid>
            <Grid item md={2}>
              <TextField
                id="phone"
                label="Teléfono"
                variant="outlined"
                fullWidth
                required
                value={phone}
                onChange={handlePhoneChange}
                error={showWarning && !phone}
              />
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="center" mt={2}>
            <Grid item md={4}>
              <TextField
                id="message"
                label="Mensaje"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                error={showWarning && !message}
              />
            </Grid>
          </Grid>
          {showWarning && (
            <Typography color="error">
              Todos los campos son obligatorios.
            </Typography>
          )}
          <Box mt={10} mb={10}>
            <Button
              variant="contained"
              sx={{
                borderRadius: 8,
                fontFamily: "'Poppins', sans-serif",
                fontWeight: "bold",
              }}
              onClick={handleSendClick}
            >
              <Typography variant="body2" color="#fff">
                Enviar
              </Typography>
            </Button>
          </Box>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default FormContact;

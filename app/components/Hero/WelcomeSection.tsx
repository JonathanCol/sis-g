import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Image from 'next/image'

const WelcomeSection = () => {
  return (
    <Box sx={{ mt: 30, marginLeft: "6rem", marginRight: "6rem", display: "flex"}}>
      <Grid container spacing={2} alignItems="center" justifyContent="center" direction="row">
        <Grid item xs={6} container justifyContent={"center"}>
          <Image src="/4356046.jpg" width={500} height={500} alt="imagen bienvenida"/>
        </Grid>
        <Grid item xs={6}>
            <Typography variant="h2" color={"#00BD56"}>
            ¡Hola!
            </Typography>
            <Typography variant="h1">
           Bienvenido a Sicket
            </Typography>
            <Typography variant="h6">
            Lorem ipsum dolor sit amet consectetur. Nisl donec tortor volutpat id pharetra ultricies mauris. Eget augue at egestas et consequat quis ultricies. At vel aenean posuere neque a fermentum donec eros ut. Nullam mi egestas sed facilisis.
            </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WelcomeSection;

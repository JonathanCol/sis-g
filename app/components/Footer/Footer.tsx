import { ThemeProvider } from '@emotion/react'
import { Box, Button, Grid, Icon, Stack, Typography, createTheme } from '@mui/material'
import Link from 'next/link';
import React from 'react'
// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import { X } from '@mui/icons-material';


const theme = createTheme();

theme.typography.h2 = {
  fontSize: "20px",
  fontFamily: "'Poppins', sans-serif",
  fontWeight: "bold",
}; 

const Footer = () => (
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
                <Typography variant="h2" color={"#111"}>
                    SIS G
                </Typography>
            </Grid>
            <Grid item md={4} alignContent={"center"}>
            <Stack direction="row" gap={5} justifyContent="center" alignItems="center">
              <Link href="/AboutUs">
              <Typography
                variant="h6"
                sx={{ color: "#393E46" }}
              >
                Acerca de
              </Typography>
              </Link>
              <Link href="/contactUs">
              <Typography
                variant="h6"
                sx={{ color: "#393E46" }}
              >
                Contacto
              </Typography>
              </Link>
              <Button variant="outlined">Login</Button>  
            </Stack>
            </Grid>
            <Grid item md={4}>
           <Stack direction={"row"} gap={5} justifyContent={"center"} alignItems={"center"}>
           {/* <FacebookIcon />
           <InstagramIcon/>
           <X/> */}
           </Stack>
            </Grid>
        </Grid>
    </ThemeProvider>
)

export default Footer
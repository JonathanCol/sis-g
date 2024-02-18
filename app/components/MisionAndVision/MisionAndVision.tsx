import {
    Box,
    Button,
    Grid,
    ThemeProvider,
    Typography,
    createTheme,
  } from "@mui/material";
  import Image from "next/image";
  
  const theme = createTheme();
  
  theme.typography.h5 = {
    fontSize: "30px",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "bold",
  };
  const MisionAndVisionSection = () => {
    return (
      <>
        <ThemeProvider theme={theme}>
          <Box
            sx={{
              mt: 10,
              display: "flex",
              backgroundColor: "#F2EEEE",
              width: "100%",
              height: 400,
            }}
          >
            <Grid
              container
              spacing={2}
              alignItems="center"
              justifyContent="center"
              direction="row"
            >
              <Grid item xs={6} md={4} container justifyContent={"center"}>
                <Image
                  src="/4356046-removebg-preview.png"
                  width={300}
                  height={300}
                  alt="imagen bienvenida"
                />
              </Grid>
              <Grid item xs={6} md={4}>
                <Box
                  sx={{
                    mt: 6,
                    display: "flex",
                    backgroundColor: "#F2EEEE",
                    width: "100%",
                    
                  }}
                >
                  <Typography variant="h5" color={"#111"}>
                    Bienvenido a SIS-G
                  </Typography>
                  <Typography variant="body2" color={"#111"}>
                    Lorem ipsum dolor sit amet consectetur. Nisl donec tortor
                    volutpat id pharetra ultricies mauris. Eget augue at egestas
                    et consequat quis ultricies. At vel aenean posuere neque a
                    fermentum donec eros ut. Nullam mi egestas sed facilisis.
                  </Typography>
                  <Button variant="contained" color="primary">
                    Details
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </ThemeProvider>
      </>
    );
  };
  
  export default MisionAndVisionSection;
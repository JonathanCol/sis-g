import { Box, Grid, Typography } from "@mui/material";
import RootLayout from "../../layout";

const StartContentContact = () => {
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
          spacing={1}
          alignItems="center"
          justifyContent="center"
          direction="row"
        >
          <Typography variant="h1" color={"#111"}>
            Contact Us
          </Typography>
        </Grid>
      </Box>
    </>
  );
};

export default StartContentContact;

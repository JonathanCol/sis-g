import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const StartContent = ({text}) => {
  return (
    <>
    <Box
      sx={{
        mt: 6,
        display: "flex",
        backgroundColor: "#F2EEEE",
        width: "100%",
        height: 600,
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
          {text}
        </Typography>
      </Grid>
    </Box>
  </>
  )
}

export default StartContent
import { Grid, Typography } from '@mui/material'
import React from 'react'

const textArray = [];

const TitleSubTitle = ({textArray}) => {
  return (
    <>
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
        <Typography variant="h3" color={"#111"}>
        {textArray[0]}
        </Typography>
      </Grid>
      <Grid item md={4} alignContent={"center"}>
        <Typography variant="body2" color={"#111"}>
          {textArray[1]}
        </Typography>
      </Grid>
      </Grid>
    </>
    
  )
}

export default TitleSubTitle
{/* <Grid item md={4} alignContent={"center"}>
        <Typography variant="h3" color={"#111"}>
          Nuestros servicios
        </Typography>
      </Grid>
      <Grid item md={4} alignContent={"center"}>
        <Typography variant="body2" color={"#111"}>
          Conozca las funcionalidades principales de SIS-G
        </Typography>
      </Grid>
      </Grid>
    </> */}
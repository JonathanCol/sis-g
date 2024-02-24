import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button, Grid, Typography } from "@mui/material";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Ticket", 159, 6.0, 24, 4.0),
  createData("TrackId", 237, 9.0, 37, 4.3),
  createData("Prioridad", 262, 16.0, 24, 6.0),
  createData("Fecha", 305, 3.7, 67, 4.3),
  createData("Imprimir", 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  return (
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
          Tickets
        </Typography>
      </Grid>
      <Grid item md={4} alignContent={"center"}>
        <Typography variant="body2" color={"#111"}>
          Aquí encontrará un historial de solicitudes
        </Typography>
      </Grid>
      <Grid item md={4}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Ticket</TableCell>
                <TableCell align="right">TrackId</TableCell>
                <TableCell align="right">Prioridad</TableCell>
                <TableCell align="right">Fecha</TableCell>
                <TableCell align="right">Imprimir</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box mt={10} mb={10}>
          <Button
            variant="contained"
            sx={{
              borderRadius: 8,
              fontFamily: "'Poppins', sans-serif",
              fontWeight: "bold",
            }}
          >
            <Typography variant="body2" color={"#111"}>
              Imprimir
            </Typography>
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

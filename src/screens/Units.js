import React, { useContext, useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import { styled } from "@mui/material/styles";
import { purple } from '@mui/material/colors';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import UnitContext from "../context/units/unitContext";
import { unitData } from "../data/units";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#034f84",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    backgroundColor: "#eea29a",
    color: "white",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[100]),
  backgroundColor: purple[100],
  '&:hover': {
    backgroundColor: purple[700],
    color: 'white'
  },
}));

const UnitsPage = () => {
  const unitContext = useContext(UnitContext);

  const { getUnits, units } = unitContext;

  useEffect(() => {
    getUnits();
  }, []);

  return (
    <Container maxWidth="lg">
      <Box sx={{ bgcolor: "#cfe8fc", height: "auto" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="right">Name</StyledTableCell>
                <StyledTableCell align="right">Expansion</StyledTableCell>
                <StyledTableCell align="right">Age</StyledTableCell>
                <StyledTableCell align="right">Hit Points</StyledTableCell>
                <StyledTableCell align="right">Attack</StyledTableCell>
                <StyledTableCell align="right">Line Of Sight</StyledTableCell>
                <StyledTableCell align="right">Build Time</StyledTableCell>
                <StyledTableCell align="right">Armor</StyledTableCell>
                <StyledTableCell align="right">Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {unitData.map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell align="right">{row.name}</StyledTableCell>
                  <StyledTableCell align="right">
                    {row.expansion}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.age}</StyledTableCell>
                  <StyledTableCell align="right">
                    {row.hit_points}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.attack}</StyledTableCell>
                  <StyledTableCell align="right">
                    {row.line_of_sight}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.build_time}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.armor}</StyledTableCell>
                  <StyledTableCell component="th" scope="row" align="right" color="success">
                    <ColorButton>Details</ColorButton>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default UnitsPage;

import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, tableCellClasses, styled } from '@mui/material'
import './PredTable.css'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

function createData(state, percentage) {
  return { state, percentage};
}

const rows = [
  createData('Michigan', 10 + '%'),
  createData('Texas', 8 + '%'),
  createData('Virginia', 7 + '%'),
  createData('Florida', 5 + '%'),
  createData('Illinois', 5 + '%'),
  createData('New York', 5 + '%')
];

export default function PredTable() {
  return (
    
    <TableContainer className= "table-header" component={Paper}>
      <Table sx={{ minWidth: 100 }} aria-label="simple table">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>State</StyledTableCell>
            <StyledTableCell align="right">Chance of Big Foot?</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow
              key={row.state}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row">
                {row.state}
              </StyledTableCell>
              <StyledTableCell align="right">{row.percentage}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
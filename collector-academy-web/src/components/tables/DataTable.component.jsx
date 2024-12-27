import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useState } from 'react';
import { CellAlign, CellPadding } from 'utils/constants/Table.enum';

function DataTable({ headerData, data }) {
  // eslint-disable-next-line no-unused-vars
  const [sortByIndex, setSortByIndex] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [sortBy, setSortBy] = useState(false);

  console.log('headerData', headerData);
  console.log('data', data);

  return (
    <Box>
      <TableContainer
        sx={{
          width: '100%',
          overflowX: 'auto',
          position: 'relative',
          display: 'block',
          maxWidth: '100%',
          '& td, & th': { whiteSpace: 'nowrap' }
        }}
      >
        <Table aria-labelledby="tableTitle">
          <TableHead>
            <TableRow>
              {headerData.map((header) => (
                <TableCell
                  key={header.id}
                  align={header.align ? header.align : CellAlign.LEFT}
                  padding={header.padding ? header.padding : CellPadding.NORMAL}
                  sortDirection={sortByIndex === header.id ? sortBy : false}
                >
                  {header.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, rowIndex) => {
              console.log('row', row);
              console.log('rowIndex', rowIndex);
              return (
                <TableRow hover role="checkbox" sx={{ '&:last-child td, &:last-child th': { border: 0 } }} tabIndex={-1} key={rowIndex}>
                  {Object.entries(row).map(([key, value]) => (
                    <TableCell key={key}>{value === null ? 'N/A' : value}</TableCell>
                  ))}
                  {/* {row.map((cell, cellIndex) => {
                    console.log('cell', cell);
                    console.log('cellIndex', cellIndex);
                    return (
                      <TableCell component="th" scope="row" key={cellIndex}>
                        {cell}
                      </TableCell>
                    );
                  })} */}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

DataTable.propTypes = {};

export default DataTable;

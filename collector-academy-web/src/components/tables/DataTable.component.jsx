import {
  Box,
  Checkbox,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  TableSortLabel,
  Toolbar,
  Tooltip,
  Typography
} from '@mui/material';
import MainCardComponent from 'components/card/MainCard.component';
import { useEffect, useState } from 'react';
import { CellAlign, CellPadding } from 'utils/constants/Table.enum';
import { visuallyHidden } from '@mui/utils';
import { PlusCircleOutlined } from '@ant-design/icons';

function renderTitle(title) {
  return (
    <Grid container alignItems="center" justifyContent="space-between">
      <Grid item>
        <Typography variant="h5">{title}</Typography>
      </Grid>
      <Grid item />
    </Grid>
  );
}

function renderToolbar(selectedCount) {
  return (
    <Toolbar
      sx={[
        {
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 }
        },
        selectedCount > 0 &&
          {
            // bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity)
          }
      ]}
    >
      {selectedCount > 0 ? (
        <Typography sx={{ flex: '1 1 100%' }} color="inherit" variant="subtitle1" component="div">
          {selectedCount} selected
        </Typography>
      ) : (
        <Typography sx={{ flex: '1 1 100%' }} variant="h6" id="tableTitle" component="div">
          Nutrition
        </Typography>
      )}
      {selectedCount > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <PlusCircleOutlined />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <PlusCircleOutlined />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

function renderTableHeaderSelectAll(selectable, selectedCount, cellDataLength) {
  return (
    selectable && (
      <TableCell padding="checkbox">
        <Checkbox
          color="primary"
          indeterminate={selectedCount > 0 && selectedCount < cellDataLength}
          checked={cellDataLength > 0 && selectedCount === cellDataLength}
          onChange={() => {}}
        />
      </TableCell>
    )
  );
}

function renderTableHeaderData(headerData, sortBy, sortByIndex, setSortBy, setSortByIndex) {
  const sortTableByIndexAndDirection = (index) => {
    if (sortByIndex === index) {
      if (sortBy === 'asc') {
        setSortBy('desc');
      } else if (sortBy === 'desc') {
        setSortByIndex(null);
      } else {
        setSortBy('asc');
      }
    } else {
      setSortByIndex(index);
      setSortBy('asc');
    }
  };

  return headerData.map((header) => (
    <TableCell
      key={header.id}
      align={header.align ? header.align : CellAlign.LEFT}
      padding={header.padding ? header.padding : CellPadding.NORMAL}
      sortDirection={sortByIndex === header.id ? sortBy : false}
    >
      <TableSortLabel
        active={sortByIndex === header.id}
        direction={sortByIndex === header.id ? sortBy : 'asc'}
        onClick={() => sortTableByIndexAndDirection(header.id)}
      >
        {header.label}
        {sortByIndex === header.id ? (
          <Box component="span" sx={visuallyHidden}>
            {sortBy === 'desc' ? 'sorted descending' : 'sorted ascending'}
          </Box>
        ) : null}
      </TableSortLabel>
    </TableCell>
  ));
}

function renderTableCellSelect(selectable, isItemSelected) {
  return (
    selectable && (
      <TableCell padding="checkbox">
        <Checkbox color="primary" checked={isItemSelected} />
      </TableCell>
    )
  );
}

function renderTableCellData(visibleCellData, selectable) {
  return visibleCellData.map((row, rowIndex) => {
    const isItemSelected = '';
    return (
      <TableRow hover role="checkbox" sx={{ '&:last-child td, &:last-child th': { border: 0 } }} tabIndex={-1} key={rowIndex}>
        {renderTableCellSelect(selectable, isItemSelected)}
        {Object.entries(row).map(([key, value]) => (
          <TableCell key={key}>{value === null ? 'N/A' : value}</TableCell>
        ))}
      </TableRow>
    );
  });
}

function renderEmptyRows(emptyRows) {
  return (
    emptyRows > 0 && (
      <TableRow
        style={{
          height: 53 * emptyRows
        }}
      >
        <TableCell colSpan={6} />
      </TableRow>
    )
  );
}

function renderTablePagination(cellDataLength, page, rowsPerPage, setPage, setRowsPerPage) {
  const handleOnPageChange = (_, newPage) => {
    setPage(newPage);
  };

  const handleOnRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TablePagination
      rowsPerPageOptions={[5, 10, 25]}
      component="div"
      count={cellDataLength}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleOnPageChange}
      onRowsPerPageChange={handleOnRowsPerPageChange}
    />
  );
}

function DataTable({ title, selectable, headerData, cellData, onFormatCellData }) {
  const [sortByIndex, setSortByIndex] = useState(0);
  const [sortBy, setSortBy] = useState(false);
  const [sortedCellData, setSortedCellData] = useState(cellData);
  const [visibleCellData, setVisibleCellData] = useState(cellData);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selectedCount, setSelectedCount] = useState(0);

  const getComparator = (order, orderBy) => {
    if (!order) return () => 0;

    return (a, b) => {
      const valueA = a[orderBy];
      const valueB = b[orderBy];

      if (valueA < valueB) return order === 'asc' ? -1 : 1;
      if (valueA > valueB) return order === 'asc' ? 1 : -1;
      return 0;
    };
  };

  useEffect(() => {
    setSortedCellData([...cellData].sort(getComparator(sortBy, sortByIndex)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage));
  }, [sortBy, sortByIndex, cellData, page, rowsPerPage]);

  useEffect(() => {
    setVisibleCellData(() => onFormatCellData(sortedCellData));
  }, [sortedCellData, onFormatCellData]);

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - cellData.length) : 0;

  return (
    <>
      {renderTitle(title)}
      <MainCardComponent sx={{ mt: 2 }} content={false}>
        <Box>
          {renderToolbar(selectedCount)}
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
              {renderTableHeaderSelectAll(selectable, selectedCount, cellData.length)}
              {renderTableHeaderData(headerData, sortBy, setSortBy, sortByIndex, setSortByIndex)}
              <TableBody>
                {renderTableCellData(visibleCellData)}
                {renderEmptyRows(emptyRows)}
              </TableBody>
            </Table>
          </TableContainer>
          {renderTablePagination(cellData.length, page, rowsPerPage, setPage, setRowsPerPage)}
        </Box>
      </MainCardComponent>
    </>
  );
}

DataTable.propTypes = {};

export default DataTable;

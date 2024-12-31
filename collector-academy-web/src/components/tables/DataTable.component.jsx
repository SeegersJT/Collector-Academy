import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
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
import { visuallyHidden } from '@mui/utils';
import { DeleteOutlined, EditOutlined, FilterOutlined } from '@ant-design/icons';
import MainCardComponent from 'components/card/MainCard.component';
import { CellAlign, CellPadding, CellStyle, CellWeight } from 'utils/constants/Table.enum';
import { Utils } from 'utils/Utils';

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

function renderToolbar(selectable, selectedCount) {
  console.log();
  return (
    selectable && (
      <Toolbar
        sx={[
          {
            pl: { sm: 2 },
            pr: { xs: 1, sm: 1 }
          }
        ]}
      >
        {selectedCount > 0 ? (
          <Typography sx={{ flex: '1 1 50%' }} color="inherit" variant="subtitle1" component="div">
            {selectedCount} selected
          </Typography>
        ) : (
          <Typography sx={{ flex: '1 1 50%' }} variant="h6" id="tableTitle" component="div">
            No Rows Selected
          </Typography>
        )}
        {selectedCount > 0 ? (
          <>
            <Tooltip title="Delete">
              <IconButton>
                <DeleteOutlined />
              </IconButton>
            </Tooltip>
            <Tooltip title="Edit">
              <IconButton>
                <EditOutlined />
              </IconButton>
            </Tooltip>
          </>
        ) : (
          <IconButton disabled>
            <FilterOutlined />
          </IconButton>
        )}
      </Toolbar>
    )
  );
}

function renderTableHeaderSelectAll(selectable, singleSelect, selectedCount, cellDataLength, handleSelectAll) {
  return (
    selectable && (
      <TableCell padding="checkbox">
        <Checkbox
          sx={{ p: 0 }}
          color="primary"
          disabled={singleSelect}
          indeterminate={selectedCount > 0 && selectedCount < cellDataLength}
          checked={cellDataLength > 0 && selectedCount === cellDataLength}
          onChange={(event) => handleSelectAll(event.target.checked)}
        />
      </TableCell>
    )
  );
}

function renderTableHeaders(headerModifiers, sortBy, sortByIndex, sortTableByIndexAndDirection) {
  return headerModifiers.map((header) => (
    <TableCell
      key={header.id}
      align={header.align ? header.align : CellAlign.LEFT}
      padding={header.padding ? header.padding : CellPadding.NORMAL}
      sortDirection={sortByIndex === header.id ? sortBy : false}
      sx={{
        fontWeight: header.weight ? header.weight : CellWeight.REGULAR,
        fontStyle: header.style ? header.style : CellStyle.NORMAL,
        color: header.color ? header.color : ''
      }}
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
        <Checkbox sx={{ p: 0 }} color="primary" checked={isItemSelected} />
      </TableCell>
    )
  );
}

function renderTableRows(columnModifiers, visibleCellData, selectable, singleSelect, selectedItems, handleRowClick) {
  return visibleCellData.map((row, rowIndex) => {
    const isItemSelected = selectedItems.includes(row.uuid);

    return (
      <TableRow
        hover
        role="checkbox"
        sx={selectable && { cursor: 'pointer' }}
        tabIndex={-1}
        key={rowIndex}
        selected={isItemSelected}
        onClick={() => selectable && handleRowClick(row.uuid, isItemSelected, singleSelect)}
      >
        {renderTableCellSelect(selectable, isItemSelected)}
        {Object.entries(row).map(([key, value]) => {
          const modifier = columnModifiers.find((columModifier) => columModifier.id === key);
          return (
            key !== 'uuid' && (
              <TableCell
                key={key}
                align={modifier.align ? modifier.align : CellAlign.LEFT}
                padding={modifier.padding ? modifier.padding : CellPadding.NORMAL}
                sx={{
                  fontWeight: modifier.weight ? modifier.weight : CellWeight.REGULAR,
                  fontStyle: modifier.style ? modifier.style : CellStyle.NORMAL,
                  color: modifier.color ? modifier.color : ''
                }}
              >
                {value === null ? 'N/A' : value}
              </TableCell>
            )
          );
        })}
      </TableRow>
    );
  });
}

function renderEmptyRows(emptyRows, dense) {
  return (
    emptyRows > 0 && (
      <TableRow
        style={{
          height: (dense ? 40 : 48) * emptyRows
        }}
      >
        <TableCell colSpan={6} />
      </TableRow>
    )
  );
}

function renderTablePagination(cellDataLength, page, rowsPerPage, handleOnPageChange, handleOnRowsPerPageChange) {
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

function DataTable({ title, headerModifiers, columnModifiers, data, onFormatCellData, selectable, singleSelect, dense }) {
  const [cellData, setCellData] = useState(data);
  const [sortByIndex, setSortByIndex] = useState(0);
  const [sortBy, setSortBy] = useState(false);
  const [sortedCellData, setSortedCellData] = useState([]);
  const [visibleCellData, setVisibleCellData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    setCellData(
      data.map((cell) => ({
        uuid: Utils.generateUUID(),
        ...cell
      }))
    );
  }, [data]);

  useEffect(() => {
    setSortedCellData([...cellData].sort(getComparator(sortBy, sortByIndex)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage));
  }, [sortBy, sortByIndex, cellData, page, rowsPerPage]);

  useEffect(() => {
    setVisibleCellData(() => onFormatCellData(sortedCellData));
  }, [sortedCellData, onFormatCellData]);

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

  const handleRowClick = (uuid, isItemSelected, singleSelect) => {
    if (singleSelect) {
      if (isItemSelected) {
        setSelectedItems([]);
      } else {
        setSelectedItems([uuid]);
      }
    } else {
      if (isItemSelected) {
        setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== uuid));
      } else {
        setSelectedItems([...selectedItems, uuid]);
      }
    }
  };

  const handleSelectAll = (checked) => {
    if (checked) {
      setSelectedItems(cellData.map((singleCellData) => singleCellData.uuid));
    } else {
      setSelectedItems([]);
    }
  };

  const handleOnPageChange = (_, newPage) => {
    setPage(newPage);
  };

  const handleOnRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - cellData.length) : 0;

  console.log('selectedItems', selectedItems);

  return (
    <>
      {renderTitle(title)}
      <MainCardComponent sx={{ mt: 2 }} content={false}>
        <Box>
          {renderToolbar(selectable, selectedItems.length)}
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
            <Table aria-labelledby="tableTitle" size={dense ? 'small' : 'medium'}>
              {renderTableHeaderSelectAll(selectable, singleSelect, selectedItems.length, cellData.length, handleSelectAll)}
              {renderTableHeaders(headerModifiers, sortBy, sortByIndex, sortTableByIndexAndDirection)}
              <TableBody>
                {renderTableRows(columnModifiers, visibleCellData, selectable, singleSelect, selectedItems, handleRowClick)}
                {renderEmptyRows(emptyRows, dense)}
              </TableBody>
            </Table>
          </TableContainer>
          {renderTablePagination(cellData.length, page, rowsPerPage, handleOnPageChange, handleOnRowsPerPageChange)}
        </Box>
      </MainCardComponent>
    </>
  );
}

DataTable.propTypes = {
  title: PropTypes.string.isRequired,
  headerModifiers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      align: PropTypes.oneOf(['left', 'center', 'right']),
      padding: PropTypes.oneOf(['normal', 'checkbox', 'none']),
      weight: PropTypes.oneOf(['regular', 'bold']),
      style: PropTypes.oneOf(['normal', 'italic', 'oblique']),
      color: PropTypes.string,
      label: PropTypes.string.isRequired
    })
  ).isRequired,
  columnModifiers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      align: PropTypes.oneOf(['left', 'center', 'right']),
      padding: PropTypes.oneOf(['normal', 'checkbox', 'none']),
      weight: PropTypes.oneOf(['regular', 'bold']),
      style: PropTypes.oneOf(['normal', 'italic', 'oblique']),
      color: PropTypes.string
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onFormatCellData: PropTypes.func.isRequired,
  selectable: PropTypes.bool,
  singleSelect: PropTypes.bool,
  dense: PropTypes.bool
};

export default DataTable;

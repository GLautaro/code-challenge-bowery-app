import React from "react";
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  Tooltip,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";
import { useDispatch } from "react-redux";
import { setEmployee } from "../../redux/slices/employee";
import { useNavigate } from "react-router-dom";

interface EmployeeTableProps {
  columns: string[];
  rows: any[];
}

const EmployeeTable: React.FC<EmployeeTableProps> = ({ columns, rows }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const onClickDetail = (employee: any) => {
    dispatch(setEmployee(employee));
    const employeeDetailPath = "employeeDetail";
    navigate(employeeDetailPath);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            {columns.map((column) => (
              <TableCell key={column}>{column}</TableCell>
            ))}
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row) => (
              <TableRow key={row._id}>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.firstName}</TableCell>
                <TableCell>{row.lastName}</TableCell>
                <TableCell>{row.type}</TableCell>
                <TableCell>
                  <Tooltip title="See employee details">
                    <IconButton
                      onClick={() => {
                        onClickDetail(row);
                      }}
                    >
                      <InfoIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    "aria-label": "rows per page",
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  );
};

export default EmployeeTable;

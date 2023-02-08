import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from 'react';

interface Column {
  id: 'id' | 'name' | 'nameKana' | 'employeePosition' | 'sex';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'id', label: 'ID', minWidth: 6 },
  { id: 'name', label: '名前', minWidth: 170 },
  { id: 'nameKana', label: '名前 カナ', minWidth: 170 },
  { id: 'employeePosition', label: '役職', minWidth: 170 },
  { id: 'sex', label: '性別', minWidth: 170 },
];

interface Data {
  id: number;
  name: string;
  nameKana: string;
  employeePosition: string;
  sex: string;
}

export default function EmployeesTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [employees, setEmployees] = useState([])
  const rows: { id: string, name: string; nameKana: string; employeePosition: string; sex: string; }[] = [];

  function createRows(
    json: any,
  ): void {
    rows.length = 0;
    json
      .forEach(
        (data: any) =>
          rows.push(
            {
              id: data['id'],
              name: new String(data['nameLast']).concat(data['nameFirst']),
              nameKana: new String(data['nameLastKana']).concat(data['nameFirstKana']),
              employeePosition: data['employeePosition'],
              sex: data['sex'],
            }
          )
      )
  }

  function createRow(
    employee: any,
  ): Data {
    return {
      id: employee['id'],
      name: new String(employee['nameLast']).concat(employee['nameFirst']),
      nameKana: new String(employee['nameLastKana']).concat(employee['nameFirstKana']),
      employeePosition: employee['employeePosition'],
      sex: employee['sex'],
    }
  }

  useEffect(() => {
    const url = 'http://localhost:8080/employee/find_all';
    const fetchEmployeesData = async () => {
      try {
        const res = await fetch(url, {method: 'GET', mode: 'cors'});
        const json = await res.json();
        setEmployees(json);
      } catch (e) {
        console.log("error", e);
      }
    }
    fetchEmployeesData();
  },[])

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {employees &&
             employees
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((employee) => {
                const row = createRow(employee)
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row['id']}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 20, 50]}
        component="div"
        count={employees.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}


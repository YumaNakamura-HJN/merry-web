import { Button, Typography } from "@mui/material";
import EmployeesTable from "../../components/atoms/EmployeesTable";

const Employees = () => {
  return (
    <>
      <Typography variant="h4" sx={{m: 2}}>社員管理</Typography>
      <EmployeesTable/>
      <Button color="primary" variant="outlined" sx={{m: 2, width: 100}}>新規作成</Button>
      <Button color="secondary" variant="outlined" sx={{m: 2, width: 100}}>編集</Button>
      <Button color="secondary" variant="outlined" sx={{m: 2, width: 100}}>削除</Button>
    </>
  );
};

export default Employees;

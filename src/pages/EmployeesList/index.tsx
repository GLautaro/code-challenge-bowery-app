import React from "react";
import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EmployeeTable from "../../components/EmployeeTable";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const columns = ["Email", "First Name", "Last Name", "Type", "Actions"];

const EmployeesList = () => {
  const [data, loading] = useFetch("http://localhost:9000/api/users");
  const navigate = useNavigate();

  const onNewEmployeeButtonClick = () => {
    const newEmployeePath = "newEmployee";
    navigate(newEmployeePath);
  };

  return (
    <>
      {loading && (
        <Backdrop open={loading}>
          <CircularProgress />
        </Backdrop>
      )}
      <Grid container direction="row">
        <Grid item xs={12} textAlign="center" mt={4} mb={4}>
          <Typography component="h1" variant="h1" fontSize={30}>
            Employees List
          </Typography>
        </Grid>
        {data && (
          <>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="flex-end" sx={{ pr: 4 }}>
                <Button
                  variant="contained"
                  startIcon={<AddIcon />}
                  onClick={onNewEmployeeButtonClick}
                >
                  Create new
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} p={4}>
              <EmployeeTable columns={columns} rows={data.reverse()}/>
            </Grid>
          </>
        )}
      </Grid>
    </>
  );
};

export default EmployeesList;

import React, { useCallback, useEffect } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import EmployeeCard from "../../components/EmployeeCard";

const EmployeeDetail = () => {
  const navigate = useNavigate();

  const selectedEmployee = useSelector(
    (state: RootState) => state.employee.employee
  );

  const onBackButtonClick = () => {
    const backPath = "/";
    navigate(backPath);
  };

  const checkSelectedEmployee = useCallback(() => {
    if (!selectedEmployee) {
      const backPath = "/";
      navigate(backPath);
    }
  }, [selectedEmployee, navigate]);

  useEffect(() => {
    checkSelectedEmployee();
  }, [checkSelectedEmployee]);

  return (
    <Grid container direction="row">
      <Grid item xs={12}>
        <Box display="flex" justifyContent="flex-start" sx={{ pl: 2, pt: 2 }}>
          <Button
            variant="text"
            startIcon={<ArrowBackIcon />}
            onClick={onBackButtonClick}
          >
            Back
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12} textAlign="center" mb={4} mt={1}>
        <Typography component="h1" variant="h1" fontSize={30}>
          Employee Detail
        </Typography>
      </Grid>
      {selectedEmployee && (
        <Grid item xs={12} display="flex" justifyContent="center">
          <EmployeeCard employee={selectedEmployee} />
        </Grid>
      )}
    </Grid>
  );
};

export default EmployeeDetail;

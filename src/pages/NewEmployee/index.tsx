import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { NewEmployeeForm } from "../../entities/employee";
import axios from "axios";
import toast from "../../utils/toast";

const validationSchema = yup.object().shape({
  email: yup.string().email("Invalid email format").required("Required value"),
  firstName: yup.string().required("Required value"),
  lastName: yup.string().required("Required value"),
  type: yup.string().required("Required value"),
});

const initialValues: NewEmployeeForm = {
  email: "",
  firstName: "",
  lastName: "",
  type: "",
};

const employeesTypes: string[] = [
  "Engineer",
  "UX Designer",
  "Recruiter",
  "Project Manager",
  "Tester",
];

const NewEmployee = () => {
  const navigate = useNavigate();

  const onBackButtonClick = () => {
    const backPath = "/";
    navigate(backPath);
  };

  const onSubmit = async (formValues: NewEmployeeForm) => {
    try {
      const newEmployee = await axios.post(
        "http://localhost:9000/api/users",
        formValues
      );
      toast.success('Employee successfully created')
      if (newEmployee.data) {
        const backPath = "/";
        navigate(backPath);
      }
      resetForm();
    } catch (error) {
      toast.error('Unexpected error. Try again')
    }
  };

  const {
    values,
    handleChange,
    handleSubmit,
    errors,
    touched,
    resetForm,
  } = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    enableReinitialize: true,
  });

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
          New Employee
        </Typography>
      </Grid>
      <Grid item xs={12} m={4} display="flex" justifyContent="center">
        <Paper elevation={2} sx={{ minWidth: "90%", minHeight: "15em" }}>
          <form onSubmit={handleSubmit}>
            <Grid container direction="row" p={2} spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  onChange={handleChange}
                  error={touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                  value={values.email}
                  name="email"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="First Name"
                  onChange={handleChange}
                  error={touched.firstName && !!errors.firstName}
                  helperText={touched.firstName && errors.firstName}
                  value={values.firstName}
                  name="firstName"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Last Name"
                  onChange={handleChange}
                  error={touched.lastName && !!errors.lastName}
                  helperText={touched.lastName && errors.lastName}
                  value={values.lastName}
                  name="lastName"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl
                  fullWidth
                  error={touched.type && Boolean(errors.type)}
                >
                  <InputLabel id="select-employee-type-label">Type</InputLabel>
                  <Select
                    labelId="select-employee-type-label"
                    id="select-employee-type"
                    name="type"
                    value={values.type}
                    label="Type"
                    onChange={handleChange}
                  >
                    {employeesTypes.map((type, idx) => (
                      <MenuItem key={`type${idx}`} value={type}>
                        {type}
                      </MenuItem>
                    ))}
                  </Select>
                  <FormHelperText hidden={!touched.type || !errors.type}>
                    {errors.type}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12} textAlign="center" mt={4}>
                <Button variant="contained" type="submit">
                  Confirm
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default NewEmployee;

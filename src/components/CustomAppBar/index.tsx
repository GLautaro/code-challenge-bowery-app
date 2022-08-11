import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const CustomAppBar = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Employees Back Office</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default CustomAppBar;

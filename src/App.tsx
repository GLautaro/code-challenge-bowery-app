import React from "react";
import { Route, Routes } from "react-router-dom";
import CustomAppBar from "./components/CustomAppBar";
import EmployeeDetail from "./pages/EmployeeDetail";
import EmployeesList from "./pages/EmployeesList";
import NewEmployee from "./pages/NewEmployee";

function App() {
  return (
    <div>
      <CustomAppBar />
      <Routes>
        <Route path="/" element={<EmployeesList />} />
        <Route path="newEmployee" element={<NewEmployee />} />
        <Route path="employeeDetail" element={<EmployeeDetail />} />
      </Routes>
    </div>
  );
}

export default App;

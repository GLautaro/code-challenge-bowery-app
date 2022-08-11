import { createSlice } from "@reduxjs/toolkit";
import { IEmployee } from "../../entities/employee";

interface IEmployeeState {
  employee?: IEmployee;
}

const initialState: IEmployeeState = {
  employee: undefined,
};

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    setEmployee: (state, { payload }) => {
      state.employee = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setEmployee } = employeeSlice.actions;

export const employeeReducer = employeeSlice.reducer;

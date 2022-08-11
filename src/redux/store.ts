import { configureStore } from "@reduxjs/toolkit";
import { employeeReducer } from "./slices/employee";

const store = configureStore({
  reducer: {
    employee: employeeReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

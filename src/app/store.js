import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/employeeReducer";

export default configureStore({
    reducer: {
        user: userReducer,
    }
})
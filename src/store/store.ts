import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from '../redux-slices/employee';

export default configureStore({
    reducer:{
        employee: employeeReducer
    }
});
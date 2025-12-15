import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from '../redux-slices/employee';
import appActionReducer from '../redux-slices/app-actions';

export default configureStore({
    reducer:{
        employee: employeeReducer,
        appActions: appActionReducer
    }
});
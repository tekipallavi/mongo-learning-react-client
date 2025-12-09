import { createSlice } from '@reduxjs/toolkit';


const employee  = createSlice({
    name: 'employee',
    initialState: {
        loggedInEmployee: null,
        employeeList: []
    },
    reducers: {
        setLoggedInEmployee(state:any, action:any){
            state.loggedInEmployee = action.payload;
        },
        setEmployees(state:any, action:any){
            state.employeeList = action.payload;
        }
    }
});

export const { setLoggedInEmployee, setEmployees } = employee.actions;
export default employee.reducer;
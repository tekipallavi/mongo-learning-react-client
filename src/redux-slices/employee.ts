import { createSlice } from '@reduxjs/toolkit';


const employee  = createSlice({
    name: 'employee',
    initialState: {
        loggedInEmployee: null,
        loggedInEmployeeDetails:null,
        employeeList: []
    },
    reducers: {
        setLoggedInEmployee(state:any, action:{payload: string}){
            state.loggedInEmployee = action.payload;
        },
        setEmployees(state:any, action:any){
            state.employeeList = action.payload;
        },
        setLoggedInEmployeeDetails(state:any, action:{payload: object}){
            state.loggedInEmployeeDetails = action.payload;
        },
    }
});

export const { setLoggedInEmployee, setEmployees, setLoggedInEmployeeDetails } = employee.actions;
export default employee.reducer;
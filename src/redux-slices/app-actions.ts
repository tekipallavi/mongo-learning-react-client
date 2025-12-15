import { createSlice } from "@reduxjs/toolkit";


const appActions =  createSlice({
    name: 'appActions',
    initialState: {
        currentRoute: '/'
    },
    reducers: {
        setCurrentRoute(state:any, action:{payload:string}){
            state.currentRoute = action.payload;
        }
    }
})


export const {setCurrentRoute} = appActions.actions;
export default appActions.reducer;

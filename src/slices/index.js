import { createSlice } from "@reduxjs/toolkit";
import clients from '../clients';

const initialState = {
    clients,
    orders: JSON.parse(localStorage.getItem('orders')) || []
};

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
     
        }


    
});

export const {} = dataSlice.actions;

    export default dataSlice.reducer;
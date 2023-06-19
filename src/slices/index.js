import { createSlice } from "@reduxjs/toolkit";
import clients from '../clients';

const initialState = {
    avis: [],
};

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        createAvis: (state, { payload }) => {
            const order = {
                id: payload,
                avisdepassage: [],
            };
            state.avis.push(order);
        },
        addAvis: (state, action) => {
            const arrayLocation = state.avis.length - 1;
            state.avis[arrayLocation].avisdepassage.push(action.payload);
        },
    },
});

export const { addAvis, createAvis } = dataSlice.actions;

export default dataSlice.reducer;

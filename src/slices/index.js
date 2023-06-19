import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    clients: [],
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
            state.clients.push(order);
        },
        addAvis: (state, action) => {
            const arrayLocation = state.clients.length - 1;
            state.clients[arrayLocation].avisdepassage.push(action.payload);
        },
    },
});

export const { addAvis, createAvis } = dataSlice.actions;

export default dataSlice.reducer;

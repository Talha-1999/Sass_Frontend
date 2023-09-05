import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    languages: 'en',
    packages: []

};

const globalreducer = createSlice({
    name: "global",
    initialState,
    reducers: {
        Language(state, action) {
            state.languages = action.payload;
        },
        Packages(state, action) {
            state.packages = action.payload
        }

    },
});

export const { Language, Packages } = globalreducer.actions;
export default globalreducer.reducer;

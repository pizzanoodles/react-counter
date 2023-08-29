import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        counterList: [],
    },
    reducers: {},
});

export default counterSlice.reducer;

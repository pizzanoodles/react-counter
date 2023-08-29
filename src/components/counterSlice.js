import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";


const counterSlice = createSlice({
    name: "counter",
    initialState: {
        counterList: [],
        sum: 0
    },
    reducers: {
        updateSize: (state, action) => {
            state.counterList = new Array(action.payload).fill(0);
            console.log(action);
        },
        updateCount: (state, action) => {
            console.log(action.payload);
        },
    },
});

export const { updateSize,updateCount } = counterSlice.actions;
export default counterSlice.reducer;

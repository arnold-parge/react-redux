import { createSlice } from "@reduxjs/toolkit";
import { CounterState } from "../types/CounterState";

const initialState: CounterState = {
    value: 0,
    loading: false,
};

export const counterSlice = createSlice({
    name: 'counterSlice',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            if (state.value > 0) {
                state.value -= 1;
            }
        },
    },
});

export const { increment, decrement } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;

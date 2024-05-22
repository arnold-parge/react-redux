import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
    firstName: string;
    lastName: string;
}

const initialState: UserState = {
    firstName: '',
    lastName: '',
};

const nameSlice = createSlice({
    name: 'nameSlice',
    initialState,
    reducers: {
        setFirstName(state, action) {
            state.firstName = action.payload;
        },
        setLastName(state, action) {
            state.lastName = action.payload;
        },
    }
});

export const { setFirstName, setLastName } = nameSlice.actions;
export const nameReducer = nameSlice.reducer;

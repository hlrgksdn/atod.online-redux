import { createSlice } from "@reduxjs/toolkit";

const initialState: {mode:'dark' | 'light', isAuth: boolean} = {
    mode: 'dark',
    isAuth: false,
}

const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers : {
        generalModeChange: (state) => {state.mode = state.mode === 'dark' ? 'light' : 'dark'},
        generalIsAuthChange: (state, action) => {state.isAuth = action.payload},
    }
});

const {actions, reducer} = generalSlice;

export default reducer;
export const {generalModeChange, generalIsAuthChange} = actions;
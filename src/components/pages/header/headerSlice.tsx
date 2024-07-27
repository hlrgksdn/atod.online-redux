import { createSlice } from "@reduxjs/toolkit";

const initialState: {title:string} = {
    title: 'Главная страница',
}

const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers : {
        headerTitleChange: (state, action) => {state.title = action.payload},
    }
});

const {actions, reducer} = headerSlice;

export default reducer;
export const {headerTitleChange} = actions;
import { configureStore } from "@reduxjs/toolkit";
import header from './components/pages/header/headerSlice';
import general from './components/generalSlice.ts'
import {api} from "./components/api/apiSlice.ts";

const store = configureStore({
    reducer: {
        header,
        general,
        [api.reducerPath] : api.reducer},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
    devTools: process.env.NODE_ENV !== 'production'
})

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
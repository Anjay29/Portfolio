import { combineReducers } from "redux";
import rootSlice from "./root/rootSlice.js";
import { configureStore } from "@reduxjs/toolkit";


const rootReducer = combineReducers({root: rootSlice})

export const store = configureStore({
    reducer: rootReducer
})
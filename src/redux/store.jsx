import { configureStore } from "@reduxjs/toolkit";
import { stateReducer } from "./words";


export const store = configureStore({
    reducer : {
        words: stateReducer,
    }
});
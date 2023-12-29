import {combineReducers, configureStore} from "@reduxjs/toolkit";
import burgerReducerSlice from "../components/header/nav/burger/burgerReducerSlice";
import headerSectionReducerSlice from "../components/header/headerSection/headerSectionReducerSlice";
import popupReducerSlice from "../components/poup/popupReducerSlice";
import addToBagReducerSlice from "./addToBagReducerSlice";
// import stepReducerSlice from "../components/step/stepReducerSlice";


const rootReducer = combineReducers({
    burgerSlice: burgerReducerSlice,
    headerSlice: headerSectionReducerSlice,
    popupSlice: popupReducerSlice,
    addToBagSlice: addToBagReducerSlice,
    // stepSlice: stepReducerSlice,
})

export const store = configureStore({
    reducer: rootReducer
})
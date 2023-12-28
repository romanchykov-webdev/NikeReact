import {createSlice} from "@reduxjs/toolkit";


const burgerReducerSlice = createSlice({
    name: 'burger',
    initialState: {
        burgerToggle: false,
    },
    reducers: {
        burgerToggleAction(state,action) {
            return {
                ...state,
                burgerToggle: !state.burgerToggle
            }
        }
    }
})

export default burgerReducerSlice.reducer;
export const {
    burgerToggleAction,
} = burgerReducerSlice.actions;
import {createSlice} from "@reduxjs/toolkit";


const stepReducerSlice = createSlice({
    name: 'step',
    initialState: {
        isVisibleStep: false,
    },
    reducers: {
        showStep(state) {
            state.isVisibleStep = true;
        },
        hideStep(state) {
            state.isVisibleStep = false;
        },
    }
})

export default stepReducerSlice.reducer
export const {
    showStep,
    hideStep,
} = stepReducerSlice.actions
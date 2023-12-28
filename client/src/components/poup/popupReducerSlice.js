import {createSlice} from "@reduxjs/toolkit";


const popupReducerSlice = createSlice({
    name: 'popup',
    initialState: {
        isActive: false,
        color:'black',
        size:'',
        item: []
    },
    reducers: {
        popupIsActive(state, action) {
            const { i } = action.payload;
                state.isActive= true;
                state.color= 'black';
                state.size= '';
                state.item= i
        },
        popupHiddenAction(state) {
            state.isActive = false
        },
        popupChangeColorActive(state,action){
            const color = action.payload
            state.color=color

        },
        popupChangeSizeAction(state,action){
            // debugger
            const s=action.payload
            state.size=s
        }
    }
})

export default popupReducerSlice.reducer

export const {
    popupIsActive,
    popupHiddenAction,
    popupChangeColorActive,
    popupChangeSizeAction,
} = popupReducerSlice.actions
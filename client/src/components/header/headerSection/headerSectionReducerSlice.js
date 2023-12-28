import {createSlice} from "@reduxjs/toolkit";


const headerSectionReducerSlice = createSlice({
    name: 'headerSlice',
    initialState: {
        id: 1,
        name:'AIR JORDAN 1 RETRO HIGH OG',
        color: 'black',
        colors: ['black','orange','red'],
        size: 41,
        sizes: [41,42,43,44,45],
        price: 275,
        imgs: [],
        img: '',
    }, reducers: {
        changeColorAction(state, action) {
            // debugger
            const changeColor = action.payload;
            return {
                ...state,
                color: changeColor
            }
        },
        changeSizeAction(state,action){
            const changeSize=action.payload;
            return{
                ...state,
                size:changeSize
            }

        }

    }
})

export default headerSectionReducerSlice.reducer
export const {
    changeColorAction,
    changeSizeAction,
} = headerSectionReducerSlice.actions
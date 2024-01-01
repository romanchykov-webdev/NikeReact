import {createSlice} from "@reduxjs/toolkit";

import imgRed from "../img/itemsImg/2.png";
import imgBlack from "../img/itemsImg/1.png";
import imgOrange from "../img/itemsImg/3.png";


const headerSectionReducerSlice = createSlice({
    name: 'headerSlice',
    initialState: {
        color: 'black',
        size:'',
        itemsArray:[
            {id: 1,article: 1,size: [41,42,43,44,45],color: 'red',price: 275,title: 'AIR JORDAN 1 RETRO HIGH OG',desc: 'AIR JORDAN 1 RETRO HIGH OG',img: imgRed,quantity:1,},
            {id: 2,article: 2,size: [43,44,45],color: 'black',price: 275,title: 'AIR JORDAN 1 RETRO HIGH OG',desc: 'AIR JORDAN 1 RETRO HIGH OG',img: imgBlack,quantity:1,},
            {id: 3,article: 3,size: [42,43,44,45],color: 'orange',price: 275,title: 'AIR JORDAN 1 RETRO HIGH OG',desc: 'AIR JORDAN 1 RETRO HIGH OG',img: imgOrange,quantity:1,},
        ]

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
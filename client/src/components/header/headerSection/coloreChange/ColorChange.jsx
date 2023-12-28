import React, {useState} from 'react';
import s from './ColorChange.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {changeColorAction} from "../headerSectionReducerSlice";
import imgBlack from "../../img/itemsImg/1.png";
import imgRed from "../../img/itemsImg/2.png";
import imgOrange from "../../img/itemsImg/3.png";
const ColorChange = () => {
    const dispatch=useDispatch()
    const colorAction = useSelector(state => state.headerSlice.color)




    return (
        <div className={s.colorChange}>
            <svg width="149" height="491" viewBox="0 0 149 491" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path  d="M-0.981841 485C102.892 409.629 248.316 208.11 -0.981841 4.99997" stroke="white"/>
                <circle data-img="" cx="1" cy="483" r="7.5" transform="rotate(180 1 483)" fill="#3D996D" stroke="white"/>
                <circle data-img="" cx="1" cy="8" r="7.5" transform="rotate(180 1 8)" fill="#973030" stroke="white"/>
                <circle data-img="" cx="67" cy="421" r="7.5" transform="rotate(180 67 421)" fill="#150af2" stroke="white"/>
                <circle data-img="" d="M59.468 73C59.468 68.8588 62.8321 65.5 66.984 65.5C71.1359 65.5 74.5 68.8588 74.5 73C74.5 77.1412 71.1359 80.5 66.984 80.5C62.8321 80.5 59.468 77.1412 59.468 73Z" fill="#9B0E95" stroke="white"/>
                <circle
                    onClick={()=>
                        dispatch(changeColorAction('orange'))
                    }
                    className={`${colorAction==='orange' ? s.active : ''}`}
                        data-color="ornge"
                        data-img="img/header/itemsImg/3.png"
                        cx="115" cy="344" r="7.5"
                        transform="rotate(180 115 344)"
                        fill="rgb(241, 133, 87)"
                        stroke="white"/>
                <circle
                    onClick={()=>
                        dispatch(changeColorAction('red'))
                    }
                    className={`${colorAction==='red' ? s.active : ''}`}
                    data-color="red" data-img="img/header/itemsImg/2.png" cx="115" cy="147" r="7.5" transform="rotate(180 115 147)" fill="#bd072d" stroke="white"/>
                <circle
                    onClick={()=>
                        dispatch(changeColorAction('black'))
                    }
                    className={`${colorAction==='black' ? s.active : ''}`}
                    data-color="black" data-img="img/header/itemsImg/1.png" cx="136.318" cy="245" r="7.5"  transform="rotate(180 136.318 245)" fill="black" stroke="white" />
            </svg>

        </div>
        // /.colorCheng
    );
};

export default ColorChange;
import React from 'react';
import './Burger.scss'
import {useDispatch, useSelector} from "react-redux";
import {burgerToggleAction} from "./burgerReducerSlice";
const Burger = () => {

    const burgerToggle=useSelector(state => state.burgerSlice.burgerToggle)

    const dispatch=useDispatch();

    return (
        <button className={`burger ${burgerToggle ? 'active' : null} `}
                onClick={()=>dispatch(burgerToggleAction())}
        >
            <span></span>
            <span></span>
            <span></span>
        </button>
    );
};

export default Burger;
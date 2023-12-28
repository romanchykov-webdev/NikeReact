import React from 'react';
import s from './SectionImg.module.scss'
import imgBlack from '../../img/itemsImg/1.png'
import imgRed from '../../img/itemsImg/2.png'
import imgOrange from '../../img/itemsImg/3.png'
import {useDispatch, useSelector} from "react-redux";
import { addToBagAction} from "../../../../reducers/addToBagReducerSlice";
import ColorChange from "../coloreChange/ColorChange";
import {dispatchStepsWithTimeout} from "../../../step/stepShowHidden";

const SectionImg = () => {
    const dispatch = useDispatch()

    const imgColor = useSelector(state => state.headerSlice.color)
    const headerItem = useSelector(state => state.headerSlice)
    let imgBig
    switch (imgColor) {
        case'black':
            imgBig = imgBlack
            break
        case'red':
            imgBig = imgRed
            break
        case'orange':
            imgBig = imgOrange
            break
        default:
            break
    }

    function handlerPopup() {
        const item = {
            id: '1',
            size: headerItem.size,
            color: headerItem.color,
            price: headerItem.price,
            title: 'AIR JORDAN 1 RETRO HIGH OG',
            desc: 'AIR JORDAN 1 RETRO HIGH OG',
            img: `http://localhost:3000${imgBig}`,
        }

        // dispatch(popupIsActive())
        dispatch(addToBagAction({item}))
        dispatchStepsWithTimeout(dispatch);
    }

    return (
        <div className={s.wrapper}>
        <ColorChange/>
        <div className={s.wrapperImg}>
            {/*<img src={imgBlack} alt="AIR JORDAN 1 RETRO HIGH OG"/>*/}
            <img src={imgBig} alt="AIR JORDAN 1 RETRO HIGH OG"/>
            <div className={s.wrapSvg}>
                <svg width="562" height="39" viewBox="0 0 562 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1.16738 0.864815C0.907164 0.772376 0.621285 0.908382 0.528847 1.16859C0.436408 1.4288 0.572414 1.71468 0.832625 1.80712L1.16738 0.864815ZM0.832625 1.80712C77.8671 29.1733 297.686 67.445 561.121 1.82114L560.879 0.850795C297.636 66.427 78.0172 28.1653 1.16738 0.864815L0.832625 1.80712Z"
                        fill="url(#paint0_linear_34_997)"/>
                    <defs>
                        <linearGradient id="paint0_linear_34_997" x1="281" y1="1.33597" x2="281" y2="37.5571"
                                        gradientUnits="userSpaceOnUse">
                            <stop stopColor="white" stopOpacity="0"/>
                            <stop offset="1" stopColor="white"/>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className={s.add}
                 onClick={() => handlerPopup()}
            >
                <span></span>
                <span></span>
            </div>
            {/*    <!-- /.wrapSvg -->*/}
        </div>
        </div>
    );
};

export default SectionImg;
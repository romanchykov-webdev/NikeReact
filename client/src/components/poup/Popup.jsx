import React from 'react';
import  './Popup.scss'
import {useDispatch, useSelector} from "react-redux";
import {changeColorAction} from "../header/headerSection/headerSectionReducerSlice";
import {
    popupChangeColorActive,
    popupChangeSizeAction,
    popupHiddenAction,
} from "./popupReducerSlice";
import imgBlack from "../header/img/itemsImg/1.png";
import imgRed from "../header/img/itemsImg/2.png";
import imgOrange from "../header/img/itemsImg/3.png";
import {addToBagAction} from "../../reducers/addToBagReducerSlice";
import {dispatchStepsWithTimeout} from "../step/stepShowHidden";

const Popup = () => {

    const dispatch = useDispatch()
    const popupIsActive=useSelector(state => state.popupSlice.isActive)

    const colorAction = useSelector(state => state.popupSlice.color)
    const itemData = useSelector(state => state.popupSlice.item)
    const popupData = useSelector(state => state.popupSlice)

    let colorBg = ''
    switch (colorAction) {
        case 'black':
            colorBg = 'rgba(0, 0, 0, 0.6392156863)'
            break
        case 'red':
            colorBg = 'rgba(126, 2, 28, 0.3)'
            break
        case 'orange':
            colorBg = 'rgba(206, 91, 57, 0.3)'
            break
        default:
            colorBg = 'rgba(0, 0, 0, 0.6392156863)'
            break
    }


    function handlerPopup() {
        const item = {
            id: itemData.id,
            size: popupData.color,
            color: popupData.size,
            price: itemData.price,
            title: itemData.name,
            desc: '',
            img: `http://localhost:3000${itemData.img}`,
        }

        // dispatch(popupIsActive())
        dispatch(addToBagAction({item}))
        dispatchStepsWithTimeout(dispatch);
    }

    return (
        <div className={`popup ${popupIsActive ? 'active' : ''}`}
             style={{backgroundColor: `${colorBg}`}}

        >

            <div className={"wrapper"}>
                <div className={"closePopup"}
                     onClick={() => dispatch(popupHiddenAction())}
                >X
                </div>
                <div className={"imgBx"} style={{backgroundColor:colorBg}} >

                    {/*<img src="https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto.png?raw=true" alt="Nike Jordan Proto-Lyte Image"/>*/}
                    <img src={itemData.img} alt="Nike Jordan Proto-Lyte Image"/>
                </div>
                <div className={"details"}>
                    <div className={"content"}>
                        <h2 ><span className={"nameItemPopup"} style={{color:`${colorAction}`}} >{itemData.name}</span><br/>
                            <span>Running Collection</span>
                        </h2>
                        <p className={"textDescription"}>
                            Featuring soft foam cushioning and lightweight, woven fabric in the upper, the Jordan
                            Proto-Lyte is
                            made for all-day, bouncy comfort.
                            Lightweight Breathability: Lightweight woven fabric with real or synthetic leather provides
                            breathable support.
                            Cushioned Comfort: A full-length foam midsole delivers lightweight, plush cushioning.
                            Secure Traction: Exaggerated herringbone-pattern outsole offers traction on a variety of
                            surfaces.
                        </p>
                        <p className={"productColors"}>Available Colors:
                            {
                                itemData.colors.map(colorItem => (
                                    <span
                                        key={colorItem}
                                        onClick={() => dispatch(popupChangeColorActive(colorItem))}

                                        className={`${colorItem} ${colorAction === colorItem ? "active" : ''}`}

                                    >

                                    </span>
                                ))
                            }

                        </p>
                        <div className={"changeSizePopup"}>
                            {
                                itemData.sizes.map(s=>(
                                    <span key={s}
                                        className={`spanWrapper ${popupData.size === s ? 'active': ''}`}
                                    onClick={()=>dispatch(popupChangeSizeAction(s))}
                                    >
                                        <span>{s}</span>
                                    </span>
                                ))
                            }


                        </div>
                        <div className={"wrapperFooter"}>
                            <h3>$ <span className={"price"}
                                        style={{color:`${colorAction}`}}
                            >{itemData.price}</span>
                            </h3>
                            <button className={`addToBag ${popupData.size !=='' ? 'active' : ''}`}
                                    disabled={popupData.size===''}
                                onClick={()=>handlerPopup()}
                            >Buy Now</button>
                        </div>
                        {/*<!-- /.wrapper -->*/}

                    </div>
                </div>
            </div>
            {/*<!-- /.wrapper -->*/}

        </div>

    );
};

export default Popup;
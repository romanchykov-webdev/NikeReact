import React from 'react';
import s from './Bag.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {
    isVisibleBagToggle,
    incrementBagAction,
    decrementBagAction,
    removeItemInTheBag
} from "../../reducers/addToBagReducerSlice";


const Bag = () => {

    const dispatch = useDispatch()

    const bag = useSelector(state => state.addToBagSlice.bag)
    const totalPrice = bag.reduce((acumm, item) => {
        return acumm + item.quantity * item.price
    }, 0)


    return (
        <div className={s.wrapperBag}>

            <div className={s.bag}>
                <div className={s.wrapperClose}>
                    <div className={s.blockClose}
                         onClick={() => dispatch(isVisibleBagToggle())}
                    >
                        <span></span>
                        <span></span>
                    </div>
                </div>
                {
                    bag.map(item => (
                        <div className={s.wrapperItem} key={item.id}>

                            <div className={s.imgItem}>
                                <img src={item.img} alt=""/>
                            </div>

                            <div className={s.titleItem} style={{color: item.color}}>
                                {item.title}

                                <div className={s.size}>
                                    <span className={s.text}>Size: </span>
                                    <span>{item.size}</span>
                                </div>
                            </div>
                            <div className={s.itemColor}>
                                <div className={s.blockColor}
                                     style={{backgroundColor: item.color}}
                                ></div>
                                <div className={s.textColor}>{item.color}</div>
                            </div>
                            <div className={s.quantity}>
                                <div className={s.more}
                                     onClick={() => dispatch(incrementBagAction({id: item.id}))}
                                >
                                    <span></span>
                                    <span></span>

                                </div>

                                <div className={s.out}>{item.quantity}</div>

                                <div className={s.meno}
                                     onClick={() => dispatch(decrementBagAction({id: item.id}))}
                                ><span></span>
                                </div>

                            </div>
                            <div className={s.price} style={{color: item.color}}>

                                $ {item.price * item.quantity}
                            </div>
                            <div className={s.removeItem}
                                 onClick={() => dispatch(removeItemInTheBag(item.id))}
                            >
                                <span>
                                    <span></span>
                                    <span></span>
                                </span>

                            </div>
                        </div>
                    ))
                }
                <div className={s.total}>
                    Total : <span> {totalPrice}</span>
                </div>
            </div>
        </div>
    );
};

export default Bag;
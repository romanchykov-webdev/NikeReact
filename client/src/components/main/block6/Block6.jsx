import React from 'react';
import s from './Block6.module.scss'
import {useDispatch} from "react-redux";
import img1 from "./img/1.png";
import img2 from "./img/2.png";
import img3 from "./img/3.png";
import {popupIsActive} from "../../poup/popupReducerSlice";


const Block6 = () => {

    const dispatch = useDispatch()

    const itemsBlock6 = [

        {
            id: 12,
            name: 'NIKE MERCURIAL SUPERFLY',
            price: 271,
            img: img1,
            colors: ['black', 'red', 'orange'],
            sizes: [41, 42, 43, 44]
        },
        {
            id: 13,
            name: 'NIKE AIR ZOOM ALPHAFLY',
            price: 260,
            img: img2,
            colors: ['black', 'red', 'orange'],
            sizes: [41, 42, 43, 44]
        },
        {
            id: 14,
            name: 'NIKE DUNK HIGH',
            price: 380,
            img: img3,
            colors: ['black', 'red', 'orange'],
            sizes: [41, 42, 43, 44]
        },
    ]


    return (
        <div className={s.block6}>
            <div className={s.textHeader}>
                Our Favorite <span className="redText">Nike</span> styles <span className="redText">.</span>
            </div>
            {/* <!-- /.textHeader -->*/}
            <div className={s.wrapperItem}>
                {
                    itemsBlock6.map(i => (

                        <div className={s.wrap}
                             onClick={()=>dispatch(popupIsActive({i}))}
                             key={i.id}
                        >
                            <span className={s.bgitem}></span>
                            <div className={s.itemCart}>
                                <div className={s.name}>
                                    {i.name}
                                    <span>
                                        $ {i.price}
                                    </span>
                                </div>
                                <div className={s.wrapImg}>
                                    <img className={s.imgScarpa} src={i.img} alt="imgItem"/>

                                </div>
                                {/*    <!-- /.wrapImg -->*/}
                            </div>
                            {/*    <!-- /.itemCart 1 -->*/}
                        </div>


                    ))
                }
            </div>

        </div>
    );
};

export default Block6;
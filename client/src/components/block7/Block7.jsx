import React from 'react';
import s from './Block7.module.scss'

import img1 from './img/1.png'
import img2 from './img/2.png'
import img3 from './img/3.png'
import img4 from './img/4.png'
import img5 from './img/5.png'
import img6 from './img/6.png'
import img7 from './img/7.png'
import img8 from './img/8.png'




const Block7 = () => {
    return (
        <div className={s.block7}>
            <img src={img1} alt="img"/>
            <img src={img2} alt="img"/>
            <img src={img3} alt="img"/>
            <img src={img4} alt="img"/>
            <img src={img5} alt="img"/>
            <img src={img6} alt="img"/>
            <img src={img7} alt="img"/>
            <img src={img8} alt="img"/>
        </div>
    );
};

export default Block7;
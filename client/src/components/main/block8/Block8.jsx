import React from 'react';
import s from './Block8.module.scss'
import img1 from './img/1.png'
import img2 from './img/2.png'
import img3 from './img/3.png'
import Button from "../../../ui/button/Button";


const Block8 = () => {
    return (
        <div className={s.block8}>
            <div className={s.blockText}>
                <div className={s.textHeader}>
                    BEST SHOES FOR <br/>
                    THE BEST PEOPLE
                </div>
                {/*<!-- /.textHeader -->*/}
                <div className={s.textSmall}>
                    Design for the way you live your life. Atoms are beautiful in
                    their simplicity, supporting your feet with absolute comfort.
                </div>
                <Button className={['btnLarge']}>
                    <span>Explore More</span>
                </Button>



            </div>
            {/*<!-- /.blockText -->*/}
            <div className={s.blockImg}>
                <img src={img1} alt="img"/>
                    <img src={img2} alt="img"/>
                        <img src={img3} alt="img"/>
            </div>
        {/*    <!-- /.blockImg -->*/}
        </div>
    );
};

export default Block8;
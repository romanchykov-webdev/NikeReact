import React from 'react';
import s from './Block5.module.scss'
import img1 from './img/1.png'
import Button from "../../../ui/button/Button";


const Block5 = () => {
    return (
        <div className={s.block5}>
            <div className={s.blockImg}>
                <img src={img1} alt="img"/>
                    <span className={s.bgBluer}></span>
                    <span className={s.bgSquare}></span>
            </div>
            {/*<!-- /.blockImg -->*/}
            <div className={s.blockDesk}>
                <div className={s.textHeader}>
                    WE PROVIDE MODERN <br/>
                    SHOES
                </div>
                {/* <!-- /.textHeader -->*/}
                <div className={s.textSmall}>
                    Design for the way you live your life. Atoms are beautiful in their
                    simplicity, supporting your feet with absolute comfort.
                </div>
                {/*<!-- /.textSmall -->*/}
                <Button className={['btnMiddle']}>
                    <span>Explore More</span>
                </Button>

            </div>
        {/*    <!-- /.blockDesk -->*/}
        </div>
    );
};

export default Block5;
import React from 'react';
import s from './Block10.module.scss'

import scarpa from './img/scarpa.png'
import logo from './img/Logo.png'
import Button from "../../../ui/button/Button";




const Block10 = () => {
    return (
        <div className={s.block10}>
            <div className={s.wrapTL}>
                <div className={s.blockText}>
                    <div className={s.textHeader}>
                        JOIN OUR NIKECLUB & GET 15% OFF
                    </div>
                    {/*<!-- /.textHeader -->*/}
                    <div className={s.textSmall}>
                        Sign up for free. Join the community, Never pay for shipping.
                    </div>
                    {/* <!-- /.textSmall -->*/}
                    <Button className={['btnSmall']}>
                        <span>Join Us</span>
                    </Button>

                </div>
                {/* <!-- /.blockText -->*/}
                <div className={s.blockLogo}>
                    <img src={logo} alt="img"/>
                </div>
            {/*    <!-- /.blockLogo -->*/}
            </div>
            {/*<!-- /.wrapTL -->*/}
            <div className={s.wrapBg}>
                <img src={scarpa} alt="img"/>
            </div>
        {/*    <!-- /.wrapBg -->*/}
        </div>
    );
};

export default Block10;
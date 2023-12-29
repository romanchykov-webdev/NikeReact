import React from 'react';
import s from './Block9.module.scss'
import img1 from './img/1.png'
import Button from "../../../ui/button/Button";


const Block9 = () => {
    return (
        <div className={s.block9}>
            <div className={s.blockImg}>
                <img src={img1} alt="img"/>
            </div>
            {/*<!-- /.blockImg -->*/}
            <div className={s.blockText}>
                <div className={s.textHeader}>
                    WE ARE
                    <span className={s.textRed}>
                        VISIONARIES
                    </span>
                </div>
                <div className={s.textSmall}>
                    <p >
                        Exploring the boundaries of footwear with expert design knowledge and
                        manufacture in mind.
                    </p>
                    <p>
                        <span className={s.textH}> INSIGHTFUL CREATIVE DIRECTION : </span>
                        Uniting Consumer Insights with progressive
                        manufacturing methods, we create comprehensive plans to outpace your competition.

                    </p>
                    <p>
                        <span className={s.textH}> PURPOSEFUL DESIGN :</span>
                        We create products that captivate consumers and elevate brands.
                        applying a refined sense of beauty and style, our designs are alluring.

                    </p>
                    <p>
                        <span className={s.textH}>RELENTLESS INNOVATION : </span>
                        We live to
                        challenge the boundaries
                        of convention and take advantage of every breakthrough
                        opportunity big or small. we’ll help you define the
                        cutting-edge of your business.

                    </p>
                    <Button className={['btnSmall']}>
                        <span>Customization Available</span>
                    </Button>

                </div>

            </div>
        </div>
    );
};

export default Block9;
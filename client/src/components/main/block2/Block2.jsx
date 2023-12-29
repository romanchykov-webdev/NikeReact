import React from 'react';
import s from './Block2.module.scss'
import up from './img/bigText/up.png'
import dow from './img/bigText/dow.png'
import scarpa from './img/scarpa.png'
import Button from "../../../ui/button/Button";

const Block2 = () => {
    return (
        <div className={s.block2}>
            {/*<!-- <div class="container"> -->*/}
            <div className={s.bigText}>
                <div className={s.wrapper}>
                    <span>
                        THE ESSENCE
                        <img src={up} alt="upimg"/>
                    </span>
                    <span>HANDCRAFTED </span>
                    <span>
                        <img src={dow} alt="dowimg"/>
                        OF FOOTWEAR.
                    </span>
                </div>
            {/*    <!-- /.wrapper -->*/}
            </div>
            {/* <!-- /.bigText -->*/}
            <div className={s.smallText}>
                <p>
                    In terms of footwear, we are the first in
                    Canada to have opened not simple "shops" but
                    real company outlets that offer the same service as
                    the artisan <br/>
                    shops of yesteryear: this to make you go
                    without fail every time you want to buy a pair of handmade
                    genuine leather shoes. Without fear of making <br/>
                    mistakes and
                    with the certainty that you will be able to wear them comfortably
                    from the beginning. <br/>
                    Are you also curious to find out why hundreds of people
                    choose us every day?
                </p>
                <Button className={['btnMiddle']}>
                    <span>Find Out More</span>
                </Button>

            </div>
            {/*  <!-- /.smolText -->
            <!-- </div> -->
            <!-- /.container -->*/}
            <div className={s.wrapperScarp}>
                <img src={scarpa} alt="img"/>
            </div>
        {/*    <!-- /.wraperScarp -->*/}
        </div>

    );
};

export default Block2;
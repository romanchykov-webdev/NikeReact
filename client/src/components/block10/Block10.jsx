import React from 'react';
import s from './Block10.module.scss'

import scarpa from './img/scarpa.png'
import logo from './img/Logo.png'




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
                    <button className="btn btnSmol">
                    <span>
                        Join Us
                    </span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M16.8183 8.53929C16.7129 8.46041 16.5929 8.40312 16.4653 8.37072L9.57546 6.78007C9.44699 6.75041 9.31392 6.74634 9.18387 6.76811C9.05382 6.78987 8.92933 6.83704 8.81751 6.90691C8.59167 7.04803 8.43114 7.27308 8.37124 7.53256C8.34157 7.66104 8.33751 7.7941 8.35927 7.92415C8.38103 8.0542 8.4282 8.17869 8.49808 8.29052C8.63919 8.51635 8.86425 8.67688 9.12372 8.73679L13.6657 9.77813L7.22903 13.8002C7.00411 13.9408 6.84424 14.1649 6.78458 14.4233C6.72492 14.6817 6.77036 14.9533 6.9109 15.1782C7.05144 15.4031 7.27558 15.563 7.534 15.6226C7.79242 15.6823 8.06395 15.6369 8.28887 15.4963L14.7256 11.4742L13.6704 16.013C13.6402 16.1415 13.6357 16.2748 13.6572 16.405C13.6788 16.5353 13.7259 16.6599 13.7958 16.7719C13.8658 16.8839 13.9572 16.9808 14.0648 17.0573C14.1725 17.1337 14.2942 17.1881 14.4229 17.2173C14.5514 17.2475 14.6846 17.252 14.8149 17.2304C14.9451 17.2089 15.0698 17.1618 15.1818 17.0919C15.2937 17.0219 15.3907 16.9305 15.4672 16.8229C15.5436 16.7152 15.598 16.5935 15.6271 16.4648L17.2178 9.57494C17.2446 9.44605 17.2457 9.31313 17.221 9.18381C17.1768 8.92434 17.0321 8.69275 16.8183 8.53929Z" fill="white"/>
                        </svg>
                    </button>
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
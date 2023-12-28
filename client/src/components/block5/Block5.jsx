import React from 'react';
import s from './Block5.module.scss'
import img1 from './img/1.png'


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
                {/*<!-- /.textSmol -->*/}
                <button className="btn btnMiddle">
                    <span>
                        Explore More
                    </span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="right arrow / 24 / Outline">
                            <path id="Vector" d="M16.8183 8.53941C16.7129 8.46053 16.5929 8.40325 16.4653 8.37084L9.57548 6.78019C9.447 6.75053 9.31394 6.74647 9.18389 6.76823C9.05384 6.78999 8.92934 6.83716 8.81752 6.90703C8.59168 7.04815 8.43116 7.2732 8.37125 7.53268C8.34159 7.66116 8.33752 7.79422 8.35929 7.92427C8.38105 8.05432 8.42822 8.17881 8.49809 8.29064C8.63921 8.51647 8.86426 8.677 9.12374 8.73691L13.6657 9.77825L7.22905 13.8003C7.00413 13.9409 6.84426 14.165 6.78459 14.4234C6.72493 14.6819 6.77037 14.9534 6.91092 15.1783C7.05146 15.4032 7.27559 15.5631 7.53401 15.6228C7.79243 15.6824 8.06397 15.637 8.28888 15.4964L14.7256 11.4743L13.6704 16.0132C13.6402 16.1417 13.6357 16.2749 13.6573 16.4051C13.6788 16.5354 13.7259 16.6601 13.7958 16.772C13.8658 16.884 13.9572 16.981 14.0649 17.0574C14.1725 17.1338 14.2942 17.1882 14.4229 17.2174C14.5514 17.2476 14.6847 17.2521 14.8149 17.2306C14.9451 17.209 15.0698 17.162 15.1818 17.092C15.2937 17.022 15.3907 16.9306 15.4672 16.823C15.5436 16.7154 15.598 16.5936 15.6272 16.4649L17.2178 9.57507C17.2446 9.44617 17.2457 9.31325 17.221 9.18393C17.1768 8.92446 17.0321 8.69288 16.8183 8.53941Z" fill="white"></path>
                        </g>
                    </svg>
                </button>
            </div>
        {/*    <!-- /.blockDesk -->*/}
        </div>
    );
};

export default Block5;
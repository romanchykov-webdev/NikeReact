import React from 'react';
import './Main.scss';
import Block2 from "../block2/Block2";
import Block3 from "../block3/Block3";
import Block4 from "../block4/Block4";
import Block5 from "../block5/Block5";
import Block6 from "../block6/Block6";
import Block7 from "../block7/Block7";
import Block8 from "../block8/Block8";

const Main = () => {
    return (
        <main>
            <div className={"container"}>
                <div className="vectorLeft">
                    <svg width="618" height="5770" viewBox="0 0 618 5770" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g style={{mixBlendMode:'lighten'}}>
                            <path d="M-203.5 5769.5L197 5369V3303.5L617 2883.5L68 2334.5L578 1824.5V701.5L-122.5 1" stroke="url(#paint0_angular_178_315)" strokeOpacity="0.4"/>
                        </g>
                        <defs>
                            <radialGradient id="paint0_angular_178_315" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-86 2611) rotate(84.7046) scale(3172.04 451.184)">
                                <stop stopColor="white" stopOpacity="0.54"/>
                                <stop offset="0.291667" stopColor="white" stopOpacity="0"/>
                                <stop offset="0.557292" stopColor="white"/>
                                <stop offset="0.796875" stopColor="white" stopOpacity="0"/>
                                <stop offset="1" stopColor="white" stopOpacity="0.62"/>
                            </radialGradient>
                        </defs>
                    </svg>

                </div>
                <div className="vectorRight">
                    <svg width="366" height="4853" viewBox="0 0 366 4853" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g style={{mixBlendMode:'lighten'}}>
                            <path d="M821.5 -916L421 -515.5L421 1550L1 1970L550 2519L40 3029L40 4152L740.5 4852.5" stroke="url(#paint0_angular_178_316)" strokeOpacity="0.4"/>
                        </g>
                        <defs>
                            <radialGradient id="paint0_angular_178_316" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(704 2242.5) rotate(-95.2954) scale(3172.04 451.184)">
                                <stop stopColor="white" stopOpacity="0.54"/>
                                <stop offset="0.291667" stopColor="white" stopOpacity="0"/>
                                <stop offset="0.557292" stopColor="white"/>
                                <stop offset="0.796875" stopColor="white" stopOpacity="0"/>
                                <stop offset="1" stopColor="white" stopOpacity="0.62"/>
                            </radialGradient>
                        </defs>
                    </svg>

                </div>
                <Block2/>
                <Block3/>
                <Block4/>
                <Block5/>
                <Block6/>
                <Block7/>
                <Block8/>
            </div>
        </main>
    );
};

export default Main;
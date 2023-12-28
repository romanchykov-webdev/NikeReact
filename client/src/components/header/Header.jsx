import React from 'react';
import './Header.scss'
import Nav from "./nav/Nav";
import HeaderSection from "./headerSection/HeaderSection";
import HeaderSlider from "./headerSlider/HeaderSlider";
import Flash from "./flash/Flash";
import img1 from './img/ImageSlider/1.png'
import img2 from './img/ImageSlider/2.png'
import img3 from './img/ImageSlider/3.png'
const Header = () => {

    const itemsHeaderSlider=[
        {id:2,name:'Nike Cosmic Unity 2',price:210,img:img1, colors:['black','red'], sizes:[41,42,43,44,45]},
        {id:3,name:'NIKE SB DUNK HIGH',price:220,img:img2,colors:['black','red','orange'], sizes:[41,42,43,44]},
        {id:4,name:'NIKE DYNAMO GO SE',price:230,img:img3, colors:['black','red', 'orange'], sizes:[41,42,43,44]},
        {id:5,name:'NIKE SB DUNK HIGH',price:220,img:img2,colors:['black','red','orange'], sizes:[41,42,43,44]},
    ]
    // E:\FrontEnd\nikeReact\NikeReact\client\src\components\header\img\ImageSlider\1.png

    return (
        <header>
            <div className="container">
                <div className="wrapperSvgBg">
                    <span className="text">
                        AIR JORDAN 1 <br/>
                        RETRO HIGH OG <br/>
                        DUNK HIGH
                    </span>
                    <svg width="1440" height="706" viewBox="0 0 1440 706" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M-5.5 705.5H234L280 659.5V173L234 123H-5.5V52.5H451.5L504.5 0.5H1201.5L1254 52.5H1440.5V123H1254V625.5H1473"
                            stroke="url(#paint0_radial_100_840)" strokeOpacity="0.5"/>
                        <defs>
                            <radialGradient id="paint0_radial_100_840" cx="0" cy="0" r="1"
                                            gradientUnits="userSpaceOnUse"
                                            gradientTransform="translate(946 240.5) rotate(119.982) scale(495.275 1038.67)">
                                <stop stopColor="white" stopOpacity="0.74"/>
                                <stop offset="0.541667" stopColor="white"/>
                                <stop offset="1" stopColor="white" stopOpacity="0.34"/>
                            </radialGradient>
                        </defs>
                    </svg>

                </div>
               {/*/.wrapperSvgBg */}
                <Nav/>
                <HeaderSection/>
                <HeaderSlider items={itemsHeaderSlider}/>
                <Flash/>
            </div>
        </header>
);
};

export default Header;
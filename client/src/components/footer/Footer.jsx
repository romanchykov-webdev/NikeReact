import React from 'react';
import s from './Footer.module.scss'
import {Link} from "react-router-dom";
import logo from './img/Logo.png'
import SendEmail from "../../ui/sendEmail/SendEmail";




const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className={s.wrapper}>
                    <div className={s.blockLeft}>
                        <div className={s.textHeader}>
                            Let’s stay in touch
                        </div>
                        {/*<!-- /.textHeader -->*/}
                        <SendEmail/>

                        <div className={s.blockLogo}>
                            <img src={logo} alt="imglogo"/>
                        </div>
                    {/*    <!-- /.blockLogo -->*/}
                    </div>
                    {/*<!-- /.blockLeft -->*/}
                    <div className={s.blockRight}>
                        <div className={s.wrapUlL}>
                            <ul>
                            <span className={s.category}>
                                SHOP
                            </span>
                                {/*<!-- /.category -->*/}
                                <li>
                                    <Link to="#">
                                        Mens
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        Womens
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        New Arrival
                                    </Link>
                                </li>
                            </ul>
                            {/*<!-- ul 1 -->*/}
                            <ul>
                            <span className={s.category}>
                                OUR SERVICES
                            </span>
                                {/*  <!-- /.category -->*/}
                                <li>
                                    <Link to="#">
                                        Customize your products
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        Gift Card
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        Maintain & Repair
                                    </Link>
                                </li>
                            </ul>
                            {/*<!-- ul 2 -->*/}
                            <ul>
                            <span className={s.category}>
                                CONTACT US
                            </span>
                                {/*<!-- /.category -->*/}
                                <li>
                                    <Link to="#">
                                        Find a Store
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        Terms & Conditions
                                    </Link>
                                </li>
                            </ul>
                            {/*<!-- ul 3 -->*/}
                            <ul>
                            <span className={s.category}>
                                OUR ENTERPRISE
                            </span>
                                {/*<!-- /.category -->*/}
                                <li>
                                    <Link to="#">
                                        Who are we?
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        Press and news
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        Our alliances
                                    </Link>
                                </li>
                            </ul>
                        {/*    <!-- ul 4 -->*/}
                        </div>
                        {/*<!-- /.wrapUlL -->*/}
                        <div className={s.wrapUlR}>
                            <ul>
                            <span className={s.category}>
                                NEED HELP ?
                            </span>
                                <li>
                                    <Link to="#">
                                        My Account
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        Shipping
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        Return & Exchanges
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        FAQs
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        Rewards
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        Loyalty program
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        How to choose your product?
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        Sports Trends
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    {/*    <!-- /.wrapUlR -->*/}

                    </div>
                {/*    <!-- /.blockRight -->*/}
                </div>
                {/*<!-- /.wrapper -->*/}
                <div className={s.wrapCopyright}>
                    <div className={s.data}>
                        2022 Nike, Inc. All Rights Reserved
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M7.33335 5.99967H8.66668C8.84349 5.99967 9.01306 6.06991 9.13808 6.19494C9.26311 6.31996 9.33335 6.48953 9.33335 6.66634C9.33335 6.84315 9.40358 7.01272 9.52861 7.13775C9.65363 7.26277 9.8232 7.33301 10 7.33301C10.1768 7.33301 10.3464 7.26277 10.4714 7.13775C10.5964 7.01272 10.6667 6.84315 10.6667 6.66634C10.6667 6.13591 10.456 5.6272 10.0809 5.25213C9.70582 4.87705 9.19711 4.66634 8.66668 4.66634H7.33335C6.80291 4.66634 6.29421 4.87705 5.91913 5.25213C5.54406 5.6272 5.33335 6.13591 5.33335 6.66634V9.33301C5.33335 9.86344 5.54406 10.3721 5.91913 10.7472C6.29421 11.1223 6.80291 11.333 7.33335 11.333H8.66668C9.19711 11.333 9.70582 11.1223 10.0809 10.7472C10.456 10.3721 10.6667 9.86344 10.6667 9.33301C10.6667 9.1562 10.5964 8.98663 10.4714 8.8616C10.3464 8.73658 10.1768 8.66634 10 8.66634C9.8232 8.66634 9.65363 8.73658 9.52861 8.8616C9.40358 8.98663 9.33335 9.1562 9.33335 9.33301C9.33335 9.50982 9.26311 9.67939 9.13808 9.80441C9.01306 9.92944 8.84349 9.99967 8.66668 9.99967H7.33335C7.15654 9.99967 6.98697 9.92944 6.86194 9.80441C6.73692 9.67939 6.66668 9.50982 6.66668 9.33301V6.66634C6.66668 6.48953 6.73692 6.31996 6.86194 6.19494C6.98697 6.06991 7.15654 5.99967 7.33335 5.99967ZM8.00001 1.33301C6.68147 1.33301 5.39254 1.724 4.29621 2.45654C3.19988 3.18909 2.3454 4.23028 1.84082 5.44845C1.33623 6.66663 1.20421 8.00707 1.46144 9.30028C1.71868 10.5935 2.35362 11.7814 3.28597 12.7137C4.21832 13.6461 5.4062 14.281 6.69941 14.5382C7.99262 14.7955 9.33306 14.6635 10.5512 14.1589C11.7694 13.6543 12.8106 12.7998 13.5431 11.7035C14.2757 10.6071 14.6667 9.31822 14.6667 7.99967C14.6667 7.1242 14.4942 6.25729 14.1592 5.44845C13.8242 4.63961 13.3331 3.90469 12.7141 3.28563C12.095 2.66657 11.3601 2.17551 10.5512 1.84048C9.7424 1.50545 8.87549 1.33301 8.00001 1.33301ZM8.00001 13.333C6.94518 13.333 5.91403 13.0202 5.03697 12.4342C4.15991 11.8481 3.47632 11.0152 3.07266 10.0407C2.66899 9.06611 2.56337 7.99376 2.76916 6.95919C2.97495 5.92463 3.4829 4.97432 4.22878 4.22844C4.97466 3.48256 5.92497 2.97461 6.95953 2.76882C7.9941 2.56303 9.06645 2.66865 10.041 3.07232C11.0155 3.47598 11.8485 4.15957 12.4345 5.03663C13.0206 5.91369 13.3333 6.94484 13.3333 7.99967C13.3333 9.41416 12.7714 10.7707 11.7712 11.7709C10.7711 12.7711 9.4145 13.333 8.00001 13.333Z" fill="white"/>
                        </svg>
                    </div>
                    {/*   <!-- /.data -->*/}
                    <div className={s.romanchykov}>
                        <Link to="mailto:romanchykov.serhii@gmail.com">
                            romanchykov.serhii@gmail.com
                        </Link>
                       
                        <Link to={"https://github.com/romanchykov-webdev/NikeReact.git"} target="_blank">Github</Link>
                       
                    </div>
                    
                    <div className={s.social}>
                        <Link to="#">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.92668 6.98699L7.92668 5.82699C7.74899 5.72201 7.54639 5.66663 7.34001 5.66663C7.13363 5.66663 6.93103 5.72201 6.75334 5.82699C6.5743 5.92792 6.42587 6.07539 6.32377 6.25377C6.22167 6.43215 6.16969 6.63482 6.17334 6.84033V9.16033C6.16969 9.36583 6.22167 9.5685 6.32377 9.74688C6.42587 9.92526 6.5743 10.0727 6.75334 10.1737C6.93103 10.2786 7.13363 10.334 7.34001 10.334C7.54639 10.334 7.74899 10.2786 7.92668 10.1737L9.92668 9.01366C10.0977 8.90872 10.2389 8.76169 10.3368 8.58661C10.4348 8.41154 10.4862 8.21428 10.4862 8.01366C10.4862 7.81304 10.4348 7.61578 10.3368 7.4407C10.2389 7.26563 10.0977 7.1186 9.92668 7.01366V6.98699ZM7.49334 8.88033V7.12033L9.01334 8.00033L7.49334 8.88033ZM12.6667 2.66699H3.33334C2.80291 2.66699 2.2942 2.87771 1.91913 3.25278C1.54406 3.62785 1.33334 4.13656 1.33334 4.66699V11.3337C1.33334 11.8641 1.54406 12.3728 1.91913 12.7479C2.2942 13.1229 2.80291 13.3337 3.33334 13.3337H12.6667C13.1971 13.3337 13.7058 13.1229 14.0809 12.7479C14.456 12.3728 14.6667 11.8641 14.6667 11.3337V4.66699C14.6667 4.13656 14.456 3.62785 14.0809 3.25278C13.7058 2.87771 13.1971 2.66699 12.6667 2.66699ZM13.3333 11.3337C13.3333 11.5105 13.2631 11.68 13.1381 11.8051C13.0131 11.9301 12.8435 12.0003 12.6667 12.0003H3.33334C3.15653 12.0003 2.98696 11.9301 2.86194 11.8051C2.73691 11.68 2.66668 11.5105 2.66668 11.3337V4.66699C2.66668 4.49018 2.73691 4.32061 2.86194 4.19559C2.98696 4.07056 3.15653 4.00033 3.33334 4.00033H12.6667C12.8435 4.00033 13.0131 4.07056 13.1381 4.19559C13.2631 4.32061 13.3333 4.49018 13.3333 4.66699V11.3337Z" fill="white"/>
                            </svg>
                        </Link>
                        <Link to="#">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.5533 6.29366C12.4922 6.20319 12.4097 6.12912 12.3132 6.07797C12.2168 6.02682 12.1092 6.00016 12 6.00033H9.99998V4.66699H11.4666C11.6435 4.66699 11.813 4.59675 11.9381 4.47173C12.0631 4.34671 12.1333 4.17714 12.1333 4.00033V1.33366C12.1333 1.15685 12.0631 0.987279 11.9381 0.862254C11.813 0.73723 11.6435 0.666992 11.4666 0.666992H9.33331C8.30781 0.666992 7.32431 1.07437 6.59917 1.79951C5.87403 2.52465 5.46665 3.50816 5.46665 4.53366V6.00033H3.99998C3.82317 6.00033 3.6536 6.07056 3.52858 6.19559C3.40355 6.32061 3.33331 6.49018 3.33331 6.66699V9.33366C3.33331 9.51047 3.40355 9.68004 3.52858 9.80506C3.6536 9.93009 3.82317 10.0003 3.99998 10.0003H5.46665V14.667C5.46665 14.8438 5.53688 15.0134 5.66191 15.1384C5.78693 15.2634 5.9565 15.3337 6.13331 15.3337H9.33331C9.51012 15.3337 9.67969 15.2634 9.80472 15.1384C9.92974 15.0134 9.99998 14.8438 9.99998 14.667V10.0003H10.9333C11.0668 10.0005 11.1973 9.96049 11.3079 9.8856C11.4184 9.81072 11.5039 9.70437 11.5533 9.58033L12.62 6.91366C12.6602 6.81271 12.6752 6.70345 12.6636 6.59538C12.652 6.48732 12.6141 6.38374 12.5533 6.29366ZM10.48 8.66699H9.33331C9.1565 8.66699 8.98693 8.73723 8.86191 8.86226C8.73688 8.98728 8.66665 9.15685 8.66665 9.33366V14.0003H6.79998V9.33366C6.79998 9.15685 6.72974 8.98728 6.60472 8.86226C6.47969 8.73723 6.31012 8.66699 6.13331 8.66699H4.66665V7.33366H6.13331C6.31012 7.33366 6.47969 7.26342 6.60472 7.1384C6.72974 7.01337 6.79998 6.8438 6.79998 6.66699V4.53366C6.80174 3.86232 7.06921 3.21898 7.54392 2.74427C8.01863 2.26955 8.66197 2.00209 9.33331 2.00033H10.8V3.33366H10.2666C10.0409 3.30077 9.81086 3.31457 9.59068 3.37421C9.37051 3.43384 9.16492 3.53803 8.98665 3.68033C8.87846 3.79359 8.79433 3.92759 8.73933 4.07425C8.68434 4.22091 8.65961 4.37719 8.66665 4.53366V6.66699C8.66665 6.8438 8.73688 7.01337 8.86191 7.1384C8.98693 7.26342 9.1565 7.33366 9.33331 7.33366H11.0133L10.48 8.66699Z" fill="white"/>
                            </svg>
                        </Link>
                        <Link to="#">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.3274 2.63315C15.3275 2.51539 15.2964 2.39972 15.2372 2.29791C15.1781 2.1961 15.093 2.11179 14.9906 2.05357C14.8883 1.99534 14.7723 1.96529 14.6545 1.96645C14.5368 1.96762 14.4215 1.99998 14.3203 2.06023C13.9301 2.29248 13.51 2.47035 13.0716 2.58889C12.4456 2.05171 11.6472 1.75776 10.8223 1.76076C9.91734 1.76181 9.04821 2.11449 8.39843 2.74435C7.74865 3.37421 7.36908 4.23194 7.33987 5.13642C5.55585 4.85193 3.93895 3.92077 2.7975 2.52051C2.72872 2.43707 2.64089 2.37139 2.54141 2.32901C2.44192 2.28663 2.33371 2.2688 2.22589 2.27701C2.11813 2.28588 2.01415 2.32087 1.92295 2.37895C1.83175 2.43703 1.75606 2.51645 1.70245 2.61035C1.42746 3.09022 1.26953 3.62818 1.24148 4.18055C1.21342 4.73292 1.31604 5.28411 1.54099 5.78938L1.53969 5.79068C1.43858 5.85295 1.35515 5.94012 1.29736 6.04384C1.23956 6.14757 1.20935 6.26439 1.20961 6.38313C1.20838 6.48108 1.21426 6.579 1.22719 6.6761C1.29528 7.51494 1.66704 8.30014 2.27276 8.88443C2.23167 8.96271 2.20659 9.0484 2.19899 9.13649C2.19139 9.22457 2.20141 9.31329 2.22849 9.39745C2.49256 10.2202 3.05415 10.9148 3.80336 11.3454C3.04219 11.6397 2.22031 11.7423 1.41013 11.6442C1.26017 11.6254 1.10828 11.6581 0.979358 11.7369C0.850437 11.8158 0.752144 11.9361 0.700603 12.0782C0.649062 12.2203 0.647333 12.3756 0.6957 12.5188C0.744067 12.662 0.839658 12.7845 0.966793 12.8662C2.36019 13.7636 3.98258 14.2408 5.63997 14.2406C7.51948 14.2617 9.35328 13.6611 10.8561 12.5322C12.359 11.4033 13.4466 9.80935 13.9498 7.99835C14.1852 7.20944 14.3054 6.39066 14.3066 5.56738C14.3066 5.52376 14.3066 5.47885 14.306 5.43393C14.654 5.05855 14.9237 4.61746 15.0991 4.13652C15.2745 3.65559 15.3521 3.14447 15.3274 2.63315ZM13.123 4.77442C13.0129 4.90465 12.9572 5.07228 12.9674 5.24252C12.9739 5.35252 12.9733 5.46318 12.9733 5.56738C12.9719 6.26308 12.8699 6.95492 12.6705 7.62143C12.2595 9.16235 11.3433 10.5208 10.0686 11.4792C8.79389 12.4375 7.23443 12.9404 5.63997 12.9072C5.06722 12.9074 4.49645 12.8401 3.93945 12.7067C4.64973 12.4778 5.31385 12.1249 5.90104 11.6644C6.00919 11.5792 6.08834 11.4627 6.12763 11.3308C6.16692 11.1989 6.16443 11.058 6.12049 10.9276C6.07655 10.7971 5.99332 10.6835 5.88223 10.6022C5.77113 10.5209 5.6376 10.476 5.49997 10.4736C4.94586 10.465 4.41673 10.2417 4.02406 9.85059C4.12367 9.83171 4.22263 9.80827 4.32094 9.78028C4.46495 9.73929 4.59097 9.65103 4.67871 9.5297C4.76646 9.40838 4.81082 9.26106 4.80465 9.11146C4.79849 8.96186 4.74216 8.81869 4.64473 8.705C4.5473 8.5913 4.41444 8.51371 4.26755 8.4847C3.94591 8.42119 3.64325 8.28435 3.3831 8.08483C3.12294 7.88531 2.9123 7.62848 2.76755 7.33431C2.88804 7.35076 3.00929 7.36097 3.13083 7.36491C3.27522 7.36709 3.41656 7.32329 3.53442 7.23985C3.65227 7.1564 3.74053 7.03763 3.78643 6.90072C3.83042 6.76256 3.82816 6.61383 3.77999 6.47707C3.73182 6.34032 3.64037 6.223 3.51951 6.14291C3.22627 5.94755 2.98607 5.68252 2.82041 5.37154C2.65475 5.06057 2.56881 4.71336 2.57029 4.36101C2.57029 4.31674 2.57159 4.27247 2.57419 4.22885C4.06837 5.62235 6.00641 6.44382 8.04686 6.54851C8.14986 6.55257 8.25243 6.53317 8.34683 6.49178C8.44123 6.45039 8.52499 6.38809 8.59179 6.30958C8.65791 6.23031 8.70472 6.13678 8.72856 6.03635C8.75239 5.93592 8.75258 5.83133 8.72912 5.73081C8.69099 5.57171 8.67155 5.40872 8.67118 5.24512C8.67179 4.67482 8.89861 4.12804 9.30188 3.72477C9.70515 3.3215 10.2519 3.09468 10.8222 3.09408C11.1157 3.09329 11.4061 3.15334 11.6751 3.27044C11.9442 3.38754 12.186 3.55914 12.3854 3.77442C12.4623 3.85714 12.5591 3.91881 12.6665 3.95358C12.774 3.98834 12.8885 3.99503 12.9993 3.97301C13.2732 3.91972 13.5431 3.84794 13.8073 3.75817C13.6271 4.12682 13.3968 4.4688 13.123 4.77442Z" fill="white"/>
                            </svg>
                        </Link>
                        <Link to="#">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.56 3.63967C11.4018 3.63967 11.2471 3.68659 11.1155 3.7745C10.984 3.8624 10.8814 3.98735 10.8209 4.13353C10.7603 4.27971 10.7445 4.44056 10.7754 4.59575C10.8062 4.75093 10.8824 4.89348 10.9943 5.00536C11.1062 5.11724 11.2487 5.19343 11.4039 5.2243C11.5591 5.25517 11.7199 5.23933 11.8661 5.17878C12.0123 5.11823 12.1372 5.01569 12.2252 4.88413C12.3131 4.75257 12.36 4.5979 12.36 4.43967C12.36 4.2275 12.2757 4.02402 12.1257 3.87399C11.9756 3.72396 11.7722 3.63967 11.56 3.63967ZM14.6266 5.25301C14.6137 4.69987 14.5101 4.15261 14.32 3.63301C14.1505 3.18843 13.8866 2.78586 13.5466 2.45301C13.2165 2.11129 12.813 1.84913 12.3666 1.68634C11.8484 1.49045 11.3005 1.38448 10.7466 1.37301C10.04 1.33301 9.81331 1.33301 7.99998 1.33301C6.18665 1.33301 5.95998 1.33301 5.25331 1.37301C4.69941 1.38448 4.15154 1.49045 3.63331 1.68634C3.18776 1.85077 2.7846 2.11271 2.45331 2.45301C2.1116 2.78313 1.84943 3.18663 1.68665 3.63301C1.49075 4.15124 1.38479 4.69911 1.37331 5.25301C1.33331 5.95967 1.33331 6.18634 1.33331 7.99967C1.33331 9.81301 1.33331 10.0397 1.37331 10.7463C1.38479 11.3002 1.49075 11.8481 1.68665 12.3663C1.84943 12.8127 2.1116 13.2162 2.45331 13.5463C2.7846 13.8866 3.18776 14.1486 3.63331 14.313C4.15154 14.5089 4.69941 14.6149 5.25331 14.6263C5.95998 14.6663 6.18665 14.6663 7.99998 14.6663C9.81331 14.6663 10.04 14.6663 10.7466 14.6263C11.3005 14.6149 11.8484 14.5089 12.3666 14.313C12.813 14.1502 13.2165 13.8881 13.5466 13.5463C13.8881 13.2147 14.1522 12.8118 14.32 12.3663C14.5101 11.8467 14.6137 11.2995 14.6266 10.7463C14.6266 10.0397 14.6666 9.81301 14.6666 7.99967C14.6666 6.18634 14.6666 5.95967 14.6266 5.25301ZM13.4266 10.6663C13.4218 11.0895 13.3451 11.5088 13.2 11.9063C13.0935 12.1965 12.9226 12.4586 12.7 12.673C12.4837 12.8933 12.2221 13.064 11.9333 13.173C11.5358 13.3182 11.1165 13.3948 10.6933 13.3997C10.0266 13.433 9.77998 13.4397 8.02665 13.4397C6.27331 13.4397 6.02665 13.4397 5.35998 13.3997C4.92057 13.4079 4.48304 13.3402 4.06665 13.1997C3.7905 13.0851 3.54088 12.9149 3.33331 12.6997C3.11204 12.4855 2.94321 12.2231 2.83998 11.933C2.67722 11.5298 2.58694 11.101 2.57331 10.6663C2.57331 9.99967 2.53331 9.75301 2.53331 7.99967C2.53331 6.24634 2.53331 5.99967 2.57331 5.33301C2.5763 4.90038 2.65528 4.47164 2.80665 4.06634C2.92401 3.78495 3.10416 3.53411 3.33331 3.33301C3.53586 3.10379 3.78617 2.92174 4.06665 2.79967C4.47301 2.65304 4.90131 2.57639 5.33331 2.57301C5.99998 2.57301 6.24665 2.53301 7.99998 2.53301C9.75331 2.53301 9.99998 2.53301 10.6666 2.57301C11.0898 2.57786 11.5091 2.65451 11.9066 2.79967C12.2096 2.91211 12.4815 3.09491 12.7 3.33301C12.9184 3.53779 13.0892 3.78816 13.2 4.06634C13.3481 4.4723 13.4248 4.90086 13.4266 5.33301C13.46 5.99967 13.4666 6.24634 13.4666 7.99967C13.4666 9.75301 13.46 9.99967 13.4266 10.6663ZM7.99998 4.57967C7.32385 4.58099 6.66329 4.78269 6.10175 5.15929C5.54021 5.53588 5.1029 6.07047 4.84507 6.69551C4.58724 7.32055 4.52046 8.00799 4.65318 8.67096C4.78589 9.33394 5.11214 9.9427 5.5907 10.4203C6.06926 10.898 6.67865 11.223 7.34189 11.3544C8.00512 11.4859 8.69242 11.4177 9.31696 11.1587C9.94149 10.8997 10.4752 10.4613 10.8507 9.89903C11.2262 9.33676 11.4266 8.6758 11.4266 7.99967C11.4275 7.54974 11.3394 7.10408 11.1675 6.68831C10.9955 6.27254 10.743 5.89488 10.4246 5.57704C10.1061 5.2592 9.72795 5.00746 9.31184 4.83629C8.89574 4.66513 8.44991 4.57792 7.99998 4.57967ZM7.99998 10.2197C7.5609 10.2197 7.13169 10.0895 6.76661 9.84554C6.40154 9.6016 6.11699 9.25488 5.94897 8.84923C5.78094 8.44358 5.73698 7.99721 5.82264 7.56657C5.9083 7.13594 6.11973 6.74037 6.4302 6.4299C6.74067 6.11942 7.13624 5.90799 7.56688 5.82233C7.99752 5.73667 8.44388 5.78063 8.84954 5.94866C9.25519 6.11669 9.6019 6.40123 9.84584 6.76631C10.0898 7.13139 10.22 7.5606 10.22 7.99967C10.22 8.29121 10.1626 8.57989 10.051 8.84923C9.93943 9.11857 9.7759 9.36331 9.56976 9.56945C9.36361 9.7756 9.11888 9.93912 8.84954 10.0507C8.58019 10.1623 8.29151 10.2197 7.99998 10.2197Z" fill="white"/>
                            </svg>
                        </Link>
                    </div>
                </div>
            {/*    <!-- /.wrapCopyright -->*/}
            </div>
        {/*    <!-- /.container -->*/}
        </footer>
    );
};

export default Footer;
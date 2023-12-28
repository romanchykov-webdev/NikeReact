import React from 'react';
import s from './Block3.module.scss'
import women from './img/women.png'
import kids from './img/kids.png'
import men from './img/women.png'
const Block3 = () => {
    return (
        <div className={s.block3}>
            <div className={s.textHeader}>
                BEST SELLERS
            </div>
            {/*<!-- /.textHeader -->*/}
            <div className={s.tiles}>
                <div className={s.item}>
                    <a href="#">
                        <img src={women} alt="img"/>
                        <span className={s.text}>
                            WOMEN
                        </span>
                    </a>
                </div>
                {/*<!-- /.item 1-->*/}
                <div className={s.item}>
                    <a href="#">
                        <img src={kids} alt="img"/>
                    <span className={s.text}>
                        KIDS
                    </span>
                    </a>
                </div>
                {/*<!-- /.item 2-->*/}
                <div className={s.item}>
                    <a href="#">
                        <img src={men} alt="img"/>
                    <span className={s.text}>
                        MAN
                    </span>
                    </a>
                </div>
            {/*    <!-- /.item 3-->*/}
            </div>
        </div>
    );
};

export default Block3;
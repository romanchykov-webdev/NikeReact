import React from 'react';
import s from './HeaderSection.module.scss'
import SectionImg from "./sectionImg/SectionImg";
import SectionSize from "./sectionSize/SectionSize";
import {useSelector} from "react-redux";

const HeaderSection = () => {
    const itemArray=useSelector(state => state.headerSlice.itemsArray)
    const colorActive=useSelector(state => state.headerSlice.color)

    return (
        <section className={s.wrapperHeaderSection}>
            {
                itemArray.map(item=>{
                    if(item.color===colorActive){
                        return(
                            <>
                                <SectionImg img={item.img}/>
                                <SectionSize size={item.size} />
                            </>
                        )
                    }
                })
            }

        </section>
    );
};

export default HeaderSection;
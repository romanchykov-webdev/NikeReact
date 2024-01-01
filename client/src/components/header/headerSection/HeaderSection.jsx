import React from 'react';
import s from './HeaderSection.module.scss'
import SectionImg from "./sectionImg/SectionImg";
import SectionSize from "./sectionSize/SectionSize";
import {useSelector} from "react-redux";

const HeaderSection = () => {
    const itemArray=useSelector(state => state.headerSlice.itemsArray)
    const colorActive=useSelector(state => state.headerSlice.color)
    const sizeActive=useSelector(state => state.headerSlice.size)

    return (
        <section className={s.wrapperHeaderSection}>
            {
                itemArray.map((item,index)=>{
                    if(item.color===colorActive){
                        return(
                            <div  className={s.wrapperHeaderSection}   key={index+3}>
                                <SectionImg item={item} sizeActive={sizeActive}  />
                                <SectionSize size={item.size} price={item.price}/>
                            </div>
                        )
                    }
                    return null;
                })
            }

        </section>
    );
};

export default HeaderSection;
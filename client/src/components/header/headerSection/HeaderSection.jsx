import React from 'react';
import s from './HeaderSection.module.scss'
import SectionImg from "./sectionImg/SectionImg";
import SectionSize from "./sectionSize/SectionSize";

const HeaderSection = () => {
    return (
        <section className={s.wrapperHeaderSection}>
            <SectionImg/>
            <SectionSize/>
        </section>
    );
};

export default HeaderSection;
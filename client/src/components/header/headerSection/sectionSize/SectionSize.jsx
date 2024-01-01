import React, {useState} from 'react';
import s from './sectionSize.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {changeSizeAction} from "../headerSectionReducerSlice";
import Button from "../../../../ui/button/Button";

const SectionSize = ({price, size}) => {

    const dispatch=useDispatch()

    const imgColor = useSelector(state => state.headerSlice.color)
    // console.log("size"+size)


    const[selectValue,setSelectValue]=useState(size[0])
    // console.log("selectValue"+selectValue)
    dispatch(changeSizeAction(selectValue))

    function handlerSelect(e) {
        setSelectValue(e.target.value)
        dispatch(changeSizeAction(selectValue))
    }

    return (
    <div className={s.wrapperDesc} >
        <div className={s.name}>
            AIR JORDAN 1 <br/>
            RETRO HIGH OG
        </div>

        <div className={s.priceSizeBag} >
            <div className={s.price}>$ <span style={{color: imgColor==='black' ? 'white' : imgColor}}>{price}</span></div>
           {/* <!-- /.price -->*/}

            <div className={s.sizeBag}>
                <div className={s.size}>
                    <span>Size</span>
                    <select className={s.changeSize}

                            onChange={(e)=>handlerSelect(e)}>
                        {
                            size.map((s,index)=>(
                                <option key={index} value={s}>{s}</option>
                            ))
                        }
                    </select>

                </div>




            {/*    <!-- /.bag -->*/}
            </div>
        {/*    <!-- /.sizeBag -->*/}
        </div>

        <Button className={['btnSmall']}>
            <span>More Details</span>
        </Button>
    </div>
    );
};

export default SectionSize;
import React, {useState} from 'react';
import s from './sectionSize.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {changeSizeAction} from "../headerSectionReducerSlice";
import Button from "../../../../ui/button/Button";

const SectionSize = (props) => {

    const dispatch=useDispatch()
    const headerSlice=useSelector(state => state.headerSlice)
    const itemsArray=useSelector(state => state.headerSlice.itemsArray)
    const imgColor = useSelector(state => state.headerSlice.color)
    //
    const [select,setSelect]=useState(props.size)
    // console.log(select)


    function changeSizeHandler(e) {
        // setSelect(e.target.value)
        dispatch(changeSizeAction(e.target.value))

    }



    return (
    <div className={s.wrapperDesc}>
        <div className={s.name}>
            AIR JORDAN 1 <br/>
            RETRO HIGH OG
        </div>

        <div className={s.priceSizeBag}>
            <div className={s.price}>$ <span>{headerSlice.price}</span></div>
           {/* <!-- /.price -->*/}

            <div className={s.sizeBag}>
                <div className={s.size}>
                    <span>Size</span>
                    <select >
                        {
                            select.map(s=>(
                                <option key={s} value={s}>{s}</option>
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
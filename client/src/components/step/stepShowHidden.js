
import {hideStepAction} from "../../reducers/addToBagReducerSlice";


export const dispatchStepsWithTimeout = (dispatch) => {



    setTimeout(() => {
        // dispatch(hideStep());
        dispatch(hideStepAction());
    }, 2000);
};
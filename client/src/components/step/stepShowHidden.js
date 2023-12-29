import {hideStep, showStep} from "./stepReducerSlice";
import {hideStepAction} from "../../reducers/addToBagReducerSlice";


export const dispatchStepsWithTimeout = (dispatch) => {

    // dispatch(showStep());

    setTimeout(() => {
        // dispatch(hideStep());
        dispatch(hideStepAction());
    }, 2000);
};
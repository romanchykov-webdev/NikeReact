import {hideStep, showStep} from "./stepReducerSlice";


export const dispatchStepsWithTimeout = (dispatch) => {

    dispatch(showStep());

    setTimeout(() => {
        dispatch(hideStep());
    }, 2000);
};
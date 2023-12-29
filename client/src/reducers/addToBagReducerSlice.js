import {createSlice} from "@reduxjs/toolkit";

const addToBagReducerSlice = createSlice({
    name: 'addToBag',
    initialState: {
        bag: [],
        isVisibleStep: false,
    },
    reducers: {
        addToBagAction(state, action) {
            const newItem = action.payload.item;
            const {id, size, color} = newItem;

            // Check if the item already exists in the bag
            const itemIndex = state.bag.findIndex(item =>
                item.id === id && item.size === size && item.color === color
            );

            if (itemIndex !== -1) {
                // If the item exists, update it
                const updatedBag = [...state.bag];
                updatedBag[itemIndex] = newItem;
                state.bag = updatedBag
                // return {
                //     ...state,
                //     bag: updatedBag,
                // };
            } else {
                // If the item doesn't exist, add it to the bag
                state.bag=[...state.bag, newItem]
                state.isVisibleStep=true
                // return {
                //     ...state,
                //     bag: [...state.bag, newItem],
                //
                // };

            }

        },
        showStepAction(state) {
            state.isVisibleStep = true;
        },
        hideStepAction(state) {
            state.isVisibleStep = false;
        },
    }
})

export default addToBagReducerSlice.reducer
export const {
    addToBagAction,
    showStepAction,
    hideStepAction

} = addToBagReducerSlice.actions
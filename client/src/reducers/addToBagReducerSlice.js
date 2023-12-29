import {createSlice} from "@reduxjs/toolkit";


// {
//     id: '',
//         size: '',
//     color: '',
//     price: '',
//     title: '',
//     desc: '',
//     img: '',
// }

const addToBagReducerSlice = createSlice({
    name: 'addToBag',
    initialState: {
        bag: [],
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
                // return {
                //     ...state,
                //     bag: [...state.bag, newItem],
                //
                // };

            }

        }
    }
})

export default addToBagReducerSlice.reducer
export const {
    addToBagAction,

} = addToBagReducerSlice.actions
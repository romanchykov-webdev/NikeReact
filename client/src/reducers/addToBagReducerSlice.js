import {createSlice} from "@reduxjs/toolkit";

const addToBagReducerSlice = createSlice({
    name: 'addToBag',
    initialState: {
        bag: [],
        isVisibleBag: false,
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
                state.bag = [...state.bag, newItem]
                state.isVisibleStep = true
                // return {
                //     ...state,
                //     bag: [...state.bag, newItem],
                //
                // };

            }

        },
        isVisibleBagToggle(state) {
            state.isVisibleBag = !state.isVisibleBag
        },
        showStepAction(state) {
            state.isVisibleStep = true;
        },
        hideStepAction(state) {
            state.isVisibleStep = false;
        },
        incrementBagAction(state, action) {
            const {id} = action.payload;
            // debugger
            // return {
            //     ...state,
            //     bag: [...state.bag.map(item => item.id === action.payload.id
            //         ? {...item, quantity: item.quantity + 1}
            //         : {...item}
            //     )]
            // }
            state.bag = state.bag.map(item =>
                item.id === id
                    ? {...item, quantity: item.quantity + 1}
                    : item
            );
        },
        decrementBagAction(state, action) {
            // debugger
            const {id} = action.payload
            // state.bag = state.bag.map(item =>
            //     item.id === id
            //         ? {
            //             ...item, quantity: item.quantity > 1
            //                 ? item.quantity - 1
            //                 : item.quantity = 1
            //         }
            //         : item
            // );
            state.bag = state.bag.map(item =>{
                if(item.id===id){
                    if(item.quantity>1){
                        return {...item, quantity: item.quantity - 1}
                    }
                }
                return item
            })

        },
        removeItemInTheBag(state, action) {
            const id = action.payload
            debugger
            state.bag = state.bag.filter(item => item.id !== id);

        }
    }
})

export default addToBagReducerSlice.reducer
export const {
    addToBagAction,
    isVisibleBagToggle,
    showStepAction,
    hideStepAction,
    incrementBagAction,
    decrementBagAction,
    removeItemInTheBag

} = addToBagReducerSlice.actions
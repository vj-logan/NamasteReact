import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState : {
        items : []
    },
    reducers: {
        addItems : (state, action) => {
            state.items.push(action.payload);
        },
        removeItems : (state) => {
            state.items.pop()
        },
        clearCartItems: (state /* old state */) => {
            state.items.length = 0; /* new copy of old state that is being modified */ //[] here under the hood Immer creates a draft copy of the old state and a new modified state is returned, whick looks like you are directly mutating the state but it's new state that is being returned under the hood.
        }
    }
})

console.log(cartSlice);

export const {addItems, removeItems, clearCartItems} = cartSlice.actions;
export default cartSlice.reducer;

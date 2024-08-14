import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "../utils/cartSlice"

const appStore = configureStore({
    reducer: {
        cartSlice: cartReducer
    }
});

export default appStore;
import ItemList from "./ItemList";
import { useSelector, useDispatch } from "react-redux";
import { clearCartItems } from "../utils/cartSlice";

const Cart  = () => {
    const cartItems = useSelector((store)=> store.cartSlice.items)
    const dispatch = useDispatch();
    const handleClearCart = ()=>{
        dispatch(clearCartItems())
    }
    return (
        <div className="m-4 p-4 text-center">
            <h1 className="font-bold text-2xl">Cart</h1>
            <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={handleClearCart}>Clear Cart</button>
            <div className="w-6/12 m-auto">
            {cartItems.length === 0? <h3>Your Cart is empty, Please add items to your cart</h3> : <ItemList className="" itemCards={cartItems}/>}
            </div>
        </div>
    )
}

export default Cart;
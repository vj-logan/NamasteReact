import { LOGO_URL } from "../utils/constants";
import {useState, useEffect, useContext} from  "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [isLogin, setIsLogin] = useState(false);
    useEffect(()=>{
        //console.log("component rendered, useEffect called");
    }, [])
    const onlineStatus = useOnlineStatus();
    const {loggedInUser, setUserName} = useContext(UserContext)
   // setUserName("kishore");

   //subscribing to the store using selector
   const cartItems = useSelector((store) => store.cartSlice.items )
   //console.log(cartItems)
    return (
    <div className="bg-slate-600 text-gray-300 flex justify-between items-center">
        <div className="w-[150px] p-4 ">
            <img src={LOGO_URL} alt="logo" />
        </div>
        <div className="nav-items">
            <ul className="flex">
                <li className="mx-2" >Online: {onlineStatus? "✅" : "❌"}</li>
                <li className="mx-2"><Link to="/">Home</Link></li>
                <li className="mx-2"><Link to="/about">About Us</Link></li>
                <li className="mx-2"><Link to="/contact">Contact Us</Link></li>
                <li className="mx-2"><Link to="/cart">Cart-[{cartItems.length}]</Link></li>
                <li className="mx-2"><button className="log-btn" onClick = {()=>{setIsLogin(!isLogin)}} >{isLogin? "Logout" : "Login"}</button></li>
                <li className="mx-2">{loggedInUser}</li>
            </ul>
        </div>
    </div>
)
}

export default Header;
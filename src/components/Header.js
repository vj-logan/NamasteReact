import { LOGO_URL } from "../utils/constants";
import {useState, useEffect} from  "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [isLogin, setIsLogin] = useState(false);
    useEffect(()=>{
        console.log("component rendered, useEffect called");
    }, [])
    const onlineStatus = useOnlineStatus();
    return (<div className="header">
        <div className="logo">
            <img src={LOGO_URL} alt="logo" />
        </div>
        <div className="nav-items">
            <ul>
                <li>Online: {onlineStatus? "✅" : "❌"}</li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li>Cart</li>
                <li><button className="log-btn" onClick = {()=>{setIsLogin(!isLogin)}} >{isLogin? "Logout" : "Login"}</button></li>
            </ul>
        </div>
    </div>
)
}

export default Header;
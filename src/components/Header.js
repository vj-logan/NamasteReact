import { LOGO_URL } from "../utils/constants";
import {useState} from  "react";

const Header = () => {
    const [isLogin, setIsLogin] = useState(false);
    return (<div className="header">
        <div className="logo">
            <img src={LOGO_URL} alt="logo" />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                <li><button className="log-btn" onClick = {()=>{setIsLogin(!isLogin)}} >{isLogin? "Logout" : "Login"}</button></li>
            </ul>
        </div>
    </div>
)
}

export default Header;
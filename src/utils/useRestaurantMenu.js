import {useState, useEffect} from "react"
import {RESTAURANT_MENU_API} from "./constants"
const useRestaurantMenu = (resId) => {
    const [resMenu, setResMenu] = useState([]);

    useEffect(()=>{
        fetchData();
    }, []);
    const fetchData = async() => {
        const response = await fetch(RESTAURANT_MENU_API + resId);
        const result  = await response.json();
        setResMenu(result?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    }
    return resMenu;
}

export default useRestaurantMenu;
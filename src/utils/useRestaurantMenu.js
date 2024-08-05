import {useState, useEffect} from "react"
import {RESTAURANT_MENU_API} from "./constants"
const useRestaurantMenu = (resId) => {
    const [resMenu, setResMenu] = useState(null);

    useEffect(()=>{
        fetchData();
    }, []);
    const fetchData = async() => {
        const response = await fetch(RESTAURANT_MENU_API + resId);
        const result  = await response.json();
        setResMenu(result?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
    }
    return resMenu;
}

export default useRestaurantMenu;
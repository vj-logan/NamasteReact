import useRestaurantMenu from "../utils/useRestaurantMenu";
import { MENU_ITEM_IMG_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
const RestaurantMenu = () => {
    const {resId} = useParams();
    const menuData = useRestaurantMenu(resId);
    
    if(menuData=== null) return <Shimmer/>
    return (
        <div>
            <ul>
                {menuData.map((item)=>{
                    return (<li key={item.card.info.id}>
                                <img src={MENU_ITEM_IMG_URL + item.card.info.imageId} />
                                <h2>{item.card.info.name}</h2>
                                <h4>{item?.card?.info?.category}</h4>
                                <h4>{item?.card?.info?.price/100}</h4>
                    </li>)
                })}
            </ul>
            
        </div>
    )
}

export default RestaurantMenu;
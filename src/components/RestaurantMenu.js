import {useState} from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
const RestaurantMenu = () => { 
    const {resId} = useParams();
    const menuData = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(0);
    //console.log(menuData);
    const categorisedData = menuData.filter((category)=> category?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    //console.log(categorisedData);
    if(menuData=== null) return <Shimmer/>
    return (
        <div className="mx-auto w-6/12">
                {categorisedData.map((category, index)=>{
                    return (
                            <RestaurantCategory key={category?.card?.card.title} data={category?.card?.card} showItems={index=== showIndex ? true : false} setShowItems={()=>{
                                setShowIndex(index)
                            }}/>
                    )
                })}
        </div>
    )
}

export default RestaurantMenu;
import { IMG_URL } from "../utils/constants";
import {useContext} from "react"
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
    const {info} = props.restaurantData;
    const {loggedInUser} = useContext(UserContext);
    return (
        <div className="m-4 p-4 w-[320px] rounded-lg bg-slate-300 hover:bg-slate-400">
            <img className="w-[300px] h-[200px] rounded-lg" src={IMG_URL + info.cloudinaryImageId} />
            <h2 className="font-bold my-2">{info.name}</h2>
            <h3>{info.cuisines.join(' ')}</h3>
            <h3>{info.avgRating}</h3>
            <h3>{info.sla.deliveryTime}</h3>
            <h3>{loggedInUser}</h3>
        </div>
    )
}

export default RestaurantCard;
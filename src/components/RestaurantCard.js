import { IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {info} = props.restaurant
    return (
        <div className="res-card">
        <img src={IMG_URL + info.cloudinaryImageId} />
        <h2>{info.name}</h2>
        <h3>{info.cuisines}</h3>
        <h3>{info.avgRating}</h3>
        <h3>{info.sla.deliveryTime}</h3>
    </div>
    )
}

export default RestaurantCard;
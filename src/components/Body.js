import {useState, useEffect, useContext} from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantCard from "./RestaurantCard";
import withLabel from "./PromotedRestaurantCard";
import { SWIGGY_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(null);
    const [fileredRestaurants, setFilteredRestaurants] = useState(null);
    const [searchInput, setSearchInput] = useState("")
    const {loggedInUser, setUserName} = useContext(UserContext)
    const getData = async() => {
        const response = await fetch(SWIGGY_API_URL)
        const result = await response.json();
        const resultData = result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        //console.log(resultData);
        setListOfRestaurants(resultData);
        setFilteredRestaurants(resultData);
    }
// whenever state is updated, react triggers a reconcilation cycle, so it triggers a rerender of the whole component
    //console.log("rendered");
    useEffect(()=> {
        getData();
    },[])

    const onlineStatus = useOnlineStatus();
    if(onlineStatus=== false) {
        return <h1>You are offline</h1>
    }
    if(!listOfRestaurants) {
        return <Shimmer/>;
    }
    const RestaurantCardPromoted = withLabel(RestaurantCard)
    return(
        <div className="body">
            <div className="filter flex m-4 p-4">
                <div className="flex">
                    <input type="text" data-testid="searchInput" className="border border-gray-800" value={searchInput} onChange={(e)=> {
                        setSearchInput(e.target.value)
                        setListOfRestaurants(listOfRestaurants)
                        }}/>
                    <button className="mx-4 px-4 py-2 bg-slate-300 hover:bg-slate-500 hover:text-gray-100" onClick={()=> {
                        const filteredData = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchInput.toLowerCase()));
                        setFilteredRestaurants(filteredData);
                        //console.log("search result:" + filteredData);
                    }}>search</button>
                </div>
                <div>
                    <button className="mx-4 px-4 py-2 bg-green-100 hover:bg-green-200" onClick={()=>{
                        const filteredData = listOfRestaurants.filter((restaurant)=> restaurant.info.avgRating > 4.5)
                        //console.log("filetered Data: " + filteredData)
                        setFilteredRestaurants(filteredData);
                    }}>
                        Top Restaurants
                    </button>
                    <input type="text" className="border border-black" value={loggedInUser} onChange={(e)=> setUserName(e.target.value)}/>
                </div>
            </div>
        <div className="res-container flex flex-wrap">
            {fileredRestaurants?.map(restaurant =>{
                //console.log(restaurant);
                return(<Link key={restaurant.info.id} to={"restaurants/" + restaurant.info.id}>
                   {restaurant?.info?.isNewlyOnboarded? <RestaurantCardPromoted key={restaurant.info.id} restaurantData={restaurant}/> : <RestaurantCard key={restaurant.info.id} restaurantData={restaurant}/>}
                </Link>)})}
        </div>
    </div>
    )
}

export default Body;
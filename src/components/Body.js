import {useState, useEffect} from "react"
import RestaurantCard from "./RestaurantCard";
import { SWIGGY_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(null);
    const [fileredRestaurants, setFilteredRestaurants] = useState(null);
    const [searchInput, setSearchInput] = useState("")
    const getData = async() => {
        const response = await fetch(SWIGGY_API_URL)
        const result = await response.json();
        const resultData = result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log(resultData);
        setListOfRestaurants(resultData);
        setFilteredRestaurants(resultData);
    }
// whenever state is updated, react triggers a reconcilation cycle, so it triggers a rerender of the whole component
    console.log("rendered");
    useEffect(()=> {
        getData();
    },[])
    if(!listOfRestaurants) {
        return <Shimmer/>;
    }
    
    return(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text"className="search-box" value={searchInput} onChange={(e)=> {
                        setSearchInput(e.target.value)
                        setListOfRestaurants(listOfRestaurants)
                        }}/>
                    <button className="search-btn" onClick={()=> {
                        const filteredData = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchInput.toLowerCase()));
                        setFilteredRestaurants(filteredData);
                        console.log("search result:" + filteredData);
                    }}>search</button>
                </div>
                <button className="button" onClick={()=>{
                    const filteredData = listOfRestaurants.filter((restaurant)=> restaurant.info.avgRating > 4)
                    console.log("filetered Data: " + filteredData)
                    setFilteredRestaurants(filteredData);
                }}>
                    Top Restaurants
                </button>
            </div>
        <div className="res-container">
            {fileredRestaurants?.map(restaurant =>(<RestaurantCard key={restaurant.info.id} restaurant={restaurant}/>))}
        </div>
    </div>
    )
}

export default Body;
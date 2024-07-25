import {useState, useEffect} from "react"
import RestaurantCard from "./RestaurantCard";
import { SWIGGY_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
    const [resList, setResList] = useState(null);
    const [searchInput, setsearchInput] = useState("")
    const getData = async() => {
        const response = await fetch(SWIGGY_API_URL)
        const result = await response.json();
        const resultData = result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log(resultData);
        setResList(resultData)
    }
// whenever state is updated, react triggers a reconcilation cycle, so it triggers a rerender of the whole component
    console.log("rendered");
    useEffect(()=> {
        getData();
    },[])
    if(!resList) {
        return <Shimmer/>;
    }
    
    return(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text"className="search-box" value={searchInput} onChange={(e)=> {
                        setsearchInput(e.target.value)}}/>
                    <button className="search-btn" onClick={()=> {
                        console.log(searchInput);
                    }}>search</button>
                </div>
                <button className="button" onClick={()=>{
                    const filteredData = resList.filter((restaurant)=> restaurant.info.avgRating > 4)
                    console.log("filetered Data: " + filteredData)
                    setResList(filteredData);
                }}>
                    Top Restaurants
                </button>
            </div>
        <div className="res-container">
            {resList?.map(restaurant =>(<RestaurantCard key={restaurant.info.id} restaurant={restaurant}/>))}
        </div>
    </div>
    )
}

export default Body;
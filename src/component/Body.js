import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerUi from "./ShimmerUi";




const Body = ()=>{

  

    const [listOfRestaurants,setListOfRestaurants] = useState([]);

    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setsearchText] = useState("");
    console.log("Body rendered");

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () =>{
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")

        const json= await data.json();
        // console.log(json);
        //OPTIONAL CHAINING
       setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards); 
       setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);

       setListOfRestaurants(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      setFilteredRestaurant(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
    
    };
    
    

    if(listOfRestaurants?.length===0)
    {
        return <ShimmerUi/>;
    }

    return (
        <div className="body">
            <div className="filter">
                <div className="search-box">
                    <input type="text" value={searchText} 
                    onChange={(e)=>{
                        setsearchText(e.target.value);
                    }}/>
                    <button className="search-box" onClick={()=>
                    //Filter the restaurants and update the ui
                    {
                        const data = listOfRestaurants.filter((res)=>
                        res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                       
                       setFilteredRestaurant(data);
                
                       
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={()=>
                    { 
                        const filteredData = listOfRestaurants.filter((res)=>res.info.avgRating>4);
                       setListOfRestaurants(filteredData);
                    }}
                    >Top Rated Restaurant</button>

            </div>
            
            <div className="res-container">
        {filteredRestaurant?.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
    );
 };

 export default Body;
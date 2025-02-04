import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import tmdbApi from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";

// Component to fetch and display a list of movie/TV show casts
const CastList = props => 
{
    // Extract category from URL parameters
    const {category} = useParams();
    
    // State to store the list of cast members
    const [casts, setCasts] = useState([]);

    // useEffect hook to fetch cast data when component mounts or when category/ID changes
    useEffect(() => 
    {
        const getCredits = async () => 
        {
            // Fetch cast data from API based on category and item ID
            const res = await tmdbApi.credits(category, props.id);
            
            // Store only the first 5 cast members in state
            setCasts(res.cast.slice(0, 5));
        }
        
        getCredits(); // Call the function
    }, [category, props.id]); // Dependencies ensure effect runs on changes

    return (
        <div className="casts">
            {
                // Loop through the list of cast members and display their images and names
                casts.map((item, i) => (
                    <div key={i} className="casts__item">
                        <div className="casts__item__img" style={{backgroundImage : `url(${apiConfig.w500Image(item.profile_path)})`}}></div>
                        <p className="casts__item__name">{item.name}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default CastList;

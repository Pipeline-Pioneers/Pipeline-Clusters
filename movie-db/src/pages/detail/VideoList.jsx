import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router';
import tmdbApi from '../../api/tmdbApi';

// Component to display a list of videos related to a specific category and ID
const VideoList = props => 
{
    // Extracts the category parameter from the URL
    const {category} = useParams();
    
    // State to store the list of videos
    const [videos, setVideos] = useState([]);

    // useEffect runs when the component mounts or when category or props.id changes
    useEffect(() => 
    {
        // Async function to fetch videos from the TMDB API
        const getVideos = async () => 
        {
            // Fetch video data based on category and ID passed via props
            const res = await tmdbApi.getVideos(category, props.id);
            
            // Update state with the first 5 videos from the response
            setVideos(res.results.slice(0, 5));
        }
        
        // Invoke the async function
        getVideos();
    }, [category, props.id]); // Dependencies: Runs when category or props.id changes

    return (
        <>
            {/* Map through the videos array and render a Video component for each item */}
            {
                videos.map((item, i) => (
                    <Video key={i} item={item}/>
                ))
            }
        </>
    );
}

// Component to display a single video
const Video = props => 
{
    // Extract video item from props
    const item = props.item;
    
    // useRef to reference the iframe element
    const iframeRef = useRef(null);

    // useEffect runs when the component mounts
    useEffect(() => 
    {
        // Dynamically set the height of the iframe based on its width (16:9 aspect ratio)
        const height = iframeRef.current.offsetWidth * 9 / 16 + 'px';
        iframeRef.current.setAttribute('height', height);
    }, []); // Empty dependency array means this runs only once after the initial render

    return (
        <div className="video">
            {/* Display the video title */}
            <div className="video__title">
                <h2>{item.name}</h2>
            </div>
            
            {/* Embedded YouTube video iframe */}
            <iframe 
                src={`https://www.youtube.com/embed/${item.key}`}
                ref={iframeRef} // Attach the ref to the iframe
                width="100%"
                title="video"
            ></iframe>
        </div>
    )
}

// Export the VideoList component for use in other parts of the application
export default VideoList;

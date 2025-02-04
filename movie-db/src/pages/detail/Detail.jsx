import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import './detail.scss';
import CastList from './CastList';
import VideoList from './VideoList';
import MovieList from '../../components/movie-list/MovieList';

// Component to display detailed information about a movie or TV show
const Detail = () => 
{
    // Extracts category and id from the URL parameters
    const { category, id } = useParams();

    // State to store the movie or TV show details
    const [item, setItem] = useState(null);

    useEffect(() => 
    {
        // Function to fetch movie/TV show details from the API
        const getDetail = async () => 
        {
            const response = await tmdbApi.detail(category, id, {params:{}});
            setItem(response); // Updates the state with the fetched data
            window.scrollTo(0,0); // Scrolls to the top of the page when details are loaded
        }
        getDetail();
    }, [category, id]); // Dependency array ensures effect runs when category or id changes

    return (
        <>
            {
                item && (
                    <>
                        {/* Banner section with background image */}
                        <div className="banner" style={{backgroundImage: `url(${apiConfig.originalImage(item.backdrop_path || item.poster_path)})`}}></div>
                        
                        {/* Movie content section */}
                        <div className="mb-3 movie-content container">
                            <div className="movie-content__poster">
                                <div className="movie-content__poster__img" style={{backgroundImage: `url(${apiConfig.originalImage(item.poster_path || item.background_path)})`}}></div>
                            </div>
                            <div className="movie-content__info">
                                {/* Movie title */}
                                <h1 className="title">
                                    {item.title}
                                </h1>
                                
                                {/* Genre list */}
                                <div className="genres">
                                    {
                                        item.genres && item.genres.slice(0, 5).map((genre, i) => (
                                            <span key={i} className="genres__item">{genre.name}</span>
                                        ))
                                    }
                                </div>
                                
                                {/* Movie overview/description */}
                                <p className="overview">{item.overview}</p>
                                
                                {/* Cast section */}
                                <div className="cast">
                                    <div className="section__header">
                                        <h2>Casts</h2>
                                    </div>
                                    <CastList id={item.id}/>
                                </div>
                            </div>
                        </div>

                        {/* Additional sections for videos and similar movies */}
                        <div className="container">
                            <div className="section mb-3">
                                <VideoList id={item.id} />
                            </div>
                            <div className="section mb-3">
                                <div className="section__header mb-2">
                                    <h2>Similar</h2>
                                </div>
                                <MovieList category={category} type="similar" id={item.id} />
                            </div>
                        </div>
                    </>
                )
            }
        </>
    );
}

export default Detail;

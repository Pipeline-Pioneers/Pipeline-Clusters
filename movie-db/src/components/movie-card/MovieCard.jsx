import React from 'react';
import './movie-card.scss';
import Button from '../button/Button';
import apiConfig from '../../api/apiConfig';
import { category } from '../../api/tmdbApi';

const MovieCard = props =>
{
    const item = props.item; // Movie item data
    const link = '/' + category[props.category] + '/' + item.id; // Link to movie details page
    const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path); // Background image URL

    return (
        // Render a link to the movie details page
        <a href={link}>
            <div className="movie-card" style={{ backgroundImage: `url(${bg})` }}>
                <Button>
                    <i className="bx bx-play"></i>
                </Button>
            </div>
            <h3>{item.title || item.name}</h3> {/* Movie title or name */}
        </a>
    );
}

export default MovieCard;
import React from 'react';
import './movie-card.scss';
import Button from '../button/Button';
import apiConfig from '../../api/apiConfig';
import { category } from '../../api/tmdbApi';
 
const MovieCard = props =>
{
    const item = props.item;
    const link = '/' + category[props.category] + '/' + item.id;
    const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);
 
    return (
     
        <a href={link}>
            <div className="movie-card" style={{ backgroundImage: `url(${bg})` }}>
                <Button>
                    <i className="bx bx-play"></i>
                </Button>
            </div>
            <h3>{item.title || item.name}</h3>
        </a>
    );
}
 
export default MovieCard;
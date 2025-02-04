import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { category } from '../../api/tmdbApi';
import './movie-list.scss';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import MovieCard from '../movie-card/MovieCard';

const MovieList = props => 
{
    const [items, setItems] = useState([]); // State to store movie items

    useEffect(() =>
    {
        const getList = async () =>
        {
            let response = null;
            const params = {};

            if (props.type !== 'similar')
            {
                switch (props.category)
                {
                    case category.movie:
                        response = await tmdbApi.getMoviesList(props.type, { params }); // Fetch movie list
                        break;
                    default:
                        response = await tmdbApi.getTvList(props.type, { params }); // Fetch TV list
                }
            }
            else
            {
                response = await tmdbApi.similar(props.category, props.id); // Fetch similar items
            }
            setItems(response.results); // Set movie items
        }
        getList(); // Fetch list on component mount or props change
    }, [props.category, props.type, props.id]);

    return (
        <div className="movie-list">
            <Swiper 
                grabCursor={true}
                spaceBetween={10}
                slidesPerView={'auto'}
            >
                {items.map((item, i) => (
                    <SwiperSlide key={i}>
                        <MovieCard item={item} category={props.category} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

MovieList.propTypes = 
{
    category: PropTypes.string.isRequired, // category is a required string prop
    type: PropTypes.string.isRequired, // type is a required string prop
    id: PropTypes.number // id is an optional number prop
}

export default MovieList;

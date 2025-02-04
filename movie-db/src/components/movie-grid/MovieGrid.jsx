import React, { useState, useEffect, useCallback } from 'react';
import './movie-grid.scss';
import MovieCard from '../movie-card/MovieCard';
import { useParams, useHistory } from 'react-router-dom';
import tmdbApi, { category, movieType } from '../../api/tmdbApi';
import { OutlineButton } from '../button/Button';
import Input from '../input/Input';
import Button from '../button/Button';

const MovieGrid = props => {
    const [items, setItems] = useState([]); // State to store movie items
    const [page, setPage] = useState(1); // State to store current page
    const [totalPage, setTotalPage] = useState(0); // State to store total pages
    const { keyword } = useParams(); // Get keyword from URL parameters

    useEffect(() => {
        const getList = async () => {
            let response = null;

            if (keyword === undefined) {
                const params = {};
                response = await tmdbApi.getMoviesList(movieType.upcoming, { params }); // Fetch upcoming movies
            } else {
                const params = {
                    query: keyword
                };
                response = await tmdbApi.search(category.movie, { params }); // Search movies by keyword
            }
            setItems(response.results); // Set movie items
            setTotalPage(response.total_pages); // Set total pages
        }
        getList(); // Fetch movie list on component mount or keyword change
    }, [keyword]);

    const loadMore = async () => {
        let response = null;

        if (keyword === undefined) {
            const params = {
                page: page + 1
            };
            response = await tmdbApi.getMoviesList(movieType.upcoming, { params }); // Fetch more upcoming movies
        } else {
            const params = {
                page: page + 1,
                query: keyword
            };
            response = await tmdbApi.search(category.movie, { params }); // Fetch more search results
        }
        setItems([...items, ...response.results]); // Append new items to existing items
        setPage(page + 1); // Increment page number
    }

    return (
        <div className="movie-grid">
            {/* Render movie cards */}
            {items.map((item, i) => (
                <MovieCard key={i} item={item} category={props.category} />
            ))}
            {/* Load more button */}
            {page < totalPage ? (
                <div className="movie-grid__loadmore">
                    <OutlineButton className="small" onClick={loadMore}>Load more</OutlineButton>
                </div>
            ) : null}
        </div>
    );
}

export const MovieSearch = props => {
    const [keyword, setKeyword] = useState(props.keyword ? props.keyword : '');
    const history = useHistory();
    

    const goToSearch = useCallback(() => {
        if (keyword.trim().length > 0) {
            window.location.href = `/${category[props.category]}/search/${keyword}`;
        }
    }, [keyword, props.category]);

    useEffect(() => {
        const enterEvent = (e) => {
            e.preventDefault();
            if (e.keyCode === 13) {
                goToSearch();
            }
        }
        document.addEventListener('keyup', enterEvent);

        return () => {
            document.removeEventListener('keyup', enterEvent);
        };
    }, [keyword, goToSearch]);

    return (
        <div className="movie-search">
            <Input
                type="text"
                placeholder="Enter keyword"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />
            <Button className="small" onClick={goToSearch}>Search</Button>
        </div>
    )
}

export default MovieGrid;

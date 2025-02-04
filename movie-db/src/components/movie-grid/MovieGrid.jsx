import React, { useState, useEffect, useCallback } from 'react';
import './movie-grid.scss';
import MovieCard from '../movie-card/MovieCard';
import { useParams, useHistory } from 'react-router-dom';
import tmdbApi, { category, movieType } from '../../api/tmdbApi';
import { OutlineButton } from '../button/Button';
import Input from '../input/Input';
import Button from '../button/Button';

const MovieGrid = props => {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const { keyword } = useParams();
    

    useEffect(() => {
        const getList = async () => {
            let response = null;

            if (keyword === undefined) {
                const params = {};
                response = await tmdbApi.getMoviesList(movieType.upcoming, { params });
            } else {
                const params = {
                    query: keyword
                };
                response = await tmdbApi.search(category.movie, { params });
            }
            setItems(response.results);
            setTotalPage(response.total_pages);
        }
        getList();
    }, [keyword]);

    const loadMore = async () => {
        let response = null;

        if (keyword === undefined) {
            const params = {
                page: page + 1
            };
            response = await tmdbApi.getMoviesList(movieType.upcoming, { params });
        } else {
            const params = {
                page: page + 1,
                query: keyword
            };
            response = await tmdbApi.search(category.movie, { params });
        }
        setItems([...items, ...response.results]);
        setPage(page + 1);
    }

    return (
        <>
            <div className="section mb-3">
                <MovieSearch keyword={keyword} />
            </div>
            <div className="movie-grid">
                {items.map((item, i) => <MovieCard category={category.movie} item={item} key={i} />)}
            </div>
            {page < totalPage ? (
                <div className="movie-grid__loadmore">
                    <OutlineButton className="small" onClick={loadMore}>Load More</OutlineButton>
                </div>
            ) : null}
        </>
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

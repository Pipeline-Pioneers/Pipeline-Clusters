import React from 'react';
import HeroSlide from '../components/hero-slide/HeroSlide';
import { Link } from 'react-router-dom';
import { OutlineButton } from '../components/button/Button';
import MovieList from '../components/movie-list/MovieList';
import { category, movieType } from '../api/tmdbApi';
import MovieSearch from '../components/movie-grid/MovieGrid'; // Import MovieSearch

const Home = () => 
{
    return (
        <>
            <HeroSlide />
            <div className="container">
                <div className="section mb-3">
                    <MovieSearch /> {/* Add the search bar here */}
                </div>
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Trending Movies</h2>
                        <Link to="/movie">
                            <OutlineButton className="small">View More</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.popular} />
                </div>

                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Top Rated Movies</h2>
                        <Link to="/movie">
                            <OutlineButton className="small">View More</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.top_rated} />
                </div>
            </div>
        </>
    );
}

export default Home;
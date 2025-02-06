import React from 'react';
import { useParams } from 'react-router';
import { category as cate } from '../api/tmdbApi';
import MovieGrid from '../components/movie-grid/MovieGrid';
import PageHeader from '../components/page-header/PageHeader';

const Catalog = () => {
    // Get the category parameter from the URL
    const { category } = useParams();

    return (
        <>
            {/* Page header section */}
            <PageHeader>
            {category === cate.movie ? 'Movies' : 'TV Series'}
            </PageHeader>
            <div className="container">
                {/* Section containing the movie grid */}
                <div className="section mb-3">
                    {/* MovieGrid component to display movies based on the category */}
                    <MovieGrid category={category} />
                </div>
            </div>
        </>
    );
}

export default Catalog;

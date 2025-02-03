import React from 'react';
import { useParams } from 'react-router';
import { category as cate } from '../api/tmdbApi';
import MovieGrid from '../components/movie-grid/MovieGrid';
import PageHeader from '../components/page-header/PageHeader';

const Catalog = () => {
    const { category } = useParams();

    return (
        <>
            <PageHeader>
                Movies
            </PageHeader>
          
        </>
    );
}

export default Catalog;

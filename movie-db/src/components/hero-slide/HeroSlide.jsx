/*import React, { useState, useEffect, useRef } from 'react';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useHistory } from 'react-router-dom';
import tmdbApi, { category, movieType } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import './hero-slide.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import Button, { OutlineButton } from '../button/Button';
import Modal, { ModalContent } from '../modal/Modal';

const HeroSlide = () => {
    SwiperCore.use([Navigation, Pagination]);

    const [movieItems, setMovieItems] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            const params = { page: 1 };
            try {
                const response = await tmdbApi.getMoviesList(movieType.popular, { params });
                setMovieItems(response.results.slice(1, 4));
            } catch (error) {
                console.log('error');
            }
        };
        getMovies();
    }, []);

    return (
        <div className='hero-slide'>
            <Swiper
                modules={[Navigation, Pagination]}
                grabCursor={true}
                spaceBetween={0}
                slidesPerView={1}
            >
                {movieItems.map((item, i) => (
                    <SwiperSlide key={i}>
                        {({ isActive }) => (
                            <HeroSlideItem item={item} className={`${isActive ? 'active' : ''}`} />
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
            {movieItems.map((item, i) => <TrailerModal key={i} item={item} />)}
        </div>
    );
};

const HeroSlideItem = (props) => {
    const history = useHistory();
    const item = props.item;
    const background = apiConfig.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path);

    const [trailerKey, setTrailerKey] = useState('');
    const [restricted, setRestricted] = useState(false);

    useEffect(() => {
        const fetchTrailerKey = async () => {
            const videos = await tmdbApi.getVideos(category.movie, item.id);
            if (videos.results.length > 0) {
                setTrailerKey(videos.results[0].key);
            } else {
                setRestricted(true);
            }
        };
        fetchTrailerKey();
    }, [item.id]);

    const setModalActive = async () => {
        const modal = document.querySelector(`#modal_${item.id}`);
        const videos = await tmdbApi.getVideos(category.movie, item.id);

        if (videos.results.length > 0) {
            const videoSrc = 'https://www.youtube.com/embed/' + videos.results[0].key;
            modal.querySelector('.modal__content > iframe').setAttribute('src', videoSrc);
        } else {
            modal.querySelector('.modal__content').innerHTML = 'No trailer';
        }

        modal.classList.toggle('active');
    };

    return (
        <div
            className={`hero-slide__item ${props.className}`}
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="hero-slide__item__content container">
                <div className="hero-slide__item__content__poster">
                    {restricted ? (
                        <div className="restriction-message">Video is restricted</div>
                    ) : (
                        <iframe
                            src={`https://www.youtube.com/embed/${trailerKey}`}
                            title="video"
                        ></iframe>
                    )}
                </div>
                <div className="hero-slide__item__content__info">
                    <h2 className="title">{item.title}</h2>
                </div>
            </div>
        </div>
    );
};

const TrailerModal = (props) => {
    const item = props.item;
    const iframeRef = useRef(null);
    const onClose = () => iframeRef.current.setAttribute('src', '');

    return (
        <Modal active={false} id={`modal_${item.id}`}>
            <ModalContent onClose={onClose}>
                <iframe ref={iframeRef} width="100%" height="500px" title="trailer"></iframe>
            </ModalContent>
        </Modal>
    );
};

export default HeroSlide;*/

import React, { useState, useEffect, useRef } from 'react';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useHistory } from 'react-router-dom';
import tmdbApi, { category, movieType } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import './hero-slide.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import Button, { OutlineButton } from '../button/Button';
import Modal, { ModalContent } from '../modal/Modal';
 
const HeroSlide = () => {
    SwiperCore.use([Navigation, Pagination]);
 
    const [movieItems, setMovieItems] = useState([]);
 
    useEffect(() => {
        const getMovies = async () => {
            const params = { page: 1 };
            try {
                const response = await tmdbApi.getMoviesList(movieType.popular, { params });
                setMovieItems(response.results.slice(1, 4));
            } catch (error) {
                console.log('error');
            }
        };
        getMovies();
    }, []);
 
    return (
<div className='hero-slide'>
<Swiper
                modules={[Navigation, Pagination]}
                grabCursor={true}
                spaceBetween={0}
                slidesPerView={1}
                navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                pagination={{ clickable: true }}
>
                {movieItems.map((item, i) => (
<SwiperSlide key={i}>
                        {({ isActive }) => (
<HeroSlideItem item={item} className={`${isActive ? 'active' : ''}`} />
                        )}
</SwiperSlide>
                ))}
</Swiper>
            {movieItems.map((item, i) => <TrailerModal key={i} item={item} />)}
<div className="swiper-button-next"></div>
<div className="swiper-button-prev"></div>
</div>
    );
};
 
const HeroSlideItem = (props) => {
    const history = useHistory();
    const item = props.item;
    const background = apiConfig.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path);
 
    const [trailerKey, setTrailerKey] = useState('');
 
    useEffect(() => {
        const fetchTrailerKey = async () => {
            const videos = await tmdbApi.getVideos(category.movie, item.id);
            if (videos.results.length > 0) {
                setTrailerKey(videos.results[0].key);
            }
        };
        fetchTrailerKey();
    }, [item.id]);
 
    const setModalActive = async () => {
        const modal = document.querySelector(`#modal_${item.id}`);
        const videos = await tmdbApi.getVideos(category.movie, item.id);
 
        if (videos.results.length > 0) {
            const videoSrc = 'https://www.youtube.com/embed/' + videos.results[0].key;
            modal.querySelector('.modal__content > iframe').setAttribute('src', videoSrc);
        } else {
            modal.querySelector('.modal__content').innerHTML = 'No trailer';
        }
 
        modal.classList.toggle('active');
    };
 
    return (
<div
            className={`hero-slide__item ${props.className}`}
            style={{ backgroundImage: `url(${background})` }}
>
<div className="hero-slide__item__content container">
<div className="hero-slide__item__content__poster">
<img src={apiConfig.w500Image(item.poster_path)} alt={item.title} />
</div>
<div className="hero-slide__item__content__info">
<h2 className="title">{item.title}</h2>
<div className="overview">{item.overview}</div>
<div className="btns">
<OutlineButton onClick={setModalActive}>Watch trailer</OutlineButton>
</div>
</div>
</div>
</div>
    );
};
 
const TrailerModal = (props) => {
    const item = props.item;
    const iframeRef = useRef(null);
    const onClose = () => iframeRef.current.setAttribute('src', '');
 
    return (
<Modal active={false} id={`modal_${item.id}`}>
<ModalContent onClose={onClose}>
<iframe ref={iframeRef} width="100%" height="500px" title="trailer"></iframe>
</ModalContent>
</Modal>
    );
};
 
export default HeroSlide;

import React from 'react';
import Slider from 'react-slick';
import './Banner.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
    };

    return (
        <div className="banner-container">
            <Slider {...settings}>
                <div className="slide-item">
                    <div className="banner-slide">
                        <img src="https://via.placeholder.com/1920x600" alt="슬라이드 이미지 1" className="banner-image" />
                        <div className="banner-text">
                            <h2>1번</h2>
                            <p>첫 번째 배너</p>
                        </div>
                    </div>
                </div>
                <div className="slide-item">
                    <div className="banner-slide">
                        <img src="https://via.placeholder.com/1920x600/ffcccc" alt="슬라이드 이미지 2" className="banner-image" />
                        <div className="banner-text">
                            <h2>2번</h2>
                            <p>두 번째 배너</p>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default Banner;

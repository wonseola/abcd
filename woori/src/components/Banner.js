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

  const slides = [
    {
      image: 'https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/crAU/image/IpXvU-urXCVVkeIxnegqk0RLM8Q.jpg',
      title: '1번',
      description: '첫 번째 배너',
    },
    {
      image: 'https://previews.123rf.com/images/olegdudko/olegdudko1507/olegdudko150713615/42645903-%EA%B3%B5%EB%B6%80%ED%95%98%EB%8A%94-%ED%95%99%EC%83%9D-%EC%9D%B8%EA%B0%84.jpg',
      title: '2번',
      description: '두 번째 배너',
    },
  ];

  return (
    <div className="banner-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div className="slide-item" key={index}>
            <div className="banner-slide">
              {slide.image ? (
                <img src={slide.image} alt={`슬라이드 이미지 ${index + 1}`} className="banner-image" />
              ) : (
                <div className="placeholder-image">이미지 없음</div>
              )}
              <div className="banner-text">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;

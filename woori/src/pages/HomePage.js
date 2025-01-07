import React from 'react';
import Slider from 'react-slick';
import ProductCard from '../components/ProductCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HomePage.css';

const HomePage = () => {
  const products = [
    { id: 1, name: '11111', date: '2025.02.03', image: 'https://via.placeholder.com/300x200?text=Laptop' },
    { id: 2, name: '22222', date: '2025.02.09', image: 'https://via.placeholder.com/300x200?text=Smartphone' },
    { id: 3, name: '33333', date: '2025.02.15', image: 'https://via.placeholder.com/300x200?text=Headphones' },
    { id: 4, name: '44444', date: '2025.03.01', image: 'https://via.placeholder.com/300x200?text=Watch' },
    { id: 5, name: '55555', date: '2025.03.05', image: 'https://via.placeholder.com/300x200?text=Tablet' },
    { id: 6, name: '66666', date: '2025.03.10', image: 'https://via.placeholder.com/300x200?text=TV' },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="homepage-container">
      {/* 배너 섹션 */}
      <div className="banner-container">
        <div className="banner-overlay">
          <h1 className="banner-title">배너 배너 </h1>
          <p className="banner-subtitle">아니면 이미지 ~~ </p>
        </div>
        <img
          src="https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/1huN/image/5tx_kOBrDw5vx6CIIV2Hf6ay0uw.jpg"
          alt="Welcome Banner"
          className="banner-image"
        />
      </div>

      {/* 추천 제품 슬라이더 */}
      <div className="slider-section">
        <h2 className="section-title">추천</h2>
        <Slider {...sliderSettings}>
          {products.map((product) => (
            <div key={product.id} className="slide-item">
              <div className="product-card-wrapper">
                <ProductCard product={product} />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* 마감 임박 슬라이더 */}
      <div className="slider-section">
        <h2 className="section-title">마감 임박</h2>
        <Slider {...sliderSettings}>
          {products.map((product) => (
            <div key={product.id} className="slide-item">
              <div className="product-card-wrapper">
                <ProductCard product={product} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomePage;

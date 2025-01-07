import React from 'react';
import Slider from 'react-slick'; // 슬라이더 컴포넌트
import ProductCard from '../components/ProductCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; // Slick 기본 스타일 적용

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
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true, // 슬라이드 중앙 정렬 모드
  };

  return (
    <div className="container-fluid mt-4">
      <div className="banner-container" style={{ margin: '0', padding: '0' }}>
        <div style={{ width: '100vw', margin: '0', padding: '0' }}>
          <img
            src="https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/1huN/image/5tx_kOBrDw5vx6CIIV2Hf6ay0uw.jpg"
            alt="Welcome Banner"
            className="img-fluid"
            style={{ width: '100vw', height: '400px', objectFit: 'cover', display: 'block', margin: '0', padding: '0' }}
          />
        </div>
      </div>

      <div>
        <h2 className="text-center mb-4">추천</h2>
        <Slider {...sliderSettings}>
          {products.map((product) => (
            <div key={product.id} className="slide-item">
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <ProductCard product={product} />
              </div>
            </div>
          ))}
        </Slider>

        <br />
        <br />
        <h2 className="text-center mb-4">마감 임박</h2>
        <Slider {...sliderSettings}>
          {products.map((product) => (
            <div key={product.id} className="slide-item">
              <div style={{ display: 'flex', justifyContent: 'center' }}>
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

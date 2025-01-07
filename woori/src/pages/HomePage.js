import React from 'react';
import Slider from 'react-slick'; // 슬라이더 컴포넌트
import ProductCard from '../components/ProductCard';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  const products = [
    { id: 1, name: '11111', date: '2025.02.03', image: 'https://via.placeholder.com/300x200?text=Laptop' },
    { id: 2, name: '22222', date: '2025.02.09', image: 'https://via.placeholder.com/300x200?text=Smartphone' },
    { id: 3, name: '33333', date: '2025.02.15', image: 'https://via.placeholder.com/300x200?text=Headphones' },
    { id: 4, name: '44444', date: '2025.03.01', image: 'https://via.placeholder.com/300x200?text=Watch' },
    { id: 5, name: '55555', date: '2025.03.05', image: 'https://via.placeholder.com/300x200?text=Tablet' },
    { id: 6, name: '66666', date: '2025.03.10', image: 'https://via.placeholder.com/300x200?text=TV' },
  ];

  // 슬라이더 설정
  const sliderSettings = {
    dots: true, // 하단 점 표시
    infinite: true, // 무한 반복
    speed: 500, // 슬라이드 전환 속도
    slidesToShow: 5, // 한 번에 보여줄 카드 개수
    slidesToScroll: 1, // 한 번에 스크롤되는 카드 개수
    arrows: true, // 화살표 버튼 표시
    autoplay: true, // 자동 슬라이드
    autoplaySpeed: 2000, // 자동 슬라이드 속도 (밀리초)
  };

  return (
    <div className="container mt-4">
    <div className="banner-container mb-4">
  <div className="w-100">
    <img
      src="https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/1huN/image/5tx_kOBrDw5vx6CIIV2Hf6ay0uw.jpg"
      alt="Welcome Banner"
      className="img-fluid"
      style={{ width: "100vw", height: "400px", objectFit: "cover" }}
    />
  </div>
</div>



      <h2 className="text-center mb-4">추천</h2>
      <Slider {...sliderSettings}>
        {products.map((product) => (
          <div key={product.id} style={{ padding: '0 10px' }}>
            <ProductCard product={product} />
          </div>
        ))}
      </Slider>
      <br></br>
      <br></br>
      <h2 className="text-center mb-4">마감 임박</h2>
      <Slider {...sliderSettings}>
        {products.map((product) => (
          <div key={product.id} style={{ padding: '0 10px' }}>
            <ProductCard product={product} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomePage;

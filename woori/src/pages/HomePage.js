import React from 'react';
import './HomePage.css';
import Search from '../components/Search';
import Banner from '../components/Banner';
import CardItem from '../components/CardItem';

const HomePage = () => {
  // 카드 데이터 (DB 연동 시 API 응답 데이터를 이곳에 매핑)
  const cardData = [
    { imageText: '이미지 1', title: '내용 1', description: '이것은 내용 1의 설명입니다.', link: '/' },
    { imageText: '이미지 2', title: '내용 2', description: '이것은 내용 2의 설명입니다.', link: '/' },
    { imageText: '이미지 3', title: '내용 3', description: '이것은 내용 3의 설명입니다.', link: '/' },
    { imageText: '이미지 4', title: '내용 4', description: '이것은 내용 4의 설명입니다.', link: '/' },
    { imageText: '이미지 5', title: '내용 5', description: '이것은 내용 5의 설명입니다.', link: '/' },
    { imageText: '이미지 6', title: '내용 6', description: '이것은 내용 6의 설명입니다.', link: '/' },
    { imageText: '이미지 6', title: '내용 6', description: '이것은 내용 6의 설명입니다.', link: '/' },
    { imageText: '이미지 6', title: '내용 6', description: '이것은 내용 6의 설명입니다.', link: '/' },
  ];

  return (
    <div className="homepage">
      <div className="main-content">
        <Search />
        <Banner />
        <div className="content-grid">
          {cardData.map((card, index) => (
            <CardItem
              key={index}
              imageText={card.imageText}
              title={card.title}
              description={card.description}
              link={card.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

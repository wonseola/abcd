import React from 'react';
import './HomePage.css';
import Search from '../components/Search';
import Banner from '../components/Banner';
import CardItem from '../components/CardItem';

const HomePage = () => {
  // 카드 데이터 (DB 연동 시 API 응답 데이터를 이곳에 매핑)
  const cardData = [
    { title: '!제목!', description: '설명 ~~ 설명 설명', link: '/' },
    { title: '!제목!', description: '설명 ~~ 설명 설명', link: '/' },
    { title: '!제목!', description: '설명 ~~ 설명 설명', link: '/' },
    { title: '!제목!', description: '설명 ~~ 설명 설명', link: '/' },
    { title: '!제목!', description: '설명 ~~ 설명 설명', link: '/' },
    { title: '!제목!', description: '설명 ~~ 설명 설명', link: '/' },
    { title: '!제목!', description: '설명 ~~ 설명 설명', link: '/' },
    { title: '!제목!', description: '설명 ~~ 설명 설명', link: '/' },
    { title: '!제목!', description: '설명 ~~ 설명 설명', link: '/' },
  ];

  return (
    <div className="homepage">
      <div className="main-content">
        <Search />
        <Banner />
        <div className="content-grid-wrapper">
        <div className="content-grid">
      {cardData.map((card, index) => (
        <CardItem
          key={index}
          title={card.title}
          description={card.description}
          link={card.link}
        />
      ))}
    </div>
      </div>
      </div>
    </div>
  );
};

export default HomePage;

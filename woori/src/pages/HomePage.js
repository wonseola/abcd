import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="main-content">
        <div className="search-container">
          <input type="text" placeholder="검색.. #검색 #검색" />
        </div>

        <div className="icon-section">
          <div className="icon-card">내용 1</div>
          <div className="icon-card">내용 2</div>
          <div className="icon-card">내용 3</div>
          <div className="icon-card">내용 4</div>
          <div className="icon-card">내용 5</div>
        </div>

        <div className="feature-section">
          <div className="feature-text">
            <h2>123123</h2>
            <p>하나둘 셋 넷 다섯~~</p>
          </div>
          <div className="feature-image">
            <img src="https://via.placeholder.com/300x200" alt="디자인 AI 기능" />
          </div>
        </div>

        <div className="content-grid">
          <div className="grid-item">
            <div className="grid-image">이미지 1</div>
            <h3>내용 1</h3>
            <p>이것은 내용 1의 설명입니다.</p>
            <a href="/">더 알아보기 →</a>
          </div>
          <div className="grid-item">
            <div className="grid-image">이미지 2</div>
            <h3>내용 2</h3>
            <p>이것은 내용 2의 설명입니다.</p>
            <a href="/">더 알아보기 →</a>
          </div>
          <div className="grid-item">
            <div className="grid-image">이미지 3</div>
            <h3>내용 3</h3>
            <p>이것은 내용 3의 설명입니다.</p>
            <a href="/">더 알아보기 →</a>
          </div>
          <div className="grid-item">
            <div className="grid-image">이미지 4</div>
            <h3>내용 4</h3>
            <p>이것은 내용 4의 설명입니다.</p>
            <a href="/">더 알아보기 →</a>
          </div>
          <div className="grid-item">
            <div className="grid-image">이미지 5</div>
            <h3>내용 5</h3>
            <p>이것은 내용 5의 설명입니다.</p>
            <a href="/">더 알아보기 →</a>
          </div>
          <div className="grid-item">
            <div className="grid-image">이미지 6</div>
            <h3>내용 6</h3>
            <p>이것은 내용 6의 설명입니다.</p>
            <a href="/">더 알아보기 →</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

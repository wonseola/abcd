import React from 'react';
import './EventFilter.css';

const EventFilter = () => {
  return (
    <div className="filter-container">
      <h3 className="filter-title">필터</h3>

      <div className="filter-group">
        <h4>일시</h4>
        <label className="filter-item">
          <input type="radio" name="date" />
          <span>모든날</span>
        </label>
        <label className="filter-item">
          <input type="radio" name="date" />
          <span>오늘</span>
        </label>
        <label className="filter-item">
          <input type="radio" name="date" />
          <span>이번주</span>
        </label>
        <label className="filter-item">
          <input type="radio" name="date" />
          <span>이번달</span>
        </label>
        <label className="filter-item">
          <input type="radio" name="date" />
          <span>기간 선택</span>
        </label>
      </div>

      <div className="filter-group">
        <h4>지역</h4>
        <select className="filter-dropdown">
          <option>전체</option>
          <option>서울</option>
          <option>부산</option>
          <option>대구</option>
        </select>
      </div>

      <div className="filter-group">
        <h4>행사 분야</h4>
        <label className="filter-item">
          <input type="checkbox" />
          <span>창업</span>
        </label>
        <label className="filter-item">
          <input type="checkbox" />
          <span>IT/프로그래밍</span>
        </label>
        <label className="filter-item">
          <input type="checkbox" />
          <span>라이프</span>
        </label>
        <label className="filter-item">
          <input type="checkbox" />
          <span>라이프</span>
        </label><label className="filter-item">
          <input type="checkbox" />
          <span>라이프</span>
        </label>
      </div>
    </div>
  );
};

export default EventFilter;

import React, { useState } from 'react';
import './EventFilter.css';

const EventFilter = ({ onFilterChange }) => {
  const [selectedRegion, setSelectedRegion] = useState('전체');
  const [searchText, setSearchText] = useState('');
  const [selectedTypes, setSelectedTypes] = useState([]);

  // 검색 필터
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
    onFilterChange({ search: value });
  };

  // 지역 필터
  const regions = ['전체', '서울', '부산', '대전', '인천', '온라인'];

  const handleRegionClick = (region) => {
    setSelectedRegion(region);
    onFilterChange({ location: region === '전체' ? '' : region });
  };

  // 분야 필터
  const handleTypeChange = (e) => {
    const value = e.target.value;
    const updatedTypes = e.target.checked
      ? [...selectedTypes, value]
      : selectedTypes.filter((type) => type !== value);
    setSelectedTypes(updatedTypes);
    onFilterChange({ type: updatedTypes });
  };

  //날짜 필터
  const handleDateChange = (e) => {
    const { name, value } = e.target;
    onFilterChange({ [name]: value });
  };
  

  return (
    <div className="filter-container">
      <h3 className="filter-title">필터</h3>

      {/* 검색 필터 */}
      <div className="filter-group">
        <h4>검색</h4>
        <input
          type="text"
          className="search-input-filter"
          placeholder="강의 제목을 검색하세요..."
          value={searchText}
          onChange={handleSearchChange}
        />
      </div>

      {/* 지역 필터 */}
      <div className="filter-group">
        <h4>지역</h4>
        <div className="region-buttons">
          {regions.map((region) => (
            <button
              key={region}
              className={`region-button ${selectedRegion === region ? 'active' : ''}`}
              onClick={() => handleRegionClick(region)}
            >
              {region}
            </button>
          ))}
        </div>
      </div>

      {/* 날짜 필터 */}
      <div className="filter-group">
        <h4>날짜 필터</h4>
        <div className="date-range-inputs">
          <label>
            시작일:
            <input type="date" name="startDate" onChange={handleDateChange} />
          </label>
          <label>
            종료일:
            <input type="date" name="endDate" onChange={handleDateChange} />
          </label>
        </div>
      </div>
      {/* 분야 필터 */}
      <div className="filter-group">
        <h4>분야</h4>
        <label className="filter-item">
          <input type="checkbox" value="IT" onChange={handleTypeChange} />
          <span>IT/프로그래밍</span>
        </label>
        <label className="filter-item">
          <input type="checkbox" value="AI" onChange={handleTypeChange} />
          <span>AI</span>
        </label>
        <label className="filter-item">
          <input type="checkbox" value="창업" onChange={handleTypeChange} />
          <span>창업</span>
        </label>
      </div>
    </div>
  );
};

export default EventFilter;

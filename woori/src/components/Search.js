import React from 'react';
import './Search.css';

const Search = () => {
    return (
        <div className="search-section">
            <div className="search-container">
                <input type="text" placeholder="검색 검색 #검색 #검색" className="search-input" />
            </div>

            <div className="icon-section">
                <div className="icon-search-card">
                    <img src="https://via.placeholder.com/40" alt="무료 디자인" />
                    <span>3</span>
                </div>
                <div className="icon-search-card">
                    <img src="https://via.placeholder.com/40" alt="PPT 자료" />
                    <span>2</span>
                </div>
                <div className="icon-search-card">
                    <img src="https://via.placeholder.com/40" alt="소셜미디어" />
                    <span>1</span>
                </div>
                <div className="icon-search-card">
                    <img src="https://via.placeholder.com/40" alt="YouTube 썸네일" />
                    <span>1</span>
                </div>
                <div className="icon-search-card">
                    <img src="https://via.placeholder.com/40" alt="카드뉴스" />
                    <span>1</span>
                </div>

            </div>
        </div>
    );
};

export default Search;

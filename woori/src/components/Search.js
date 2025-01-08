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
                    
                    <span>#검색어 추천</span>
                </div>
                <div className="icon-search-card">
                    
                    <span>#검색어 추천</span>
                </div>
                <div className="icon-search-card">
                    
                    <span>#검색어 추천</span>
                </div>
                <div className="icon-search-card">
                    
                    <span>#검색어 추천</span>
                </div>
                <div className="icon-search-card">
                    
                    <span>#검색어 추천</span>
                </div>

            </div>
        </div>
    );
};

export default Search;

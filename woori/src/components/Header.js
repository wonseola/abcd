import React from 'react';
import { Link } from 'react-router-dom';
import MenuBar from './MenuBar';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="top-bar">
        <div className="logo-search-container">
          <Link to="/abcd" className="logo">
            <img
              src="https://via.placeholder.com/120x40?text=LOGO"
              alt="쇼핑몰 로고"
            />
          </Link>
          <div className="search-bar">
            <input type="text" placeholder="검색어를 입력하세요..." />
          </div>
        </div>
        <div className="header-actions">
          <Link to="/login" className="btn-login">
            로그인
          </Link>
          <Link to="/signup" className="btn-signup">
            회원가입
          </Link>
        </div>
      </div>
      <MenuBar />
    </header>
  );
};

export default Header;

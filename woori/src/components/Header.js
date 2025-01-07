import React from 'react';
import { Link } from 'react-router-dom';
import MenuBar from './MenuBar';

const Header = () => {
  return (
    <header className="header">
      <div className="top-bar bg-light p-3 d-flex justify-content-between align-items-center">
        <Link to="/" className="navbar-brand">
          <img
            src="https://via.placeholder.com/120x40?text=LOGO"
            alt="쇼핑몰 로고"
          />
        </Link>
        <div className="header-actions">
          <Link to="/login" className="btn btn-primary me-2">
            로그인
          </Link>
          <Link to="/signup" className="btn btn-secondary">
            회원가입
          </Link>
        </div>
      </div>
      {/* 메뉴바 컴포넌트 */}
      <MenuBar />
    </header>
  );
};

export default Header;

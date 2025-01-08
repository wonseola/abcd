import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <span className="logo-text">infocom</span>
        <span className="beta"></span>
      </div>
      <nav className="nav">
        <ul>
          <li>메뉴123</li>
          <li>메뉴123</li>
          <li>메뉴123</li>
          <li>메뉴123</li>
          <li>메뉴123</li>
          <li className="divider">|</li>
          <li className="bold">메뉴123 메뉴123</li>
          <li>메뉴123 메뉴123</li>
        </ul>
      </nav>
      <div className="header-actions">
        <button className="search-button">🔍</button>
        <button className="help-button">?</button>
        <button className="signup-button">로그인 / 회원가입</button>
      </div>
    </header>
  );
};

export default Header;

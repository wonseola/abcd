import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <span className="logo-text">Info</span>
        <span className="beta">β</span>
      </div>
      <nav className="nav">
        <ul>
          <li>메뉴 </li>
          <li>메뉴 </li>
          <li>메뉴 </li>
          <li>메뉴 </li>
          <li>메뉴 </li>
          <li className="divider">|</li>
          <li className="bold">메뉴  메뉴 </li>
          <li>메뉴  메뉴 </li>
        </ul>
      </nav>
      <div className="header-actions">
        <button className="search-button">🔍</button>
        <button className="help-button">?</button>
        {/* <button className="signup-button">로그인 / 회원가입</button> */}
        <nav className="nav">
          <ul>
            <li><Link to="/abcd">홈</Link></li>
            <li><Link to="/login">로그인</Link></li>
            <li><Link to="/signup">회원가입</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

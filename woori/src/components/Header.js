import React, { useState } from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ isLoggedIn, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 드롭다운 메뉴 상태
  const location = useLocation();
  const menuItems = [
    { label: '전체 보기', path: '/events/menu' },
    { label: '메뉴 1', path: '/events/menu1' },
    { label: '메뉴 2', path: '/events/menu2' },
    { label: '메뉴 3', path: '/events/menu3' },
    { label: '메뉴 4', path: '/events/menu4' },
  ];

  const hostMenu = { label: '등록', path: '/company' };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/abcd" className="logo-link">
          <span className="logo-text">Info</span>
          <span className="beta">β</span>
        </Link>
      </div>

      <nav className="nav">
        <ul className="menu-list">
          {menuItems.map((item) => (
            <li
              key={item.path}
              className={`menu-item ${location.pathname === item.path ? 'active' : ''}`}
            >
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
          <span className="divider">|</span>
          <li className="menu-host">
            <Link to={hostMenu.path} className="bold-host">{hostMenu.label}</Link>
          </li>
        </ul>
      </nav>

      <div className="header-actions">
        <button className="search-button">🔍</button>
        <button className="help-button">?</button>
        {!isLoggedIn ? (
          <div className="auth-links">
            <Link to="/login">로그인</Link>
            <Link to="/signup">회원가입</Link>
          </div>
        ) : (
          <div className="profile-menu">
            <div className="profile-icon" onClick={toggleMenu}>
              <img src="https://via.placeholder.com/40" alt="프로필" />
            </div>
            {isMenuOpen && (
              <div className="dropdown-menu">
                <Link to="/mypage">마이페이지</Link>
                <button onClick={onLogout} className="logout-button">로그아웃</button>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

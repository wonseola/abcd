import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* 첫 번째 열: 회사 정보 */}
        <div className="footer-column">
          <Link to="/" className="footer-logo">
            <img
              src="https://via.placeholder.com/120x40?text=LOGO"
              alt="쇼핑몰 로고"
            />
          </Link>
          <p className="footer-description">
            123123
          </p>
        </div>

        {/* 두 번째 열: 빠른 메뉴 */}
        <div className="footer-column">
          <h4 className="footer-title">빠른 메뉴</h4>
          <ul className="footer-links">
            <li>
              <Link to="/about">회사 소개</Link>
            </li>
            <li>
              <Link to="/help">고객센터</Link>
            </li>
            <li>
              <Link to="/terms">이용 약관</Link>
            </li>
            <li>
              <Link to="/privacy">개인정보 보호</Link>
            </li>
          </ul>
        </div>

        {/* 세 번째 열: 구독 및 소셜 */}
        <div className="footer-column">
          <h4 className="footer-title">구독하기</h4>
          <p className="footer-text">최신 소식을 받기 위해 이메일을 등록하세요!</p>
          <form className="subscribe-form">
            <input type="email" placeholder="이메일 입력" />
            <button type="submit">구독</button>
          </form>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              🌐
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              🐦
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              📸
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 쇼핑몰 이름. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

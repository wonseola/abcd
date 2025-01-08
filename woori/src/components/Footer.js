import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>Footer 영역</p>
      <ul className="footer-links">
        <li>개인정보 처리방침</li>
        <li>이용약관</li>
        <li>문의사항</li>
      </ul>
    </footer>
  );
};

export default Footer;

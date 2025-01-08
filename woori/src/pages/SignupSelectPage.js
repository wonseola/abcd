import React from 'react';
import { Link } from 'react-router-dom';
import './SignupSelectPage.css';

const SignupSelectPage = () => {
  return (
    <div className="signup-select-container">
      <h2>회원가입 유형을 선택해 주세요</h2>
      <div className="signup-card-wrapper">
        <Link to="/signup/personal" className="signup-card">
          <img src="https://via.placeholder.com/150" alt="개인회원" />
          <h3>개인 회원</h3>
          <p>개인 회원으로 다양한 서비스를 이용해 보세요!</p>
        </Link>
        <Link to="/signup/company" className="signup-card">
          <img src="https://via.placeholder.com/150" alt="기업회원" />
          <h3>기업 회원</h3>
          <p>기업 회원으로 서비스를 관리하세요!</p>
        </Link>
      </div>
    </div>
  );
};

export default SignupSelectPage;

import React, { useState } from 'react';
import './SignupFormPage.css';

const SignupFormPage = () => {
  const [userType, setUserType] = useState('personal'); // 기본값: 개인회원

  const handleUserTypeChange = (type) => {
    setUserType(type);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${userType === 'personal' ? '개인' : '기업'} 회원가입이 완료되었습니다!`);
  };

  return (
    <div className="signup-form-container">
      <h2>{userType === 'personal' ? '개인 회원가입' : '기업 회원가입'}</h2>
      <div className="signup-type-selector">
        <button
          className={`type-button ${userType === 'personal' ? 'active' : ''}`}
          onClick={() => handleUserTypeChange('personal')}
        >
          개인회원
        </button>
        <button
          className={`type-button ${userType === 'company' ? 'active' : ''}`}
          onClick={() => handleUserTypeChange('company')}
        >
          기업회원
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        {userType === 'company' && (
          <div className="form-group">
            <label htmlFor="companyName">회사명</label>
            <input type="text" id="companyName" placeholder="회사명을 입력하세요" required />
          </div>
        )}
        {userType === 'company' && (
          <div className="form-group">
            <label htmlFor="businessNumber">사업자 등록 번호</label>
            <input type="text" id="businessNumber" placeholder="사업자 등록 번호를 입력하세요" required />
          </div>
        )}
        <div className="form-group">
          <label htmlFor="email">이메일</label>
          <input type="email" id="email" placeholder="이메일을 입력하세요" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">비밀번호</label>
          <input type="password" id="password" placeholder="비밀번호를 입력하세요" required />
        </div>
        <button type="submit" className="signup-button">회원가입</button>
      </form>
    </div>
  );
};

export default SignupFormPage;

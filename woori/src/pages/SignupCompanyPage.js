import React from 'react';
import './SignupCompanyPage.css'; 

const SignupCompanyPage = () => {
  return (
    <div className="signup-form-container">
      <h2>기업 회원가입</h2>
      <form>
        <div className="form-group">
          <label htmlFor="companyName">회사명</label>
          <input type="text" id="companyName" placeholder="회사명을 입력하세요" required />
        </div>

        <div className="form-group">
          <label htmlFor="businessNumber">사업자 등록 번호</label>
          <input type="text" id="businessNumber" placeholder="사업자 등록 번호를 입력하세요" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">담당자 이메일</label>
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

export default SignupCompanyPage;

import React from 'react';

const SignupPersonalPage = () => {
  return (
    <div className="signup-form-container">
      <h2>개인 회원가입</h2>
      <form>
        <label>이름</label>
        <input type="text" placeholder="이름을 입력하세요" required />

        <label>이메일</label>
        <input type="email" placeholder="이메일을 입력하세요" required />

        <label>비밀번호</label>
        <input type="password" placeholder="비밀번호를 입력하세요" required />

        <button type="submit" className="signup-button">회원가입</button>
      </form>
    </div>
  );
};

export default SignupPersonalPage;

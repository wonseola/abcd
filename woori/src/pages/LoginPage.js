import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'test@test.com' && password === '1234') {
      onLogin('dummy-token');  // 로그인 성공 시 더미 토큰 전달
      navigate('/abcd');
    } else {
      alert('이메일 또는 비밀번호가 잘못되었습니다.');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>로그인</h2>
        <p>id - test@test.com pw - 1234</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>이메일</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="input-group">
            <label>비밀번호</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit" className="auth-button">로그인</button>
        </form>
        <p className="auth-footer">
          계정이 없으신가요? <a href="/signup" className="auth-link">회원가입</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

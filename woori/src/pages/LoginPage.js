import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const LoginPage = () => {
    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>로그인</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="email">이메일</label>
                        <input type="email" id="email" placeholder="이메일을 입력하세요" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">비밀번호</label>
                        <input type="password" id="password" placeholder="비밀번호를 입력하세요" required />
                    </div>
                    <button type="submit" className="auth-button">로그인</button>
                </form>
                <p className="auth-footer">
                    계정이 없으신가요? <Link to="/signup" className="auth-link">회원가입</Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;

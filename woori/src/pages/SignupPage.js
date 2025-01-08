import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const SignupPage = () => {
    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>회원가입</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="username">사용자 이름</label>
                        <input type="text" id="username" placeholder="사용자 이름을 입력하세요" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">이메일</label>
                        <input type="email" id="email" placeholder="이메일을 입력하세요" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">비밀번호</label>
                        <input type="password" id="password" placeholder="비밀번호를 입력하세요" required />
                    </div>
                    <button type="submit" className="auth-button">회원가입</button>
                </form>
                <p className="auth-footer">
                    이미 계정이 있으신가요? <Link to="/login" className="auth-link">로그인</Link>
                </p>
            </div>
        </div>
    );
};

export default SignupPage;

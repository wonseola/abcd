import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './routes';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // 로그인 상태 관리

  useEffect(() => {
    const token = localStorage.getItem('token');  // 토큰 존재 여부 확인
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (dummyToken) => {
    localStorage.setItem('token', dummyToken);  // 로그인 시 더미 토큰 저장
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');  // 로그아웃 시 토큰 삭제
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="app-container">
        <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <main>
          <AppRoutes onLogin={handleLogin} isLoggedIn={isLoggedIn} />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

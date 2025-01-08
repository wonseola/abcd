import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import MyPage from './pages/MyPage';
import DetailListPage from './pages/DetailListPage';

const AppRoutes = ({ onLogin, isLoggedIn }) => {
  return (
    <Routes>
      <Route path="/abcd" element={<HomePage />} />
      <Route path="/login" element={<LoginPage onLogin={onLogin} />} /> {/* onLogin 전달 */}
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/events/:category" element={<DetailListPage />} />
      <Route path="/mypage" element={isLoggedIn ? <MyPage /> : <LoginPage onLogin={onLogin} />} />
    </Routes>
  );
};

export default AppRoutes;

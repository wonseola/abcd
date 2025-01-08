import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import MyPage from './pages/MyPage';
import DetailListPage from './pages/DetailListPage';
// import SignupSelectPage from './pages/SignupSelectPage';
// import SignupPersonalPage from './pages/SignupPersonalPage';
// import SignupCompanyPage from './pages/SignupCompanyPage';
import SignupFormPage from './pages/SignupFormPage';

const AppRoutes = ({ onLogin, isLoggedIn }) => {
  return (
    <Routes>
      <Route path="/abcd" element={<HomePage />} />
      <Route path="/login" element={<LoginPage onLogin={onLogin} />} /> {/* onLogin 전달 */}
      <Route path="/events/:category" element={<DetailListPage />} />
      <Route path="/mypage" element={isLoggedIn ? <MyPage /> : <LoginPage onLogin={onLogin} />} />
      {/* <Route path="/signup" element={<SignupSelectPage />} />
      <Route path="/signup/personal" element={<SignupPersonalPage />} />
      <Route path="/signup/company" element={<SignupCompanyPage />} /> */}
      <Route path="/signup" element={<SignupFormPage />} />
    </Routes>
  );
};

export default AppRoutes;

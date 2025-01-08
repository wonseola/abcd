import React from 'react';
import './MyPage.css';

const MyPage = () => {
  return (
    <div className="mypage-container">
      <div className="mypage-header">
        <h2>마이페이지</h2>
        <button>프로필 수정</button>
      </div>
      <div className="mypage-profile">
        <img src="https://via.placeholder.com/80" alt="프로필 이미지" />
        <div className="mypage-profile-info">
          <p>안녕하세요, 홍길동님!</p>
          <p>이메일: test@test.com</p>
        </div>
      </div>
      <div className="mypage-sections">
        <div className="mypage-item">
          <h3>주문 내역</h3>
          <p>내 주문 내역을 확인하세요.</p>
        </div>
        <div className="mypage-item">
          <h3>즐겨찾기</h3>
          <p>저장한 즐겨찾기 목록</p>
        </div>
        <div className="mypage-item">
          <h3>계정 설정</h3>
          <p>비밀번호 변경 및 계정 관리</p>
        </div>
        <div className="mypage-item">
          <h3>로그아웃</h3>
          <p>계정을 안전하게 로그아웃하세요.</p>
        </div>
      </div>
    </div>
  );
};

export default MyPage;

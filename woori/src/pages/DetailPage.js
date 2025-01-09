import React from 'react';
import dummyLectures from '../data/dummyLectures';
import { useParams } from 'react-router-dom';
import './DetailPage.css';

const DetailPage = () => {
  const { id } = useParams();
  const lecture = dummyLectures.find((lecture) => lecture.id.toString() === id);

  if (!lecture) {
    return <p>강의 정보를 찾을 수 없습니다.</p>;
  }

  return (
    <div className="detail-page">
      <div className="lecture-container">
        {/* 좌측 강의 정보 및 상세 정보 */}
        <div className="lecture-info">
          <img
            className="lecture-image"
            src="https://via.placeholder.com/600x300"
            alt={lecture.title}
          />
          <div className="lecture-header-content">
            <h1 className="lecture-title">{lecture.title}</h1>
            <p className="lecture-category">{lecture.type} / {lecture.category}</p>
            <p className="lecture-description">{lecture.description}</p>
          </div>

          <div className="lecture-details">
            <h4>일시</h4>
            <p>{lecture.date} ~ {lecture.endDate}</p>
            <h4>장소</h4>
            <p>{lecture.location}</p>
          </div>

          {/* 추가 정보 섹션 */}
          <div className="detail-info-section">
            <h3>행사 소개</h3>
            <p>{lecture.fullDescription || "강의에 대한 상세 설명이 여기에 표시됩니다."}</p>
            <h3>채널 정보</h3>
            <p>이벤트가 스트리밍되는 플랫폼: {lecture.streaming || "이벤트 채널 정보 없음"}</p>
            <h3>문의 정보</h3>
            <p>문의처: {lecture.contact || "문의 정보 없음"}</p>
            <h3>취소 및 환불 정책</h3>
            <p>{lecture.refundPolicy || "취소 및 환불 정책 정보 없음"}</p>
          </div>
        </div>

        {/* 우측 참가 신청 메뉴 */}
        <div className="application-card">
          <h4>참가 신청</h4>
          <p className="lecture-cost">비용: {lecture.cost}</p>
          <div className="quantity-control">
            <label>인원 수: </label>
            <input type="number" min="1" defaultValue="1" />
          </div>
          <button className="apply-button">신청하기</button>
          <div className="share-buttons">
            <button className="share-button">공유하기</button>
            <button className="favorite-button">관심 행사 ♡</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;

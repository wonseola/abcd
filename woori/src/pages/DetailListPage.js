import React from 'react';
import EventFilter from '../components/EventFilter';
import LectureList from '../components/LectureList';
import './DetailListPage.css';

const DetailListPage = () => {
  const dummyLectures = [
    { title: 'React 워크숍', date: '2025-01-20', location: '서울', description: 'React 입문자를 위한 강좌' },
    { title: 'AI 세미나', date: '2025-01-25', location: '부산', description: 'AI 기술 동향 및 실습' },
    { title: '스타트업 투자 설명회', date: '2025-02-05', location: '온라인', description: '투자 설명회 안내' },
  ];

  return (
    <div className="detail-list-page">
      <div className="content-container">
        {/* 왼쪽 필터 */}
        <aside className="filter-section">
          <EventFilter />
        </aside>

        {/* 오른쪽 강의 리스트 */}
        <section className="lecture-section">
          <div className="lecture-header">
            <h3>0개의 강의가 검색되었습니다.</h3>
          </div>
          <LectureList lectures={dummyLectures} />
        </section>
      </div>
    </div>
  );
};

export default DetailListPage;

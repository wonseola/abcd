import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import EventFilter from '../components/EventFilter';
import LectureList from '../components/LectureList';
import dummyLectures from '../data/dummyLectures';
import './DetailListPage.css';

const DetailListPage = () => {
  const { category } = useParams();
  const [filters, setFilters] = useState({
    location: '',
    date: '',
    type: [],
    search: '',
  });

  const handleFilterChange = (newFilters) => {
    setFilters({ ...filters, ...newFilters });
  };

  const filteredLectures = dummyLectures.filter((lecture) => {
    const matchesCategory = category === 'menu' || lecture.category === category;
    const matchesLocation = filters.location ? lecture.location === filters.location : true;
    const matchesType = filters.type.length ? filters.type.includes(lecture.type) : true;
    const matchesSearch = filters.search ? lecture.title.toLowerCase().includes(filters.search.toLowerCase()) : true;
    return matchesCategory && matchesLocation && matchesType && matchesSearch;
  });

  return (
    <div className="detail-list-page">
      <div className="content-container">
        <aside className="filter-section">
          <EventFilter onFilterChange={handleFilterChange} />
        </aside>

        <section className="lecture-section">
          <div className="lecture-header">
            <h3>{filteredLectures.length}개의 강의가 검색되었습니다.</h3>
          </div>
          <LectureList lectures={filteredLectures} />
        </section>
      </div>
    </div>
  );
};

export default DetailListPage;

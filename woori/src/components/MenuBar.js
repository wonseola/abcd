import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const MenuBar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#fbbe17' }}>
      <div className="container-fluid">
        {/* 반응형 토글 버튼 (모바일 화면) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav mx-auto justify-content-center">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                홈
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/mens-clothing" className="nav-link">
                메뉴1
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/womens-clothing" className="nav-link">
                메뉴2
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/electronics" className="nav-link">
                메뉴3
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sale" className="nav-link">
                메뉴4
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/new-arrivals" className="nav-link">
                메뉴5
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MenuBar;

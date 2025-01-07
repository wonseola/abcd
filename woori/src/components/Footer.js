import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container">
        <div className="row">
          {/* 로고 및 소개 */}
          <div className="col-md-4 mb-3">
            <h5>로고</h5>
            <p>
              하나둘하나둘~~
            </p>
          </div>

          {/* 메뉴 링크 */}
          <div className="col-md-4 mb-3">
            <h5>메뉴</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-white text-decoration-none">
                  홈
                </a>
              </li>
              <li>
                <a href="/category/mens-clothing" className="text-white text-decoration-none">
                  2
                </a>
              </li>
              <li>
                <a href="/category/womens-clothing" className="text-white text-decoration-none">
                  3
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white text-decoration-none">
                  4
                </a>
              </li>
            </ul>
          </div>

          {/* 연락처 */}
          <div className="col-md-4">
            <h5>연락처</h5>
            <p>이메일: ㅇㅇㅇㅇㅇ</p>
            <p>전화번호: 123-456-7890</p>
            <p>주소: 인천 남동구</p>
          </div>
        </div>

        <hr className="border-light" />

        <div className="text-center">
          <p className="mb-0">&copy; 123123123123</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MenuBar.css';

const pages = [
  { name: '메뉴1', path: '/category/mens-clothing', subOptions: ['옵션1', '옵션2', '옵션3'] },
  { name: '메뉴2', path: '/category/womens-clothing', subOptions: ['옵션1', '옵션2', '옵션3'] },
  { name: '메뉴3', path: '/category/electronics', subOptions: ['옵션1', '옵션2', '옵션3'] },
  { name: '메뉴4', path: '/sale', subOptions: ['옵션1', '옵션2'] },
  { name: '메뉴5', path: '/new-arrivals', subOptions: [] },
];

const MenuBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <nav className="menu-bar">
      <div className="menu-container">
        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>
        <ul className={`menu-links ${isMenuOpen ? 'show' : ''}`}>
          {pages.map((page) => (
            <li key={page.name} className="menu-item">
              <Link to={page.path} className="menu-link">
                {page.name}
              </Link>
              {page.subOptions.length > 0 && (
                <ul className="dropdown-menu">
                  {page.subOptions.map((option, index) => (
                    <li key={index} className="dropdown-item">
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default MenuBar;

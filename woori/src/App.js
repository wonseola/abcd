import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './routes';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const App = () => {
  return (
    <div className="app-container">
      <Header /> {/* 공통 Header */}
      <main>
        <AppRoutes /> {/* AppRoutes는 <Routes>와 <Route>만 포함 */}
      </main>
      <Footer /> {/* 공통 Footer */}
    </div>
  );
};

export default App;

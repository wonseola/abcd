import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './routes';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const App = () => {
  return (
    <div className="app-container">
      <Header /> 
      <main>
        <AppRoutes />
      </main>
      <Footer /> 
    </div>
  );
};

export default App;

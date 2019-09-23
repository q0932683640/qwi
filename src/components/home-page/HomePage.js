import React from 'react';
import TechPage from './tech-page/TechPage';
import AboutPage from './about-page/AboutPage';
function HomePage() { 
  return (
    <div className="HomePage">
        {/* <TechPage></TechPage> */}
        <AboutPage></AboutPage>
    </div>
  );
}
export default HomePage;
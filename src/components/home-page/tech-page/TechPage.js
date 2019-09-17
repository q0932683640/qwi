import React from 'react';
import TechHeader from './header/TechHeader';
import TechBody from './body/TechBody';
import TechFooter from './footer/TechFooter';

function TechPage() { 
  return (
    <div className="App">
      <TechHeader />
      <TechBody />
      <TechFooter />
    </div>
  );
}  
export default TechPage;
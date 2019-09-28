import React from 'react';
import TechPage from './tech/TechPage';
import IntroPage from './intro/IntroPage';
import AuthPage from './auth/AuthPage';
import {useSelector} from "react-redux";
function HomePage() { 

  const state = useSelector(state => state);
  let content;
  
  if(state.introReducer.show)
    content = <IntroPage></IntroPage>;
  else if (state.authReducer.show)
    content = <AuthPage></AuthPage>;
  else if (state.techReducer.show)
    content = <TechPage></TechPage>;
  else return;

  return (
    <div className="HomePage">
      {content}
    </div>
  );
}
export default HomePage;
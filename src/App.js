import React, {useState} from 'react';
import './App.css';
import TechPage from './components/tech-page/TechPage';
import AuthPage from './components/auth-page/AuthPage';


function App() { 
  let [action, setAction] = useState("Auth");

  var content;
  if(action === "About") content = <TechPage></TechPage>;
  else if (action === "Auth") content = <AuthPage act="register"></AuthPage>;
  else content = <h2>Other content</h2>

  return (
    <div className="App">
      {content}
    </div>
  );
}
export default App;
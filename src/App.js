import React from 'react';
import HomePage from './components/home-page/HomePage';
import {Provider} from "react-redux";
import store from "./redux/store";
function App() { 
  return (
    <div className="App">
      <Provider store={store}>   
          <HomePage></HomePage>      
      </Provider>    
    </div>
  );
}
export default App;
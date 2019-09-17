import React from 'react';
import HomePage from './components/home-page/HomePage';
import {Provider} from "react-redux";
import store from "./redux/store";
import {BrowserRouter as Router, Route} from "react-router-dom";
function App() { 
  return (
    <div className="App">
      <Provider store={store}>
        <Router>       
          {/* <Route path="/home/" component={HomePage} /> */}
          <HomePage></HomePage>
        </Router>
      </Provider>    
    </div>
  );
}
export default App;
import React from 'react';
import TechPage from './tech/TechPage';
import IntroPage from './intro/IntroPage';
import AdminPage from './admin/AdminPage';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
function HomePage(props) { 
  return (
    <Router>
      <div className="HomePage">
        <Switch>
          <Route path="/" exact component={IntroPage}></Route> 
          <Route path="/admin" component={AdminPage}></Route>
          <Route path="/techtut" component={TechPage}></Route>
        </Switch>
      </div>
    </Router>
  );
}
export default HomePage;
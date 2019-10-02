import React from "react";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Login from "./login/Login";
import UserController from "./user/UserController";

function AdminPage ({match}) { 
    console.log('match: ',match);
    return (
        <Router>
            <div className="AdminPage">
                <Switch>
                    <Route exact={true} path={`${match.path}/`} component={Login}></Route>
                    <Route path={`${match.path}/dashboard/`} component={UserController}></Route>
               </Switch>
            </div>
        </Router>
    );
}

export default AdminPage;
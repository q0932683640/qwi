import React from 'react';
import Login from './Login/Login';
import Register from './Register/Register';

function AuthPage(props) {
    const {act} = props;
    var content;
    if(act === "login") content = <Login></Login>;
    else if (act === "register" ) content = <Register></Register>;
    else content = <h2>Other!</h2>
    return (
        <div className="AuthPage">
            {content}      
        </div>
    );
}

export default AuthPage;
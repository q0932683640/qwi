import React from "react";
import Login from "./login/Login";
import Register from "./register/Register";
import {useSelector} from "react-redux";
function AuthPage () {
    const stateLogin = useSelector(state => state.authReducer);
    let content;
    if(stateLogin.login)
        content = <Login></Login>
    if(stateLogin.register)
        content = <Register></Register>
    return (
        <div>
            {content}
        </div>
    );
}

export default AuthPage ;
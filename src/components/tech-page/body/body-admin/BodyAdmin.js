import React from 'react';

import './BodyAdmin.css';
import BodyAdminAddPost from './body-admin-add/BodyAdminAddPost';
import BodyAdminUpdatePost from './body-admin-update/BodyAdminUpdatePost';
import BodyAdminDeletePost from './body-admin-delete/BodyAdminDeletePost';

function BodyAdmin(props){
    const {typeAction} = props;
    let content;
    if(typeAction === "admin-add")
        content = <BodyAdminAddPost></BodyAdminAddPost>;
    else if (typeAction === "admin-update")
        content = <BodyAdminUpdatePost></BodyAdminUpdatePost>
    else
        content = <BodyAdminDeletePost></BodyAdminDeletePost>
    return (
        <div className="BodyAdmin">
            {content}
        </div>
    );
}

export default BodyAdmin;
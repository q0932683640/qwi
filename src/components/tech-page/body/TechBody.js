import React from 'react';
import './TechBody.css';
import BodyPost from './body-post/BodyPost';
import BodyAdmin from './body-admin/BodyAdmin';
function TechBody(props) {
  const {posts, act} = props;
  let content;
  if(act === "show")
    content = <BodyPost posts={posts}></BodyPost>
  if(act === "add" || act === "del" || act === "upd")
    content = <BodyAdmin act={act}></BodyAdmin>;
    
  return (
    <div className="TechBody">   
      {
        content
      }
    </div>
  );
}

export default TechBody;

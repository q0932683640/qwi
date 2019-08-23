import React from 'react';
import './TechBody.css';
import BodyPost from './body-post/BodyPost';
import BodyAdmin from './body-admin/BodyAdmin';
function TechBody(props) {
  const {dataPost} = props;
  let content;
  if(dataPost[1] === "show-post")
    content = <BodyPost listPost={dataPost[0]}></BodyPost>
  else
    content = <BodyAdmin typeAction={dataPost[1]}></BodyAdmin>;
    
  return (
    <div className="TechBody">   
      {
        content
      }
    </div>
  );
}

export default TechBody;

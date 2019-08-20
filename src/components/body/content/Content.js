import React from 'react';
import './Content.css';

function Content(props) {
  const {title, content} = props;
  console.log("title is " + title);
  return (
    <div className="Content">
      <div><h2>{title}</h2></div>
      <div>{content}</div>
    </div>
  );
}
export default Content;

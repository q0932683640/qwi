import React from 'react';
import './Content.css';

function Content(props) {
  const {title, content} = props;
  return (
    <div className="Content">
      <div>
        <div><h2>{title}</h2></div>
        <div>{content}</div>
      </div>
    </div>
  );
}
export default Content;

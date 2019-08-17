import React from 'react';
import './LeftBarItem.css';

function LeftBarItem(props) {
  const {title} = props;
  return (
    <div className="LeftBarItem">
      <div>{title}</div>   
    </div>
  );
}
export default LeftBarItem;

import React from 'react';
import './LeftBar.css';
import LeftBarItem from './left-bar-item/LeftBarItem';

function LeftBar(props) {
  const {postList, arrEvent} = props;
  return (
    <div className="LeftBar">
      {
        postList.map((item, index) => <LeftBarItem key={index} title={item.title} onClickItem={arrEvent[index]}></LeftBarItem>)
      }
    </div>
  );
}
export default LeftBar;
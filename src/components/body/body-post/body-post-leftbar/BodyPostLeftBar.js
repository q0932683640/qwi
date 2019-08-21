import React from 'react';
import './LeftBar.css';
import LeftBarItem from './body-post-leftbar-item/BodyPostLeftBarItem';

function BodyPostLeftBar(props) {
  const {postList, arrEvent} = props;
  return (
    <div className="BodyPostLeftBar">
      {
        postList.map((item, index) => <LeftBarItem key={index} title={item.title} onClickItem={arrEvent[index]}></LeftBarItem>)
      }
    </div>
  );
}
export default BodyPostLeftBar;
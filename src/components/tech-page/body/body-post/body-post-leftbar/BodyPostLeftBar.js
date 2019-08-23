import React from 'react';
import './BodyPostLeftBar.css';
import BodyPostLeftBarItem from './body-post-leftbar-item/BodyPostLeftBarItem';

function BodyPostLeftBar(props) {
  const {postList, arrEvent} = props;
  return (
    <div className="BodyPostLeftBar">
      {
        postList.map((item, index) => <BodyPostLeftBarItem key={index} title={item.title} onClickItem={arrEvent[index]}></BodyPostLeftBarItem>)
      }
    </div>
  );
}
export default BodyPostLeftBar;
import React from 'react';
import './LeftBar.css';
import LeftBarItem from './left-bar-item/LeftBarItem';

function LeftBar(props) {
  const {postList} = props;
  return (
    <div className="LeftBar">
      {
        postList.map((item, index) => <LeftBarItem key={index} title={item.title} onClickItem={itemClickCallback(index)}></LeftBarItem>)
      }
    </div>
  );
}

function itemClickCallback(index){
  return ()=>{
    
  }
}

export default LeftBar;
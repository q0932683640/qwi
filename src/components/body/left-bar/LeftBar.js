import React from 'react';
import './LeftBar.css';
import LeftBarItem from './left-bar-item/LeftBarItem';

function LeftBar(props) {
  const {postList, arrEvent} = props;
  console.log("arrEvent in leftbar: ", arrEvent);
  return (
    <div className="LeftBar">
      {
        postList.map((item, index) => <LeftBarItem key={index} title={item.title} onClickItem={arrEvent[index]}></LeftBarItem>)
      }
    </div>
  );
}
// function clickTest(index){
//   return () => {
//     console.log("index callback: "+ index);
//   }
// }
export default LeftBar;
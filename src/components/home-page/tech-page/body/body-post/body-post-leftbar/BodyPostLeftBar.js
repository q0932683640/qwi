import React from 'react';
import BodyPostLeftBarItem from './body-post-leftbar-item/BodyPostLeftBarItem';
import actionCreator from '../../../../../../redux/actionCreator';
import {useSelector, useDispatch} from 'react-redux';
import {
  Accordion,
  Card,
  Button
} from "react-bootstrap";

function BodyPostLeftBar(props) {
  const dispatch = useDispatch();
  const listPost = useSelector(state=>state.allPost);
  let arrEvent = [];
  for(let i = 0; i < listPost.length; i++){
    arrEvent = [...arrEvent, itemClick(i)];
  }
  let content=<div></div>;
  let category;
  if(listPost && listPost.length > 0){
    switch(listPost[0].category){
      case "htmlcss":
      {
        category = "HTML & CSS";
        break;
      }
      case "assembly":
      {
        category = "Assembly";
        break;
      }
      case "cc":
      {
        category = "C & C++";
        break;
      }
      case "java":
      {
        category = "Java";
        break;
      }
      case "javascript":
      {
        category = "JavaScript";
        break;
      }
      case "spring":
      {
        category = "Spring";
        break;
      }
      case "nodejs":
      {
        category = "NodeJS";
        break;
      }
      case "reactjs":
      {
        category = "ReactJS";
        break;
      }
      default:
      {}
    }
    content = <Accordion defaultActiveKey="0">
                <Card>
                  <Card.Header className="text-center">
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      <h5>
                        {category}
                      </h5>                    
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      { 
                        listPost.map((item, index) => 
                        <BodyPostLeftBarItem 
                          key={index} title={item.title} 
                          onClickItem={arrEvent[index]}
                        >
                        </BodyPostLeftBarItem>)
                      }
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Card.Header></Card.Header>
                </Card>
              </Accordion>        
  }
  else{

  }
  function itemClick(index){
    return () => {
      dispatch(actionCreator("getCurrentPost",index));
    }
  }
  return (
    <div style={styles.body}>
      {
        content
      }
      {/* {
        listPost.map((item, index) => 
        <BodyPostLeftBarItem 
          key={index} title={item.title} 
          onClickItem={arrEvent[index]}>
        </BodyPostLeftBarItem>)
      } */}
    </div>
  );
}
const styles = {
  body:{
    color: "rgba(4, 42, 42, 0.8)",
    padding: "10px 10px",
    minHeight: "100%",
    height: "100%"
  }
}
export default BodyPostLeftBar;
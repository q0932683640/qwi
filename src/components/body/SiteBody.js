import React, {useState} from 'react';
import './SiteBody.css';
import './content/Content';
import LeftBar from './left-bar/LeftBar';
import Content from './content/Content';
import {Row, Col, Container } from 'react-bootstrap';

function SiteBody(props) {
  const {listPost} = props;
  let [post, setPost] = useState({});
  let arrEvent = [];
  console.log("listPost in SiteBody ", listPost);
  for(let i = 0; i < listPost.length; i++){
    arrEvent = [...arrEvent, itemClick(i)];
  }
  console.log("arrEvent: ",arrEvent);
  function itemClick(index){
    console.log("index "+ index +" is calling!");
    return () => {
      console.log("index callback: "+ index);
      setPost(listPost[index]);
    }
  }
  return (
    <div className="SiteBody">
      <Container fluid={true}>
        <Row>
            <Col xs={2} className="pl-0">
              <LeftBar arrEvent={arrEvent} postList={listPost}></LeftBar>
            </Col>
            <Col xs={10} className="pl-0">
              <Content title={post.title} content={post.content}></Content>
            </Col>           
        </Row>   
      </Container>       
    </div>
  );  
}

export default SiteBody;
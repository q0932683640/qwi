import React, {useState} from 'react';
import './SiteBody.css';
import './content/Content';
import LeftBar from './left-bar/LeftBar';
import Content from './content/Content';
import {Row, Col, Container } from 'react-bootstrap';

function SiteBody(props) {
  const {listPost} = props;
  let [post, setPost] = useState({});
  return (
    <div className="SiteBody">
      <Container fluid={true}>
        <Row>
            <Col xs={2} className="pl-0">
              <LeftBar postList={listPost}></LeftBar>
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
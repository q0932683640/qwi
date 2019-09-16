import React from 'react';
import './body-post-content/BodyPostContent';
import LeftBar from './body-post-leftbar/BodyPostLeftBar';
import Content from './body-post-content/BodyPostContent';
import {Row, Col, Container } from 'react-bootstrap';

function BodyPost(props) {
  return (
    <div style={styles.body}>
      <Container fluid="true">
        <Row>
            <Col md={3} lg={2} sm={4} className="pl-0 pr-0">
              <LeftBar></LeftBar>
            </Col>
            <Col md={9} lg={10} sm={8} className="pl-0 pr-0">
              <Content ></Content>
            </Col>           
        </Row>   
      </Container>       
    </div>
  );  
}
const styles = {
  body: {
    backgroundColor: "#fff",
    minHeight: "800px"
  }
}
export default BodyPost;
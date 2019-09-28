import React from 'react';
import './body-post-content/BodyPostContent';
import LeftBar from './body-post-leftbar/BodyPostLeftBar';
import Content from './body-post-content/BodyPostContent';
import {Row, Col, Container } from 'react-bootstrap';

function BodyPost(props) {
  return (
    <div style={styles.body}>
      <Container fluid="true">
        <Row style={styles.row}>
            <Col md={3} className="pl-0 pr-0">
              <LeftBar></LeftBar>
            </Col>
            <Col md={9} className="pl-0 pr-0">
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
  },
  row: {
    padding: "20px 0px"
  }
}
export default BodyPost;
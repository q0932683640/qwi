import React from 'react';
import './SiteBody.css';
import './content/Content';
import LeftBar from './left-bar/LeftBar';
import Content from './content/Content';
import {Row, Col } from 'react-bootstrap';

function SiteBody(props) {
  return (
    <div className="SiteBody">
        <Row>
            <Col xs={3}>
              <LeftBar postList={props.postList}></LeftBar>
            </Col>
            <Col xs={9}>
              <Content title={props.title} content={props.content}></Content>
            </Col>
            
        </Row>          
    </div>
  );
}

export default SiteBody;

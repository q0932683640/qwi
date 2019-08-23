import React from 'react';
import './BodyPostLeftBarItem.css';
import {Row, Col, Container } from 'react-bootstrap';

function BodyPostLeftBarItem(props) {
  const { title, onClickItem} = props;
  
  return (
    <div className="BodyPostLeftBarItem" onClick={onClickItem}>    
      <Container>
        <Row>
          <Col>
            <div>{title}</div> 
          </Col>
        </Row>
      </Container>       
    </div>
  );
}
export default BodyPostLeftBarItem;
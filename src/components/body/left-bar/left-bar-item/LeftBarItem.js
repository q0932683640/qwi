import React from 'react';
import './LeftBarItem.css';
import {Row, Col, Container } from 'react-bootstrap';

function LeftBarItem(props) {
  const { title, onClickItem} = props;
  
  return (
    <div className="LeftBarItem" onClick={onClickItem}>    
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
export default LeftBarItem;
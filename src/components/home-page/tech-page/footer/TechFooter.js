import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faTwitterSquare} from '@fortawesome/free-brands-svg-icons';
function TechFooter() {
  return (
    <div style={styles.body}>   
      <Container>
        <Row>
          <Col xs={8}>
            <div>
              <span style={{color:"#c8c8ca", fontSize:"15px"}}>Copyright @ all right severed by <span style={{color:"red"}}>Techtut</span></span>
            </div>
          </Col>
          <Col xs={4}>
            <div>
              <span style={styles.fontAwesome}><a href="#"><FontAwesomeIcon icon={faFacebookSquare} /></a></span>
              <span style={styles.fontAwesome}><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></span>
              <span style={styles.fontAwesome}><a href="#"><FontAwesomeIcon icon={faTwitterSquare} /></a></span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
const styles = {
  body:{
    padding: "30px 10px",
    width: "100%",
    backgroundColor: "#020312"
  },
  fontAwesome:{
    padding: "5px 5px",
    fontSize: "20px",
    color: "#c8c8ca"
  }
}
export default TechFooter;

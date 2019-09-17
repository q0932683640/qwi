import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faTwitterSquare} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope,faPhoneSquareAlt, faAddressBook} from '@fortawesome/free-solid-svg-icons';
function TechFooter() {
  return (
    <div style={styles.body}>   
      <Container>
        <Row className="justify-content-center" style={{fontFamily:"Digital"}}><h3>TECHTUT</h3></Row>
        <Row className="justify-content-center">         
          <div className="text-center">
                <span style={styles.fontAwesome}><a href="#"><FontAwesomeIcon icon={faFacebookSquare} /></a></span>
                <span style={styles.fontAwesome}><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></span>
                <span style={styles.fontAwesome}><a href="#"><FontAwesomeIcon icon={faTwitterSquare} /></a></span>
          </div>
        </Row>
        <Row style={{paddingTop:"50px"}}>
          <Col md={7} style={{textAlign:"center"}}>
            <div style={{textAlign:"start"}}>
              <h5 style={{paddingLeft:"20px"}}>Contact Us</h5>
              <div>
                <div><span style={styles.fontAwesome}><FontAwesomeIcon icon={faAddressBook} /></span><span> Address: 70 Lang Tang Phu Street, District 9, HCM City.</span> </div>
                <div><span style={styles.fontAwesome}><FontAwesomeIcon icon={faPhoneSquareAlt} /></span><span> Phone: 0932.683.640</span> </div>
                <div><span style={styles.fontAwesome}><FontAwesomeIcon icon={faEnvelope} /></span><span> Email: quynhpub90@gmail.com</span> </div> 
              </div>
                 
            </div>       
          </Col>
          <Col md={3} style={{textAlign:"center"}}>
            <div style={{textAlign:"start"}}>
              <h5>Key Member</h5>
              <div>Quynh PV</div>
              <div>Thai PQ5</div>
              <div>Binh DLP</div>
              <div>Phong NT31</div>
            </div>  
          </Col>
          <Col md={2} style={{textAlign:"center"}}>
            <div>
              <h5>Hotline</h5>
              <h3>0932.683.640</h3>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center" style={{paddingTop:"50px"}}>
          <div><span style={{color:"#c8c8ca", fontSize:"15px"}}>Copyright @ all right severed by <span style={{color:"red"}}>TECHTUT</span></span></div>
        </Row>
      </Container>
    </div>
  );
}
const styles = {
  body:{
    padding: "30px 10px",
    width: "100%",
    backgroundColor: "#020312",
    color: "#c8c8ca"
  },
  fontAwesome:{
    padding: "5px 5px",
    fontSize: "20px" 
  }
}
export default TechFooter;

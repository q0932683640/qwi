import React from 'react';
import './SiteHeader.css';
import logo from './images/logo.png';
import{
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
  Container,
  Row,
  Col
} from 'react-bootstrap';

function SiteHeader(props) {
  const {
    methodHtmlCss,
    methodJava,
    methodJavaScript,
    methodNodeJS,
    methodReactJS,
    methodSpringBoot
  } = props;
  return (
    <div className="SiteHeader">
      <div>
        <Container>
          <Row>
            <Col>
            <Navbar collapseOnSelect expand="md" variant="dark">
      <Navbar.Brand href="#home" style={{color:'#ff502f',fontWeight:'bold'}}>
        <img src={logo} alt="image here!" width="40px"></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Skills" id="skills-dropdown">
            <NavDropdown.Item href="#HtmlCss" onClick={methodHtmlCss}>HTML/CSS</NavDropdown.Item>
            <NavDropdown.Item href="#JavaScript"onClick={methodJavaScript}>Java Script</NavDropdown.Item>
            <NavDropdown.Item href="#Java" onClick={methodJava}>Java</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Framework" id="framework-dropdown">
            <NavDropdown.Item href="#SpringBoot"onClick={methodSpringBoot}>Spring Boot</NavDropdown.Item>
            <NavDropdown.Item href="#NodeJS" onClick={methodNodeJS}>Node JS</NavDropdown.Item>
            <NavDropdown.Item href="#ReactJS" onClick={methodReactJS}>React JS</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#about">About</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
            </Col>
          </Row>
        </Container>
    </div>
    </div>
  );
}

export default SiteHeader;
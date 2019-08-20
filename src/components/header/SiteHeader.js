import React from 'react';
import './SiteHeader.css';
import{
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown
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
      <Navbar variant="dark">
      <Navbar.Brand href="#home" style={{color:'#ff502f',fontWeight:'bold'}}>QuynhPV</Navbar.Brand>
      <Nav className="mr-auto">
        <NavDropdown title="Skills" id="skills-dropdown">
          <NavDropdown.Item onClick={methodHtmlCss}>HTML/CSS</NavDropdown.Item>
          <NavDropdown.Item onClick={methodJavaScript}>Java Script</NavDropdown.Item>
          <NavDropdown.Item onClick={methodJava}>Java</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Framework" id="framework-dropdown">
          <NavDropdown.Item onClick={methodSpringBoot}>Spring Boot</NavDropdown.Item>
          <NavDropdown.Item onClick={methodNodeJS}>Node JS</NavDropdown.Item>
          <NavDropdown.Item onClick={methodReactJS}>React JS</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#about">About</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
    </div>
    </div>
  );
}

export default SiteHeader;
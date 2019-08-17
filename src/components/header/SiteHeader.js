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
  const {method} = props;
  return (
    <div className="SiteHeader">
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">QuynhPV</Navbar.Brand>
      <Nav className="mr-auto">
        <NavDropdown title="Skills" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/java">HTML/CSS</NavDropdown.Item>
          <NavDropdown.Item href="#action/js">Java Script</NavDropdown.Item>
          <NavDropdown.Item onClick={method}>Java</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Framework" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/spring">Spring Boot</NavDropdown.Item>
          <NavDropdown.Item href="#action/nodejs">Node JS</NavDropdown.Item>
          <NavDropdown.Item href="#action/reactjs">React JS</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#about">About</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
    </div>
  );
}

export default SiteHeader;

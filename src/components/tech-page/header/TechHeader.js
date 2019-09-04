import React from 'react';
import './TechHeader.css';
import logo from './images/logo.jpg';
import {
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

function TechHeader(props) {
  const {
    methodHtmlCss,
    methodJava,
    methodJavaScript,
    methodNodeJS,
    methodReactJS,
    methodSpringBoot,
    adminAdd,
    adminDelete,
    adminUpdate
  } = props;
  return (
    <div className="TechHeader">
      <div>
        <Container>
          <Row>
            <Col>
            <Navbar collapseOnSelect expand="md" variant="dark">
      <Navbar.Brand href="#home" style={{color:'#ff502f',fontWeight:'bold'}}>
        <img src={logo} alt="logo here!" width="40px"></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="SKILL" id="skills-dropdown">
            <NavDropdown.Item href="#HtmlCss" onClick={methodHtmlCss}>ASEMBLY</NavDropdown.Item>
            <NavDropdown.Item href="#HtmlCss" onClick={methodHtmlCss}>C/C++</NavDropdown.Item>
            <NavDropdown.Item href="#HtmlCss" onClick={methodHtmlCss}>HTML/CSS</NavDropdown.Item>
            <NavDropdown.Item href="#JavaScript"onClick={methodJavaScript}>JAVASCRIPT</NavDropdown.Item>
            <NavDropdown.Item href="#Java" onClick={methodJava}>JAVA</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="FRAMEWORK" id="framework-dropdown">
            <NavDropdown.Item href="#SpringBoot"onClick={methodSpringBoot}>SPRING</NavDropdown.Item>
            <NavDropdown.Item href="#NodeJS" onClick={methodNodeJS}>NODEJS</NavDropdown.Item>
            <NavDropdown.Item href="#ReactJS" onClick={methodReactJS}>REACTJS</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="ADMIN" id="admin-dropdown">
            <NavDropdown.Item href="#AddPost"onClick={adminAdd}>Add Post</NavDropdown.Item>
            <NavDropdown.Item href="#DeletePost" onClick={adminDelete}>Delete Post</NavDropdown.Item>
            <NavDropdown.Item href="#UpdatePost" onClick={adminUpdate}>Update Post</NavDropdown.Item>
          </NavDropdown>
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

export default TechHeader;
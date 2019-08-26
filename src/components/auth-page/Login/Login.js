import React from 'react';
import "./Login.css";
import {
    Container,
    Row,
    Col,
    Button,
    Form
} from 'react-bootstrap';
function Login() {
    return (
        <div className="Login">
            <Container>
                <Row className="text-center pb-5" style={{fontWeight:'bold', fontSize:'35px'}}>
                    <Col>Login With</Col>
                </Row>
                <Row className="text-center">
                   <Col md={6}><a href="#">Facebook</a></Col>
                   <Col md={6}><a href="#">Google</a></Col> 
                </Row>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group controlId="formEmail">
                                <Form.Label>Email </Form.Label>  
                                <Form.Control type="email" placeholder="Enter email!"/> 
                            </Form.Group> 
                            <Form.Group controlId="formPassword">
                                <Form.Label>Password </Form.Label>  
                                <Form.Control type="password" placeholder="Enter password!" /> 
                            </Form.Group> 
                            <Form.Group>
                                <Form.Check type="checkbox" label="Remember me!" />    
                            </Form.Group>
                            <Button variant="primary" type="submit">Submit</Button>          
                        </Form>    
                    </Col>
                </Row>
                
            </Container>          
        </div>
    );
}

export default Login;
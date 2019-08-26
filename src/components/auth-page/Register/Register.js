import React from 'react';
import "./Register.css";
import {
    Container,
    Row,
    Col,
    Button,
    Form
} from 'react-bootstrap';
function Register() {
    return (
        <div className="Login">
            <Container>
                <Row>
                    <Col style={{fontSize:'30px', fontWeight:'bold'}}>Register</Col>
                </Row>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group controlId="formEmail">
                                <Form.Label>Email </Form.Label>  
                                <Form.Control type="email" placeholder="Enter email!"/> 
                            </Form.Group> 
                            <Form.Row>
                                <Form.Group as={Col} controlId="formPassword1">
                                    <Form.Label>Password </Form.Label>  
                                    <Form.Control type="password" placeholder="Enter password!" /> 
                                </Form.Group> 
                                <Form.Group as={Col} controlId="formPassword2">
                                    <Form.Label>Password again </Form.Label>  
                                    <Form.Control type="password" placeholder="Enter password!" /> 
                                </Form.Group> 
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formFirstName">
                                    <Form.Label>First Name </Form.Label>  
                                    <Form.Control type="text" placeholder="Enter  your first name!" /> 
                                </Form.Group>
                                <Form.Group as={Col} controlId="formLastName">
                                    <Form.Label>Last Name </Form.Label>  
                                    <Form.Control type="text" placeholder="Enter  your last name!" /> 
                                </Form.Group>
                            </Form.Row>  
                            <Form.Group>
                                <a href="#"> Fogot password? </a>    
                            </Form.Group>
                            <Button variant="primary" type="submit">Submit</Button>          
                        </Form>    
                    </Col>
                </Row>
                
            </Container>          
        </div>
    );
}

export default Register;
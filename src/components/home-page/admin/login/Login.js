import React, {useState} from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import "./Login.css";
import {
    Button,
    Form,
    Container,
    Row,
    Col,
    FormGroup,
} from 'react-bootstrap';
import { faFacebookSquare, faGoogle, faTwitter} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import actionCreator from "../../../../redux/actionCreator";

function Login() {
    const dispatch = useDispatch();
    
    let showIntro = () => {
        dispatch(actionCreator("introShow"));
        dispatch(actionCreator("authHide"));
    }
    const [validated, setValidated] = useState(false);

    const handleSubmit = event => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        else {
            axios.post('http://localhost:5000/user/login', {
                username: form.usrLogin.value,
                password: form.passLogin.value,                
            })
            .then(function (response) {
                if (response.data === "ok") {
                    console.log("login OK");                  
                    showIntro();            
                }
                else if(response.data === "wrong_username")
                {
                    alert("wrong name!");
                }  
                else if(response.data === "wrong_pass")
                {
                    alert("wrong pass!");
                }  
                else
                    alert("error");    
            })
            .catch(function (error) {
                alert('Connection is getting trouble!');
                console.log(error);
            });      
        }
        setValidated(true);
    };
    return (
        <div className="login">
            <Container className="cLogin">
                <Row className="justify-content-center">
                    <Col md={6} lg={4}>
                        <div className="form">
                            <div className="text-center">
                                <h3 className="pb-2" style={{color:"rgb(45, 190, 76)"}}>Login Now!</h3>  
                            </div>             
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Form.Group controlId="usrLogin">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control required type="text" placeholder="Username"></Form.Control>
                                    <Form.Control.Feedback type="invalid">Username is required!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="passLogin">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control required type="password" placeholder="password"></Form.Control>
                                    <Form.Control.Feedback type="invalid">Password is required!</Form.Control.Feedback>
                                </Form.Group>                               
                                <FormGroup className="text-center">
                                    <Button type="submit" className="loginBtn">Login</Button> 
                                    <Button type="button" className="cancelBtn" onClick={showIntro}>Cancel</Button> 
                                </FormGroup>                                         
                                <FormGroup className="text-center">
                                    <FontAwesomeIcon icon={faFacebookSquare} className="fontFacebook mr-2 ml-2"></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faGoogle} className="fontGoogle mr-2 ml-2"></FontAwesomeIcon> 
                                    <FontAwesomeIcon icon={faTwitter} className="fontTwitter ml-2 mr-2"></FontAwesomeIcon>
                                </FormGroup>                                                                                                                           
                            </Form>
                        </div>
                    </Col>
                </Row>              
            </Container>
        </div>
    );
}

export default Login;
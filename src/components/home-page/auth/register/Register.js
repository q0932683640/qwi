import React, {useState} from "react";
import {useDispatch} from "react-redux";
import actionCreator from "../../../../redux/actionCreator";
import "./Register.css";
import {
    Button,
    Form,
    Container,
    Row,
    Col,
    FormGroup
} from 'react-bootstrap';
import { faFacebookSquare, faGoogle, faTwitter} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from "axios";

function Register() {
    const dispatch = useDispatch();
    let showLogin = () => {
        dispatch(actionCreator("authLogin"));
    }
    let showIntro = () => {
        dispatch(actionCreator("introShow"));
        dispatch(actionCreator("authHide"));
    }
    const [validated, setValidated] = useState(false);
    const handleSubmit = event => {    
        const form = event.currentTarget;
        console.log("form: %o",form);
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else {     
            axios.post('http://localhost:5000/user/register', {
                username: form.usrReg.value,
                password: form.passReg.value,
                email: form.emailReg.value
            })
            .then(function (response) {
                if (response.data.message === "OK") {                
                    showIntro();            
                }
                else if( response.data === "reg_not_available")
                {
                    alert("Please choose another username!");
                }        
            })
            .catch(function (error) {
                console.log(error);
            });      
        }
        setValidated(true);
    };
    return (
        <div className="register">
            <Container className="cRegister">
                <Row className="justify-content-center">
                    <Col md={6} lg={4}>
                        <div className="form">
                            <div className="text-center">
                                <h3 className="pb-2" style={{color:"rgb(45, 190, 76)"}}><span style={{color:"#EA3509"}}>R</span>egister</h3>  
                            </div>                         
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <FormGroup controlId="usrReg">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control required type="text" placeholder="Username"></Form.Control>
                                    <Form.Control.Feedback type="invalid">Your username is required!</Form.Control.Feedback>
                                </FormGroup>
                                <FormGroup controlId="passReg">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control required type="password" placeholder="password"></Form.Control>
                                    <Form.Control.Feedback type="invalid">Your password is required!</Form.Control.Feedback>
                                </FormGroup>
                                <FormGroup controlId="passRegAgain">
                                    <Form.Label>Password again</Form.Label>
                                    <Form.Control required type="password" placeholder="password again"></Form.Control>
                                    <Form.Control.Feedback type="invalid">Your password is required!</Form.Control.Feedback>
                                </FormGroup>
                                <FormGroup controlId="emailReg">
                                    <Form.Label>Your email</Form.Label>
                                    <Form.Control required type="email" placeholder="abc.123@mail.com"></Form.Control>
                                    <Form.Control.Feedback type="invalid">Your email is required!</Form.Control.Feedback>
                                </FormGroup>
                                <FormGroup className="text-center get-login">
                                    <Form.Label className="pl-2 pr-2">Already have an account?<br/> <span onClick={showLogin}>Login Now!</span></Form.Label>
                                </FormGroup>
                                <FormGroup className="text-center mt-2">
                                    <Button type="submit" className="loginBtn">Register</Button> 
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

export default Register;
import React from "react";
import {Formik} from "formik";
import * as yup from "yup";
import {Form, Button} from "react-bootstrap";
import axios from "axios";

function MessageForm(){
    const formSchema = yup.object({
        username: yup.string().min(2,"Two short").max(20,"Two long").required(),
        email: yup.string().matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,"Invalid email").required(),
        message: yup.string().min(5,"Two short").max(100,"Two long").required()
    });
    
    // const sendSubmit = event => {
    //     return ()=>{
    //     const form = event.currentTarget;
    //     if (form.checkValidity() === false) {
    //         event.preventDefault();
    //         event.stopPropagation();
    //     }
    //     else {
    //         axios.post('http://localhost:5000/messages/add', {
    //             username: form.mesUsername.value,
    //             email: form.mesEmail.value,
    //             content: form.mesContent.value                
    //         })
    //         .then(function (response) {
    //             if(response.data.username === form.mesUsername.value) 
    //                 alert("Send message success!");
    //             else
    //                 alert("Insert fail!");
    //         })
    //         .catch(function (error) {
    //             alert('Connection is getting trouble!');
    //             console.log(error);
    //         }); 
    //     }   
    //     }          
    // };
    return (
        <Formik
            validationSchema={formSchema}
            onSubmit={(values=>{
                    axios.post('http://localhost:5000/messages/add', {
                    username: values.username,
                    email: values.email,
                    content: values.message                
                })
                .then(function (response) {
                    if(response.data.username === values.username) {
                        values.username="";
                        values.message="";
                        values.email="";
                        alert("Send message success!");
                    }
                    else
                        alert("Insert fail!");
                })
                .catch(function (error) {
                    alert('Connection is getting trouble!');
                    console.log(error);
                }); 
            })}
            initialValues={{
                username:'',
                email:'',
                message:''
            }}
        >
            {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                isValid,
                errors,
            }) => (
                        <Form noValidate onSubmit={handleSubmit}>
                            <Form.Group controlId="mesUsername">
                                <Form.Label>Your Name: </Form.Label>                             
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Enter your name" 
                                        onChange={handleChange}
                                        name="username"
                                        value={values.username}
                                        isInvalid={errors.username}                                      
                                        />
                                    <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback> 
                                    <Form.Control.Feedback type="valid">OK</Form.Control.Feedback>                                                        
                            </Form.Group>  
                            <Form.Group controlId="mesEmail">
                                <Form.Label>Your Email: </Form.Label>                            
                                    <Form.Control 
                                        type="email" 
                                        placeholder="Enter your email"                                                                             
                                        onChange={handleChange}
                                        name="email"
                                        value={values.email}
                                        isInvalid={errors.email}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="mesContent">
                                <Form.Label>Your messages here</Form.Label>               
                                    <Form.Control 
                                        as="textarea"                                        
                                        rows="3"                                        
                                        placeholder="Enter your message" 
                                        name="message"
                                        value={values.message}
                                        onChange={handleChange}
                                        isInvalid={errors.message}
                                        />
                                    <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>                                     
                            </Form.Group>
                            <Form.Group>
                                <Button type="submit">Submit</Button>
                            </Form.Group>
                        </Form>
                    )
            }
        </Formik> 
    );
}
export default MessageForm;
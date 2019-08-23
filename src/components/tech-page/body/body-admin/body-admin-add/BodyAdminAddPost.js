import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';

function BodyAdminAddPost() {  
    const urlAddPost="http://q-site-server.herokuapp.com/edit/addpost";
    let title;
    let category;
    let content;
    return (
        <div className="BodyAdminAddPost">
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Form action={urlAddPost} method="POST">
                                <h1>Add New Post</h1>
                                <Form.Group controlId="formTitle">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type="text" placeholder="Enter title here!" 
                                        onChange={(evt)=>{title=evt.target.value;}}>
                                    </Form.Control>                                   
                                </Form.Group>
                                <Form.Group controlId="formCategory">
                                    <Form.Label>Category</Form.Label>
                                    <select className="form-control" onChange={(evt)=>{category=evt.target.value;}}>
                                        <option value="htmlcss">HTML/CSS</option>
                                        <option value="javascript">JAVASCRIPT</option>
                                        <option value="java">JAVA</option>
                                        <option value="nodejs">NODEJS</option>
                                        <option value="reactjs">REACTJS</option>
                                        <option value="springboot">SPRINGBOOT</option>
                                    </select>                                   
                                </Form.Group>
                                <Form.Group controlId="formContent">
                                    <Form.Label>Content</Form.Label>
                                    <Form.Control as="textarea" rows="10" onChange={(evt)=>{content=evt.target.value;}}/>
                                </Form.Group>
                                <Button variant="primary" type="button" onClick={sendData()}>Submit</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );

    // function sendData(){
    //     return ()=>{
    //         axios.options(urlAddPost,{})
    //         .then(function (response) {
    //             axios.post(urlAddPost, {title:title, category:category, content:content})
    //             .then(function (response) {
    //                 console.log(response);
    //             })
    //             .catch(function (error) {
    //                 console.log(error);
    //             });
    //         })             
    //         .catch(function (error) {
    //             console.log(error);
    //         });        
    //     }
    // }
    function sendData(){
        return ()=>{
            axios.post(urlAddPost, {title:title, category:category, content:content})
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });       
        }
    }
}

export default BodyAdminAddPost;
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import {Editor, EditorState, RichUtils, convertToRaw} from 'draft-js'; 
import './BodyAdminAddPost.css';

function BodyAdminAddPost() {  
    const urlAddPost="http://q-site-server.herokuapp.com/edit/addpost";
    //let title;
    //let category;
    const [editorState, setEditorState] = React.useState(
        EditorState.createEmpty()
    );
    const [title, setTitle] = React.useState();
    const [category, setCategory] = React.useState();
    // const [dataState, setEditorState] = React.useState(["","",EditorState.createEmpty()]);
    return (
        <div className="BodyAdminAddPost">
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Form>
                                <h1>Add New Post</h1>
                                <Form.Group controlId="formTitle">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type="text" placeholder="Enter title here!" 
                                        onChange={(evt) => {
                                            setTitle(evt.target.value);                                       
                                        }}>
                                    </Form.Control>                                   
                                </Form.Group>
                                <Form.Group controlId="formCategory">
                                    <Form.Label>Category</Form.Label>
                                    <select className="form-control" onChange={(evt)=>{setCategory(evt.target.value)}}>
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
                                    <div className="rich-text">
                                        <button className="btn btn-outline-primary" onClick={_onBoldClick}>B</button>
                                        <button className="btn btn-outline-primary" onClick={_onUnderlineClick}>U</button>
                                        <button className="btn btn-outline-primary" onClick={_onItalicClick}><em>I</em></button>
                                        <button className="btn btn-outline-primary" onClick={_onCodeClick}>CODE</button>
                                        {/* <button className="btn btn-outline-primary" onClick={_onToggleCodeClick}>TCODE</button> */}
                                    </div>
                                    <div className="editors">
                                        <Editor                                                                                                                    
                                            editorState={editorState}
                                            onChange={setEditorState}                          
                                        />
                                    </div>                  
                                </Form.Group>              
                                <Button variant="primary" type="button" onClick={sendData}>Submit</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
    function _onBoldClick() {
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
    }
    function _onItalicClick() {
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
    }
    function _onUnderlineClick() {
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'));
    }
    function _onCodeClick() {
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'CODE'));
    }
    // function _onToggleCodeClick() {
    //     setEditorState(RichUtils.toggleCode(editorState));
    // }


    function sendData(){
        let contentRaw = convertToRaw(editorState.getCurrentContent());
        let objData = {title:title, category:category, content: JSON.stringify(contentRaw)};
        console.log("data send: ", objData);
        axios.post(urlAddPost, objData)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
        });       
    }
}
export default BodyAdminAddPost;
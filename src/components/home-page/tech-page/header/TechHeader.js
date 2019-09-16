import React from 'react';
import logo from './images/logo.jpg';
import axios from "axios";
import actionCreator from '../../../../redux/actionCreator';
import {useDispatch} from 'react-redux';
import "./styleTechHeader.css";
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';

function TechHeader(props) {
  const dispatch = useDispatch();
  return (
    <div style={styles.body}>
      <div>
        <Container fluid="true">
          <Row style={styles.logo}>
            <Col>
              <div className="d-flex">
                <div style={{width:"50%", paddingLeft:"30px"}}>
                  <span><img alt="Logo!" src={logo} width="70px" height="auto"/></span>
                  <span style={{color:"red"}}>T</span>
                  <span>echtut</span>
                </div>
                <div className="d-flex justify-content-end" style={{fontSize:"20px", width:"50%", paddingRight:"30px"}}>Login</div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col style={styles.header}>
            <header>
              <ul style={styles.ul}>
                <li onClick={async () => {
                  let data = await getDataPost("assembly");
                  dispatch(actionCreator("getDataPost", data));
                }}>
                  Assembly
                </li>
                <li onClick={async () => {
                  let data = await getDataPost("cc");
                  dispatch(actionCreator("getDataPost", data));
                }}>
                  C/C++
                </li>
                <li onClick={async () => {
                  let data = await getDataPost("java");
                  dispatch(actionCreator("getDataPost", data));
                }}>
                  Java
                </li>
                <li  onClick={async () => {
                  let data = await getDataPost("htmlcss");
                  dispatch(actionCreator("getDataPost", data));
                }}>
                  Html&CSS
                </li>
                <li onClick={async () => {
                  let data = await getDataPost("javascript");
                  dispatch(actionCreator("getDataPost", data));
                }}>
                  JavaScript
                </li>
                <li onClick={async () => {
                  let data = await getDataPost("spring");
                  dispatch(actionCreator("getDataPost", data));
                }}>
                  Spring
                </li>
                <li onClick={async () => {
                  let data = await getDataPost("nodejs");
                  dispatch(actionCreator("getDataPost", data));
                }}>
                  NodeJS
                </li>
                <li onClick={async () => {
                  let data = await getDataPost("reactjs");
                  dispatch(actionCreator("getDataPost", data));
                }}>
                  ReactJS
                </li>
              </ul>
              </header>
            </Col>
          </Row>
        </Container>
    </div>
    </div>
  );
}
async function getDataPost(category){
  const url = "http://q-site-server.herokuapp.com/find?category="+ category;
  return await axios.get(url);
}

const styles = {
  logo:{
    display: "flex",
    backgroundColor: "#fff",
    height: "70px",
    color: "#020312",
    fontSize: "30px"
  },
  header:{
    color: "#c8c8ca",
    fontFamily: "helvetica, sans-serif",
    fontSize: "18px",
    backgroundColor: "#020312"
  },
  ul:{
    paddingTop: "15px",
    display: "flex",
    flexWrap: "wrap",
    listStyleType: "none"
  },
  body:{
    backgroundColor: "#020312"
  }
}
export default TechHeader;
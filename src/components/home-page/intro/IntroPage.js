import React, {useRef, useState} from "react";
import { Navbar, Container, Row, Image, Nav, Col, Card, ProgressBar} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faFirefox, faYoutube, faTwitter} from '@fortawesome/free-brands-svg-icons';
import { faMobileAlt, faMicrochip, faMapMarkedAlt, faPhoneVolume, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import logo from "./images/logo.png";
import me from "./images/me.jpg";
import team1 from "./images/team1.jpg";
import team2 from "./images/team2.jpg";
import team3 from "./images/team3.png";
import sFactory from "./images/sFactory.jpg";
import "./IntroPage.css";
import ModalDetail from "./details/ModalDetail";
import {webAppData, mobileAppData, iotAppData, sFactoryData} from "./common/DetailData";
// import axios from "axios";
import {NavLink} from "react-router-dom";
import FormikForm from "./details/MessageForm";

function IntroPage({match}){

    const [webState, setWebState] = useState(false);
    const [mobileState, setMobileState] = useState(false);
    const [iotState, setIOTState] = useState(false);
    const [sFactoryState, setSFactoryState] = useState(false);
    //scroll window to the component from menu link
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const serviceRef = useRef(null);
    const portfolioRef = useRef(null);
    const experienceRef = useRef(null);
    const teamRef = useRef(null);
    const contactRef = useRef(null);

    //validate form message
    // const [validated, setValidated] = useState(false);
    // const handleSubmit = event => {
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
    //     setValidated(true);       
    // };
    //link file download cv.
    const thai="http://localhost:5000/cv/CV_QuynhPV_FrontEnd.doc";
    const quynh="http://localhost:5000/cv/CV_QuynhPV_FrontEnd.doc";
    const binh="http://localhost:5000/cv/CV_QuynhPV_FrontEnd.doc";
    //
    const winHeight = window.screen.height;
    console.log(winHeight);
    return (
        <div id="IntroPage">
            {/* navbar */}
            <Navbar fixed="top" expand="md" className="navbarMenu">
                <Container>
                    <Navbar.Brand href="#home"><Image src={logo} rounded width="50px" height="50px"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navMenu" style={{backgroundColor:"#e0e0e0"}}></Navbar.Toggle>
                    <Navbar.Collapse id="navMenu">
                        <Nav className="ml-auto text-center">
                            <Nav.Link className="navLink" href="#" onClick={()=>
                                    window.scrollTo({top:homeRef.current.offsetTop - 75, behavior:"smooth"})
                                }>Home</Nav.Link>
                            <Nav.Link className="navLink" href="#" onClick={()=>
                                    window.scrollTo({top:aboutRef.current.offsetTop - 75, behavior:"smooth"})
                                }>About Me</Nav.Link>
                            <Nav.Link className="navLink" href="#" onClick={()=>
                                    window.scrollTo({top:serviceRef.current.offsetTop - 75, behavior:"smooth"})
                                }>Service</Nav.Link>
                            <Nav.Link className="navLink" href="#"
                                onClick={()=>
                                    window.scrollTo({top:portfolioRef.current.offsetTop - 75, behavior:"smooth"})
                                }>
                                Portfolio
                            </Nav.Link>
                            <Nav.Link className="navLink" onClick={()=>
                                    window.scrollTo({top:experienceRef.current.offsetTop - 75, behavior:"smooth"})
                                }>Experience</Nav.Link>
                            <Nav.Link className="navLink" href="#" onClick={()=>
                                    window.scrollTo({top:teamRef.current.offsetTop - 75, behavior:"smooth"})
                                }>My Team</Nav.Link>
                            <Nav.Link className="navLink" href="#" onClick={()=>
                                    window.scrollTo({top:contactRef.current.offsetTop - 75, behavior:"smooth"})
                                }>Contact</Nav.Link>                           
                        </Nav>
                    </Navbar.Collapse>
                    {/* test */}
                   
                </Container>                
            </Navbar>        
            {/* home */}
            <section className="home">
                <Container ref={homeRef} className="d-flex flex-column justify-content-center" style={{minHeight:"1080px"}}>
                    <Row>                      
                        <Col md={5} lg={4} className="d-flex justify-content-center" >
                            <div className="home-techtut">
                                <h1 className="colorOrange">We are the world!</h1>
                                <p className="colorOrange">
                                        Visit TECHTUT website?
                                </p>  
                                <NavLink style={{textDecoration:"none", color:"#020312"}} className="buttonOrange" to={`${match.url}techtut`}>Let's Go</NavLink> 
                                {/* <NavLink style={{textDecoration:"none", color:"#020312"}} className="buttonOrange" to={`admin/dashboard`}>Let's Go</NavLink> */}
                            </div> 
                        </Col>
                        <Col md={7} lg={8}></Col>
                    </Row>                     
                </Container>
            </section>

            {/* about Me */}
            <Container ref={aboutRef} className="aboutMe mt-5">
                <Row>
                    <Col md={4}>
                        <Image src={me} fluid="true"></Image>
                    </Col>
                    <Col md={8}>
                        <h4 className="colorOrange">- About Me -</h4>
                        <h2 className="pb-2">HELLO! I AM <span className="colorOrange">QUYNH PHUNG</span></h2>
                        <div className="pb-2">
                            <p>I’m a web developer and graphic designer living
                                in HCM, VIETNAM. I spend my days with my hands
                                in many different areas of web development from 
                                back end programming to front end engineering.
                            </p>
                            <p>I’m extremely passionate about web development and 
                                design in all it’s forms and helping small businesses 
                                and artisans build and improve their online presence.
                                Aside from web development, I enjoy spending my time 
                                with my friend brewing beer, taking
                                photos and playing and watching sports.
                            </p>
                        </div>
                        <Row className="pl-3 pr-3">
                            <Col md={6} className="pt-2">                              
                                <div>Name: Phung Van Quynh</div>
                                <div>Birthday: 11.07.1990</div>
                                <div>From: HCM, Viet Nam</div>                                
                            </Col>
                            <Col md={6} className="pt-2">                          
                                <div>Interest: Game & Girls</div>
                                <div>Phone: 0932.683.640</div>
                                <div>Email: quynhpub90@gmail.com</div>                             
                            </Col>                         
                        </Row>
                        <Row>
                            <Col md={12}>
                                <button type="button" className="buttonOrange"><a style={{color:"#e0e0e0", textDecoration:"none"}} href={quynh}>Download CV</a></button> 
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            {/* service */}
            <Container ref={serviceRef} className="services mt-5 mb-5">
                <h4 className="colorOrange"> - Services - </h4>
                <h2>MY SERVICES</h2>
                <Row style={{color:"black"}}>
                    <Col md={4}  onClick={()=>setWebState(true)}>
                        <Card className="sCard">                  
                            <Card.Body className="sCardBody">
                                <FontAwesomeIcon icon={faFirefox}  className="servicesFontAwesome"/> 
                                <Card.Title>WEB APP</Card.Title>
                                <Card.Text>
                                    I have the strong base in Website Application MVC and RestAPI technology.
                                </Card.Text>
                            </Card.Body>
                        </Card>                        
                    </Col>
                    <ModalDetail show={webState} onHide={()=>{setWebState(false)}} data={webAppData}></ModalDetail>
                    <Col md={4} onClick={()=>setMobileState(true)}>
                        <Card className="sCard">                  
                            <Card.Body className="sCardBody">
                                <FontAwesomeIcon icon={faMobileAlt}  className="servicesFontAwesome"/> 
                                <Card.Title>MOBILE APP</Card.Title>
                                <Card.Text>
                                    I have 2 years of experience in develop android with Java Language.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <ModalDetail show={mobileState} onHide={()=>{setMobileState(false)}} data={mobileAppData}></ModalDetail>
                    <Col md={4} onClick={()=>setIOTState(true)}>
                        <Card className="sCard">                  
                            <Card.Body className="sCardBody">
                                <FontAwesomeIcon icon={faMicrochip}  className="servicesFontAwesome"/> 
                                <Card.Title>IOT EMBEDDED</Card.Title>
                                <Card.Text>
                                    I have 3 months of experience in develop IOT devices with C/C++, JavaScript.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col> 
                    <ModalDetail show={iotState} onHide={()=>{setIOTState(false)}} data={iotAppData}></ModalDetail>          
                </Row>
            </Container>
            {/* portfolio */}
            <Container ref={portfolioRef} className="pofolio mt-mb-5">
            <h4 className="colorOrange">- Portfolio -</h4>
            <h2>AWESOME WORKS</h2>
            <Row>
                <Col sm={6} md={4} onClick={()=>setSFactoryState(true)}>
                    <Card className="sCard">
                        <Card.Img variant="top" src={sFactory} />
                        <Card.Body>
                            <Card.Title className="colorOrange">Smart Factory</Card.Title>
                            <Card.Text>We build the Smart Factory Project in 6 weeks with Spring boot, Postgree and Angular 8.</Card.Text>                          
                        </Card.Body>
                    </Card>
                </Col>
                <ModalDetail show={sFactoryState} onHide={()=>{setSFactoryState(false)}} data={sFactoryData}></ModalDetail>       
            </Row>
            </Container>

            {/* experience */}
            <Container ref={experienceRef} className="mt-5 mb-5">
                <h4 className="colorOrange">-RESUME-</h4>
                <h2>WORKING EXPERIENCE</h2>
                <Row style={{color:"black"}}>
                    <Col sm={6} md={4}>
                        <Card className="expCard">                           
                            <Card.Body className="expCardBody">
                                <h6 className="colorOrange">2018-2019</h6>
                                <Card.Title>DESIGNER</Card.Title>
                                <Card.Text>
                                    Free lancer after graduate from PTIT for longtime.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={6} md={4}>
                        <Card className="expCard">                           
                            <Card.Body className="expCardBody">
                                <h6 className="colorOrange">2019-2020</h6>
                                <Card.Title>TRAINING</Card.Title>
                                <Card.Text>
                                    We joined in FSoft HCM and took the trainning.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={6} md={4}>
                        <Card className="expCard">                           
                            <Card.Body className="expCardBody">
                                <h6 className="colorOrange">2020-2021</h6>
                                <Card.Title>First Project</Card.Title>
                                <Card.Text>
                                    Deal successfully with our customer in First Web Project.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>                   
                </Row>               
                <Row className="pt-5">  
                    <Col md={6}>
                        <h2>WE PROVIDE MAXIMUM QUALITY</h2>
                        <p>We are a leading web development and digital Marketing company, 
                            delivering high quality web solutions throughout the world for years. 
                            Our highly skilled developers deliver out of box results including not 
                            only eye catching elements, but GUI, originality, ease of use and functioning 
                            as well. We develop appealing and intuitive web solutions to enhance your 
                            customer base among your target audiences. Our team of programmers, data analysts,
                             and business analysts work together to make your dreams come true.
                        </p>
                    </Col>
                    <Col md={6}>
                        <div>
                            HTML
                            <ProgressBar variant="success" now={90} label="90%" className="expProgressBar"></ProgressBar>
                        </div>
                        <div>
                            CSS
                            <ProgressBar variant="success" now={80} label="80%" className="expProgressBar"></ProgressBar>
                        </div>
                        <div>
                            C/C++
                            <ProgressBar variant="success" now={70} label="70%" className="expProgressBar"></ProgressBar>
                        </div>
                        <div>
                            JAVA
                            <ProgressBar variant="success" now={85} label="85%" className="expProgressBar"></ProgressBar>
                        </div>
                        <div>
                            JAVA SCRIPT
                            <ProgressBar variant="success" now={80} label="80%" className="expProgressBar"></ProgressBar>
                        </div>
                        <div>
                            PYTHON
                            <ProgressBar variant="warning" now={10} label="10%" className="expProgressBar"></ProgressBar>
                        </div>
                    </Col>
                </Row>
            </Container>
            
            {/* team */}
            <Container ref={teamRef} className="mt-5 mb-5">            
                <h4 className="colorOrange">-Team-</h4>
                <h2>CREATIVE TEAM</h2>
                <Row style={{color:"black"}} className="mt-3">
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={team1}></Card.Img>
                            <Card.Body>
                                <Card.Title>
                                    <div className="colorOrange">Do Le Phuc Binh</div>
                                    <div style={{fontSize:".8em"}}>Front-End Developer</div>
                                </Card.Title>
                                <Card.Text>                                   
                                    1 years experience in front-end!<br/>
                                    Master in Bootstrap, Angular...                               
                                </Card.Text>                                
                                <button type="button" className="buttonOrange"><a style={{color:"black", textDecoration:"none"}} href={binh}>Download CV</a></button> 
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={team2}></Card.Img>
                            <Card.Body>
                                <Card.Title>
                                    <div className="colorOrange">Phung Van Quynh</div>
                                    <div style={{fontSize:".8em"}}>Fullstack JS Dev</div>
                                </Card.Title>
                                <Card.Text>
                                   1 years of experience! <br/>
                                    Master in NodeJS, React JS ...
                                </Card.Text>                               
                                <button type="button" className="buttonOrange"><a style={{color:"black", textDecoration:"none"}} href={quynh}>Download CV</a></button> 
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={team3}></Card.Img>
                            <Card.Body>
                                <Card.Title>
                                    <div className="colorOrange">Pham Quoc Thai</div>
                                    <div style={{fontSize:".8em"}}>Java Developer</div>
                                </Card.Title>
                                <Card.Text>                                  
                                    1 years of experience! <br/>
                                    Master in Spring and Android...            
                                </Card.Text>
                                <button type="button" className="buttonOrange"><a style={{color:"black", textDecoration:"none"}} href={thai}>Download CV</a></button>                                           
                            </Card.Body>
                        </Card>
                    </Col>              
                </Row>
            </Container>
            {/* contact */}
            <Container ref={contactRef} className="mt-3">
                <h4 className="colorOrange">-Contact-</h4>
                <h2>Get In Touch</h2>               
                <Row className="pt-5">
                    <Col md={4} className="pt-2 pb-3">
                        <div>
                            <p><FontAwesomeIcon className="gitFontAwesome" icon={faMapMarkedAlt}></FontAwesomeIcon><span className="pl-3">District 9, HCM City.</span></p>
                        </div>
                        <div>
                            <p><FontAwesomeIcon className="gitFontAwesome" icon={faPhoneVolume}></FontAwesomeIcon><span className="pl-3">(+84) 932.683.640</span></p>
                        </div>
                        <div>
                            <p><FontAwesomeIcon className="gitFontAwesome" icon={faEnvelope}></FontAwesomeIcon><span className="pl-3">quynhpub90@gmail.com</span></p>
                        </div>                                       
                    </Col>
                    <Col md={8}>
                        {/* <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Group controlId="mesUsername">
                                <Form.Label>Your Name: </Form.Label>
                                <InputGroup>
                                    <Form.Control type="text" placeholder="Enter your name" required/>
                                    <Form.Control.Feedback type="invalid">Your name is not valid!</Form.Control.Feedback>
                                </InputGroup>                            
                            </Form.Group>  
                            <Form.Group controlId="mesEmail">
                                <Form.Label>Your Email: </Form.Label>
                                <InputGroup>
                                    <Form.Control type="email" placeholder="Enter your email" required/>
                                    <Form.Control.Feedback type="invalid">Your email is not valid!</Form.Control.Feedback>
                                </InputGroup>
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="mesContent">
                                <Form.Label>Your messages here</Form.Label>
                                <InputGroup>
                                    <Form.Control as="textarea" rows="3" placeholder="Enter your message" required/>
                                    <Form.Control.Feedback type="invalid">Your messages is not valid!</Form.Control.Feedback>
                                </InputGroup>                             
                            </Form.Group>
                            <Form.Group>
                                <Button type="submit">Submit</Button>
                            </Form.Group>
                        </Form> */}
                        <FormikForm></FormikForm>
                    </Col>
                </Row>
            </Container>
            {/* footer */}
            <hr style={{border:"1px solid #aaa"}}/>
            <Container>
                <Row>
                    <Col className="text-center pb-5">
                        <h5>&copy; React JS site!</h5>
                        <div>
                            <p>
                                <FontAwesomeIcon icon={faFacebookSquare} className="gitFontFacebook mr-2"></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faYoutube} className="gitFontYoutube mr-2"></FontAwesomeIcon> 
                                <FontAwesomeIcon icon={faTwitter} className="gitFontTwitter mr-2"></FontAwesomeIcon>
                            </p>
                        </div> 
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default IntroPage;
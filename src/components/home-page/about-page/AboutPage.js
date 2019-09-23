import React from "react";
import { Navbar, Container, Row, Image, Nav, Button, Col, Card, Form, ProgressBar} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faFirefox, faYoutube, faTwitter} from '@fortawesome/free-brands-svg-icons';
import { faMobileAlt, faMicrochip, faMapMarkedAlt, faPhoneVolume, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import logo from "./images/logo.png";
import me from "./images/me.jpg";
import team1 from "./images/team1.jpg";
import team2 from "./images/team2.jpg";
import team3 from "./images/team3.png";
import sFactory from "./images/sFactory.jpg";
import "./AboutPage.css";
import axios from "axios";
function AboutPage(){
    const aboutRef = React.useRef(null);
    const portfolioRef = React.useRef(null);
    // useMountEffect(() => scrollToRef(myRef))
    const thai="http://10.88.136.52:8443/downloadFile/CV_ThaiPQ5_Java.doc";
    const quynh="http://10.88.136.52:8443/downloadFile/CV_QuynhPV_Java.doc";
    const binh="http://10.88.136.52:8443/downloadFile/CV_QuynhPV_Java.doc";
    return (
        <div id="AboutPage">
            {/* navbar */}
            <Navbar fixed="top" expand="md" className="navbarMenu">
                <Container>
                    <Navbar.Brand href="#home"><Image src={logo} rounded/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navMenu" style={{backgroundColor:"#e0e0e0"}}></Navbar.Toggle>
                    <Navbar.Collapse id="navMenu">
                        <Nav className="ml-auto text-center">
                            <Nav.Link className="navLink" href="Home">Home</Nav.Link>
                            <Nav.Link className="navLink" href="About Me">About Me</Nav.Link>
                            <Nav.Link className="navLink" href="Service">Service</Nav.Link>
                            <Nav.Link className="navLink" href="Portfolio" onClick={scrollToRef}>Portfolio</Nav.Link>
                            <Nav.Link className="navLink" href="Experience">Experience</Nav.Link>
                            <Nav.Link className="navLink" href="My Team">My Team</Nav.Link>
                            <Nav.Link className="navLink" href="Contact">Contact</Nav.Link>
                            <Nav.Link className="navLink" href="Contact"><a href="http://10.88.136.52:8443/login">Login</a></Nav.Link>
                            <Nav.Link className="navLink" href="Contact"><a href="http://10.88.136.52:8443/upload">upfile</a></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>                
            </Navbar>        
            {/* home            */}
            <Container fluid="true" className="home"> 
                <div>
                    <h1 className="colorOrange">We are the world!</h1>
                    <p className="colorOrange">
                               Visit TECHTUT website?
                    </p>
                    <button className="buttonOrange">LET'S GO!</button>                
                </div>                     
            </Container>

            {/* about Me */}
            <Container className="aboutMe mt-5">
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
                        <Row>
                            <Col md={6}>
                                <div>Name: Phung Van Quynh</div>
                                <div>Birthday: 11.07.1990</div>
                                <div>From: HCM, Viet Nam</div>                              
                            </Col>
                            <Col md={6}>
                                <div>Interest: Game & Girls</div>
                                <div>Phone: 0932.683.640</div>
                                <div>Email: quynhpub90@gmail.com</div>
                            </Col>
                            <Col md={12}>
                                <button type="button" className="buttonOrange"><a style={{color:"#e0e0e0", textDecoration:"none"}} href={quynh}>Download CV</a></button> 
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            {/* service */}
            <Container className="services mt-5 mb-5">
                <h4 className="colorOrange"> - Services - </h4>
                <h2>MY SERVICES</h2>
                <Row style={{color:"black"}}>
                    <Col md={4}>
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
                    <Col md={4}>
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
                    <Col md={4}>
                        <Card className="sCard">                  
                            <Card.Body className="sCardBody">
                                <FontAwesomeIcon icon={faMicrochip}  className="servicesFontAwesome"/> 
                                <Card.Title>IOT EMBEDDED</Card.Title>
                                <Card.Text>
                                    I have 4 years of experience in develop IOT devices with C/C++
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>           
                </Row>
            </Container>
            {/* portfolio */}
            <Container ref={portfolioRef} className="pofolio mt-mb-5">
            <h4 className="colorOrange">- Portfolio -</h4>
            <h2>AWESOME WORKS</h2>
            <Row>
                <Col sm={6} md={4}>
                    <Card className="sCard">
                        <Card.Img variant="top" src={sFactory} />
                        <Card.Body>
                            <Card.Title className="colorOrange">Smart Factory</Card.Title>
                            <Card.Text>We build the Smart Factory Project in 6 weeks with Spring boot, Postgree and Angular 8.</Card.Text>                          
                        </Card.Body>
                    </Card>
                </Col>       
            </Row>
            </Container>

            {/* experience */}
            <Container className="mt-5 mb-5">
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
            <Container className="mt-5 mb-5">            
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
                                    <div>3 years experience in front-end! </div>
                                    <div>Master in Bootstrap, Angular...</div>                               
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
                                    <div>1 years of experience! </div>
                                    <div>Master in NodeJS, React JS ...</div>
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
                                    <div>2 years of experience! </div>
                                    <div>Master in Spring and Android...</div>               
                                </Card.Text>
                                <button type="button" className="buttonOrange"><a style={{color:"black", textDecoration:"none"}} href={thai}>Download CV</a></button>                                           
                            </Card.Body>
                        </Card>
                    </Col>              
                </Row>
            </Container>
            {/* get in touch */}
            <Container className="mt-3">
                <h4 className="colorOrange">-Contact-</h4>
                <h2>Get In Touch</h2>               
                <Row className="pt-5">
                    <Col md={4} className="mt-3">
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
                        <Form>
                            <Form.Group>
                                <Form.Label>Your Name: </Form.Label>
                                <Form.Control type="text" placeholder="Enter your name"/>
                            </Form.Group>  
                            <Form.Group>
                                <Form.Label>Your Email: </Form.Label>
                                <Form.Control type="text" placeholder="Enter your email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Your messages here</Form.Label>
                                <Form.Control as="textarea" rows="3" />
                            </Form.Group>
                            <Button>Submit</Button>
                        </Form>
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

function scrollToRef(ref){
    window.scrollTo(0, ref.current.offsetTop);
}
export default AboutPage;
import React from "react";
import { Modal, Button, Image } from "react-bootstrap";
import "./ModalDetail.css";

function ModalDetail (props) {
    return (
        <div >
            <Modal {...props} size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered         
            >  
                <Modal.Header closeButton className="ModalDetail">
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h3>{props.data.title}</h3>                       
                    </Modal.Title>                                                 
                </Modal.Header>
                <Modal.Body className="text-center">
                <Image src={props.data.image} className="text-center" width="400px"></Image>
                <p className="pt-4 pl-2 pr-2">
                    {props.data.body}
                </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={props.onHide}>Close</Button>
                </Modal.Footer>        
            </Modal>
        </div>    
    );
}

export default ModalDetail;
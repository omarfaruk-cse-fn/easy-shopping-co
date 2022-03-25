import React, { useState } from 'react';
import { Button, Image, Modal } from 'react-bootstrap';
import './ReactModal.css'

const ReactModal = (props) => {
    const { category, description, id, image, price, rating } = props.product
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Details
            </Button>

            <Modal className='modal' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{category}</Modal.Title>
                </Modal.Header>
                <img className='w-50 m-auto' src={image} alt="" />
                <Modal.Body>{description}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ReactModal;
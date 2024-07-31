import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function Popup({ fileName, handleClose, show }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        {/* <Modal.Title>Modal heading</Modal.Title> */}
      </Modal.Header>
      <Modal.Body>{fileName}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        {/* <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button> */}
      </Modal.Footer>
    </Modal>
  );
}

export default Popup;

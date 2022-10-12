import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="modal-form">
            <Form.Group className="">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name of the product"
                autoFocus
              />
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Category"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Label>Created By</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Category"
              autoFocus
            />
            <Form.Label>Status</Form.Label>
            <Form.Select>
              <option value="in_stock">In_Stock</option>
              <option value="out_of_stock">Out_of_Stock</option>
              <option value="limited_available">Limited_available</option>
            </Form.Select>
            <Form.Label>Created At</Form.Label>
            <Form.Control
              type="datetime-local"
              placeholder="Enter Category"
              autoFocus
            />
            <Form.Label>Updated At</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Category"
              autoFocus
            />

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="container">
        <div className="d-flex justify-content-between">
          <Button variant="primary" onClick={handleShow}>Add New Product</Button>
          <FormControl
            className="area"
            placeholder="Search by product name or category"
            aria-label="Search"
            aria-describedby="basic-addon2"
          />
        </div>
      </div>
    </>
  );
};
export default Header;

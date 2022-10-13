import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';

const Data = ({
  data, filteredItem, handleDelete, handleUpdate,
}) => {
  const [show, setShow] = useState(false);
  const [itemToUpdate, setItemToUpdate] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = (item) => {
    setItemToUpdate(item);
    setShow(true);
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: itemToUpdate,
    // eslint-disable-next-line arrow-parens
    onSubmit: (values) => {
      handleUpdate(values);
      handleClose();
    },
  });
  return (
    <>
      <div className="container">
        <Table responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Description</th>
              <th>Created At</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredItem ? filteredItem.map((item) => (
              <tr key={item.id}>
                <td>{item.product_name}</td>
                <td>{item.category_name}</td>
                <td>{item.description}</td>
                <td>{item.created_at.substring(0, 10)}</td>
                <td>{item.status}</td>
                <td>
                  <Button variant="success" onClick={() => handleShow(item)}>
                    Edit
                  </Button>
                </td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            )) : data.map((item) => (
              <tr key={item.id}>
                <td>{item.product_name}</td>
                <td>{item.category_name}</td>
                <td>{item.description}</td>
                <td>{item.created_at.substring(0, 10)}</td>
                <td>{item.status}</td>
                <td>
                  <Button variant="success" onClick={() => handleShow(item)}>
                    Edit
                  </Button>
                </td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <Modal show={show} onHide={handleClose}>

        <Modal.Header closeButton>
          <Modal.Title>Edit Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="modal-form" onSubmit={formik.handleSubmit}>
            <Form.Group className="">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="product_name"
                placeholder="Name of the product"
                value={formik.values.product_name}
                onChange={formik.handleChange}
                autoFocus
              />
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                name="category_name"
                value={formik.values.category_name}
                placeholder="Enter Category"
                onChange={formik.handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} name="description" value={formik.values.description} onChange={formik.handleChange} />
            </Form.Group>
            <Form.Label>Created By</Form.Label>
            <Form.Control type="text" placeholder="Your username" autoFocus value={formik.values.created_by} name="created_by" onChange={formik.handleChange} />
            <Form.Label>Status</Form.Label>
            <Form.Select name="status" value={formik.values.status} onChange={formik.handleChange}>
              <option value="in_stock">In_Stock</option>
              <option value="out_of_stock">Out_of_Stock</option>
              <option value="limited_available">Limited_available</option>
            </Form.Select>
            <div className="d-flex p-3">
              <Button variant="primary" type="submit">
                Save
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

Data.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
  filteredItem: PropTypes.instanceOf(Array).isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired,
};

export default Data;

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
// import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';

const Header = ({ addProduct, filterProducts }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const formik = useFormik({
    initialValues: {
      product_name: '',
      category_name: '',
      description: '',
      created_by: '',
      status: 'in_stock',
    },
    // eslint-disable-next-line arrow-parens
    onSubmit: (values) => {
      addProduct(values);
      handleClose();
    },
  });

  const formikFilter = useFormik({
    initialValues: {
      filter: '',
    },
    // eslint-disable-next-line arrow-parens
    onSubmit: (values) => {
      filterProducts(values);
      handleClose();
    },
  });

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="modal-form" onSubmit={formik.handleSubmit}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                id="name"
                name="product_name"
                placeholder="Name of the product"
                onChange={formik.handleChange}
                value={formik.values.product_name}
              />
              {/* <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                name="category_name"
                placeholder="Enter Category"
                onChange={formik.handleChange}
                value={formik.values.category_name}
              /> */}
            </Form.Group>
            <Form.Group
              className="mb-3"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" name="description" rows={3} onChange={formik.handleChange} value={formik.values.description} />
            </Form.Group>
            <Form.Label>Created By</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your username"
              name="created_by"
              onChange={formik.handleChange}
              value={formik.values.created_by}
              autoFocus
            />
            <Form.Label>Status</Form.Label>
            <Form.Select name="status" onChange={formik.handleChange}>
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

      <div className="container">
        <div className="d-flex justify-content-between">
          <Button variant="primary" onClick={handleShow}>Add New Product</Button>
          <div className="d-flex">
            <Form>
              <Form.Control
                type="text"
                name="filter"
                placeholder="Search by name or category"
                className="filter-container-input"
                onChange={(e) => {
                  formikFilter.handleChange(e);
                  filterProducts(e.target.value);
                }}
                value={formikFilter.values.filter}
              />
              {/* <Button type="submit" className="search-btn">Search</Button> */}
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

Header.propTypes = {
  addProduct: PropTypes.func.isRequired,
  filterProducts: PropTypes.func.isRequired,
};

export default Header;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/esm/Button';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
// import { useSelector, useDispatch } from 'react-redux';
// import dataList from '../Redux/action';

const Data = () => {
  // const dispatch = useDispatch();
  // const tableData = useSelector((state) => state.list.data);
  // console.log(tableData);

  // useEffect(() => {
  //   dispatch(dataList);
  // }, []);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get('https://sheltered-sea-10901.herokuapp.com/products');
      setData(res?.data || []);
    }
    fetchData();
  }, []);
  console.log(data);
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
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.product_name}</td>
                <td>{item.category_name}</td>
                <td>{item.description}</td>
                <td>{item.created_at.substring(0, 10)}</td>
                <td>{item.status}</td>
                <td>
                  <Button variant="success" onClick={handleShow}>Edit</Button>
                </td>
                <td>
                  <Button variant="danger">Delete</Button>
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
              placeholder="Your username"
              autoFocus
            />
            <Form.Label>Status</Form.Label>
            <Form.Select>
              <option value="in_stock">In_Stock</option>
              <option value="out_of_stock">Out_of_Stock</option>
              <option value="limited_available">Limited_available</option>
            </Form.Select>
            {/* <Form.Label>Created At</Form.Label>
        <Form.Control
          type="datetime-local"
          placeholder="Enter Category"
          autoFocus
        />
        <Form.Label>Updated At</Form.Label>
        <Form.Control
          type="datetime-local"
          placeholder="Enter Category"
          autoFocus
        /> */}

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
    </>
  );
};

export default Data;

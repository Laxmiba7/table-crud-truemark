import React from "react";
import Button from "react-bootstrap/esm/Button";
import Table from "react-bootstrap/Table";

export const Data = () => {
  return (
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
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>In Stock</td>
            <td><Button variant="success">Edit</Button></td>
            <td><Button variant="danger">Delete</Button></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>In Stock</td>
            <td><Button variant="success">Edit</Button></td>
            <td><Button variant="danger">Delete</Button></td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
            <td>In Stock</td>
            <td><Button variant="success">Edit</Button></td>
            <td><Button variant="danger">Delete</Button></td>
          </tr>
          
        </tbody>
      </Table>
      
    </div>
  );
};

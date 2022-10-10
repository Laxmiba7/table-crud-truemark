import React from "react";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";

export const Header = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-between">
        <Button variant="primary">Add New Product</Button>
        <FormControl
          placeholder="Search by product name"
          aria-label="Search"
          aria-describedby="basic-addon2"
        />
      </div>
    </div>
  );
};

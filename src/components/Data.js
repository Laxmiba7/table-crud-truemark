import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/esm/Button';
import Table from 'react-bootstrap/Table';
// import { useSelector, useDispatch } from 'react-redux';
// import dataList from '../Redux/action';

const Data = () => {
  // const dispatch = useDispatch();
  // const tableData = useSelector((state) => state.list.data);
  // console.log(tableData);

  // useEffect(() => {
  //   dispatch(dataList);
  // }, []);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get('https://sheltered-sea-10901.herokuapp.com/products');
      // eslint-disable-next-line array-callback-return
      const newRes = res.data.map((i) => {
        // eslint-disable-next-line no-unused-vars
        const createDate = new Date(i.created_at);
        const newDate = createDate.getDate();
        console.log(newDate);
      });
      console.log(newRes);
      setData(res.data);
    }
    fetchData();
  }, []);
  console.log(data);
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
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.product_name}</td>
              <td>{item.category_name}</td>
              <td>{item.description}</td>
              <td>{item.created_at}</td>
              <td>{item.status}</td>
              <td>
                <Button variant="success">Edit</Button>
              </td>
              <td>
                <Button variant="danger">Delete</Button>
              </td>
            </tr>
          ))}

          {/* <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>In Stock</td>
            <td>
              <Button variant="success">Edit</Button>
            </td>
            <td>
              <Button variant="danger">Delete</Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>In Stock</td>
            <td>
              <Button variant="success">Edit</Button>
            </td>
            <td>
              <Button variant="danger">Delete</Button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
            <td>In Stock</td>
            <td>
              <Button variant="success">Edit</Button>
            </td>
            <td>
              <Button variant="danger">Delete</Button>
            </td>
          </tr> */}
        </tbody>
      </Table>
    </div>
  );
};

export default Data;

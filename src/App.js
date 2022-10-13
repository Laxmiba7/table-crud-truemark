import { Provider } from 'react-redux';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Data from './components/Data';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import store from './Redux/reducers/store';

const App = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(null);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        'https://sheltered-sea-10901.herokuapp.com/products',
      );
      setData(res?.data || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const addProduct = async (values) => {
    try {
      const res = await axios.post('https://sheltered-sea-10901.herokuapp.com/products', values);
      setData((prevState) => ([...prevState, res.data]));
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://sheltered-sea-10901.herokuapp.com/products/${id}`,
      );
      setData((prevState) => prevState.filter((el) => el.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const filterProducts = (filter) => {
    // eslint-disable-next-line max-len
    const filteredItems = data.filter((el) => el.product_name === filter);
    if (filteredItems.length) {
      return setFilter(filteredItems);
    }
    if (!filteredItems.length && filter.length) {
      return setFilter([]);
    }
    return setFilter(null);
  };

  const handleUpdate = async (values) => {
    try {
      await axios.put(`https://sheltered-sea-10901.herokuapp.com/products/${values.id}`, values);
    } catch (error) {
      console.log(error);
    }
    fetchData();
  };

  return (
    <div>
      <Provider store={store}>
        <Header addProduct={addProduct} filterProducts={filterProducts} />
        <Data
          data={data}
          filteredItem={filter}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      </Provider>
    </div>
  );
};

export default App;

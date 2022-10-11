import axios from 'axios';
import { DATA_LIST } from '../constants';

const dataList = () => async (dispatch) => {
  const res = await axios.get('https://sheltered-sea-10901.herokuapp.com/products');
  dispatch({
    type: DATA_LIST,
    payload: res.data || [],
  });
};

export default dataList;

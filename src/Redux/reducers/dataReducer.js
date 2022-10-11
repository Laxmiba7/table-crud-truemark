import { DATA_LIST } from '../constants';

const initialState = {
  data: [],
  isLoading: true,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_LIST:
      console.log(action.payload);
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;

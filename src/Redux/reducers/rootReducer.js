import { combineReducers } from 'redux';
import dataReducer from './dataReducer';

const rootReducer = combineReducers({
  list: dataReducer,
});

export default rootReducer;

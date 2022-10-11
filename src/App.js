import { Provider } from 'react-redux';
import Header from './components/Header';
import Data from './components/Data';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import store from './Redux/reducers/store';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <Data />
      </Provider>
    </div>
  );
}

export default App;

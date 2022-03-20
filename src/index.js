import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./redux/store"
import { Provider } from 'react-redux';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import 'semantic-ui-css/semantic.min.css';
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
   <App/>
   </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



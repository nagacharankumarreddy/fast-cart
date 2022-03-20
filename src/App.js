import './App.css';
// import Header from './containers/Header';
import React from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ProductListing from "./containers/ProductListing"
import ProductDetail from "./containers/ProductDetail"
function App() {
  return (
    <div className="App">
        {/* <Header/> */}
      <Router>
        <Switch>
        <Route path="/" exact component={ProductListing} />
        <Route path="/product/:productId" exact component={ProductDetail} />
        <Route path="/" exact component={ProductListing} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

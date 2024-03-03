
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Homepage from './components/Homepage';
import Products from './components/Products';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/products" component={Products} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

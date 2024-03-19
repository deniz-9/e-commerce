
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Homepage from './components/Homepage';
import Products from './components/Products';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/products" component={Products} />
      </Switch>
      <Footer />
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

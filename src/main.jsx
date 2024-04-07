import React from "react";
import Homepage from "./components/Homepage";
import ProductPage from "./ProductPage/ProductPage"; // dosya path güncellendi. 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Products from "./components/Products";

function App() {
  return (
    <Router>
      <Switch>
        
        <Route path="/" exact component={Homepage} />
        <Route path="/products" component={ProductPage} />
        <Route
          path="/products/:categoryId/:productId/:productName"
          component={ProductPage}
        />
        <Route path="/product" component={Products} />
      </Switch>
    </Router>
  );
}

export default App;

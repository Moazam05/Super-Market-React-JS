import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Cart from "./components/Cart";
import SingUp from "./components/SingUp";
import ProductDetail from "./components/ProductDetail";
import StoreLocator from "./components/StoreLocator";

import Sugar from "./pages/Sugar";

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/singup" exact component={SingUp} />
          <Route path="/product-detail" exact component={ProductDetail} />
          <Route path="/store-locator" exact component={StoreLocator} />
          <Route path="/sugar" exact component={Sugar} />
        </Switch>
      </>
    );
  }
}

export default App;
